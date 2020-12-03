import * as React from "react"

export function useManagedState<T>(value: T, onChange?: (value: T) => void) {
  //@ts-ignore
  const [currentValue, setValue] = React.useState<T>(value)
  //@ts-ignore
  React.useEffect(() => {
    setValue(value)
  }, [value])

  return [
    currentValue,
    (newValue) => {
      setValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    },
  ]
}
