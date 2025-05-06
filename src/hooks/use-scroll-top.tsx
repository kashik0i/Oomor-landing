import * as React from "react"

export function useScrollTop() {
  return React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
}