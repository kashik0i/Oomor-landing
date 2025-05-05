import * as React from "react"

export function useScrollTop() {
  const scrollToTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return scrollToTop
}