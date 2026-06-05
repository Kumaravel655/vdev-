"use client"

import { useEffect, useState, useRef } from "react"

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Only show on first visit per session
    if (sessionStorage.getItem("vd-loaded")) {
      setVisible(false)
      return
    }

    const maxTimeout = setTimeout(() => {
      triggerFadeOut()
    }, 5000)

    return () => clearTimeout(maxTimeout)
  }, [])

  const triggerFadeOut = () => {
    sessionStorage.setItem("vd-loaded", "1")
    setFadeOut(true)
    setTimeout(() => setVisible(false), 800)
  }

  if (!visible) return null

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      {/* Subtle background particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center gap-6">
        <video
          ref={videoRef}
          src="/loading.mp4"
          autoPlay
          muted
          playsInline
          onEnded={triggerFadeOut}
          className="max-h-[280px] max-w-[280px] rounded-2xl object-contain sm:max-h-[320px] sm:max-w-[320px]"
        />
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "0ms" }} />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "150ms" }} />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
