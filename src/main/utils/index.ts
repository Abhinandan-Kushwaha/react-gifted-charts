import { useEffect, useRef } from 'react'

export const screenWidth = 300

export function usePrevious(value: string) {
  const ref = useRef('')
  useEffect(() => {
    ref.current = value //assign the value of ref to the argument
  }, [value]) //this code will run when the value of 'value' changes
  return ref.current //in the end, return the current ref value.
}
