"use client"

import { BsMoon, BsSun } from "react-icons/bs"
import { useTheme } from "@/context/theme-context"

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  )
}
