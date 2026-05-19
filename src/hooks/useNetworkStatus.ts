"use client"

import { useEffect, useState, useCallback } from "react"

interface NetworkStatus {
  isOnline: boolean
  effectiveType: string | null
  downlink: number | null
  rtt: number | null
  isSlowConnection: boolean
}

export function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    isOnline: typeof navigator !== "undefined" ? navigator.onLine : true,
    effectiveType: null,
    downlink: null,
    rtt: null,
    isSlowConnection: false,
  })

  const updateNetworkInfo = useCallback(() => {
    const connection = (navigator as any).connection
    if (connection) {
      setStatus({
        isOnline: navigator.onLine,
        effectiveType: connection.effectiveType || null,
        downlink: connection.downlink || null,
        rtt: connection.rtt || null,
        isSlowConnection:
          connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g" ||
          connection.effectiveType === "3g" ||
          (connection.downlink !== undefined && connection.downlink < 1.5),
      })
    } else {
      setStatus((prev) => ({
        ...prev,
        isOnline: navigator.onLine,
        isSlowConnection: false,
      }))
    }
  }, [])

  useEffect(() => {
    updateNetworkInfo()

    const handleOnline = () => updateNetworkInfo()
    const handleOffline = () => updateNetworkInfo()

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    const connection = (navigator as any).connection
    if (connection) {
      connection.addEventListener("change", updateNetworkInfo)
    }

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      if (connection) {
        connection.removeEventListener("change", updateNetworkInfo)
      }
    }
  }, [updateNetworkInfo])

  return status
}
