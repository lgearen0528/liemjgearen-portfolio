"use server"

import { headers } from "next/headers"
import React from "react"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
import {
  checkRateLimit,
  isAllowedOrigin,
  isAllowedReferer,
  verifyTurnstileToken,
} from "@/lib/contact-security"
import { getErrorMessage, validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const requestHeaders = await headers()
  const originHeader = requestHeaders.get("origin")
  const refererHeader = requestHeaders.get("referer")
  const forwardedFor = requestHeaders.get("x-forwarded-for")
  const realIp = requestHeaders.get("x-real-ip")
  const ipAddress = forwardedFor?.split(",")[0]?.trim() ?? realIp ?? "unknown"

  if (!isAllowedOrigin(originHeader) && !isAllowedReferer(refererHeader)) {
    return {
      error: "Request blocked",
    }
  }

  const rateLimitResult = checkRateLimit(ipAddress)
  if (!rateLimitResult.allowed) {
    return {
      error: "Too many requests. Please try again later.",
    }
  }

  const turnstileToken = formData.get("cf-turnstile-response")
  const tokenValue = typeof turnstileToken === "string" ? turnstileToken : null
  const turnstileResult = await verifyTurnstileToken(tokenValue, ipAddress)
  if (!turnstileResult.ok) {
    return {
      error: "Challenge verification failed",
    }
  }

  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    }
  }

  try {
    const data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: "liem.gearen1996@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    })

    return {
      data,
    }
  } catch (error: unknown) {
    console.error("sendEmail failed:", getErrorMessage(error))
    return {
      error: "Unable to send message right now. Please try again later.",
    }
  }
}
