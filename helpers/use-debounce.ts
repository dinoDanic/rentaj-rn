import { useCallback, useRef } from "react"

export const useDebounce = (fn: () => void, delay: number = 300) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedFn = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      fn()
    }, delay)
  }, [fn, delay])

  return debouncedFn
}
