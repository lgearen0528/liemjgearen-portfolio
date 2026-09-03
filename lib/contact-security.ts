type ContactRateState = {
  count: number
  windowStart: number
}

const rateLimiter = new Map<string, ContactRateState>()
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_PER_KEY = 5

const normalizeHost = (value: string) => value.toLowerCase().trim()

const readAllowedOrigins = () => {
  const fromEnv = process.env.ALLOWED_ORIGINS
  if (!fromEnv) {
    return []
  }

  return fromEnv
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
}

export const isAllowedOrigin = (originHeader: string | null) => {
  if (!originHeader) {
    return false
  }

  const allowedOrigins = readAllowedOrigins()
  if (allowedOrigins.length === 0) {
    return false
  }

  return allowedOrigins.includes(originHeader)
}

export const isAllowedReferer = (refererHeader: string | null) => {
  if (!refererHeader) {
    return false
  }

  const allowedOrigins = readAllowedOrigins()
  if (allowedOrigins.length === 0) {
    return false
  }

  try {
    const refererUrl = new URL(refererHeader)
    const refererOrigin = `${refererUrl.protocol}//${refererUrl.host}`
    return allowedOrigins.includes(refererOrigin)
  } catch {
    return false
  }
}

export const verifyTurnstileToken = async (
  token: string | null,
  ipAddress: string | null,
) => {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    return {
      ok: false,
      reason: "Server misconfiguration",
    }
  }

  if (!token) {
    return {
      ok: false,
      reason: "Missing challenge token",
    }
  }

  const body = new URLSearchParams({
    secret: secretKey,
    response: token,
  })

  if (ipAddress) {
    body.set("remoteip", ipAddress)
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      cache: "no-store",
    },
  )

  if (!response.ok) {
    return {
      ok: false,
      reason: "Challenge verification failed",
    }
  }

  const result = (await response.json()) as { success?: boolean }
  if (!result.success) {
    return {
      ok: false,
      reason: "Challenge verification failed",
    }
  }

  return {
    ok: true,
  }
}

export const checkRateLimit = (key: string) => {
  const normalizedKey = normalizeHost(key)
  const now = Date.now()
  const current = rateLimiter.get(normalizedKey)

  if (!current || now - current.windowStart > RATE_WINDOW_MS) {
    rateLimiter.set(normalizedKey, {
      count: 1,
      windowStart: now,
    })
    return {
      allowed: true,
    }
  }

  if (current.count >= RATE_LIMIT_PER_KEY) {
    return {
      allowed: false,
    }
  }

  rateLimiter.set(normalizedKey, {
    ...current,
    count: current.count + 1,
  })

  return {
    allowed: true,
  }
}
