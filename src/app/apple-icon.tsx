import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "linear-gradient(135deg, #1E3A5F, #0D1117)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "linear-gradient(135deg, #3B82F6, #7C3AED)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 800,
            color: "white",
          }}
        >
          AI
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#60A5FA",
            marginTop: 8,
            letterSpacing: "0.05em",
          }}
        >
          ERA
        </div>
      </div>
    ),
    { ...size }
  )
}
