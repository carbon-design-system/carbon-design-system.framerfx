import * as React from "react"

type CachedValue<T> = T | null

export function useLocalStorage<T>(key: string, initialValue: any): [CachedValue<T>, (value: any) => void] {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)

      window.localStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
