import { useEffect, useState } from 'react'

export default function useLocalstorage(defaultValueKey: string) {
  const [token, setToken] = useState<string | null | any>(defaultValueKey)

  useEffect(() => {
    const item = localStorage.getItem(defaultValueKey)
    setToken(item ? JSON.parse(item) : null)
  }, [defaultValueKey, token])

  function setItem(initialState: string): void {
    return setToken(
      localStorage.setItem(defaultValueKey, JSON.stringify(initialState))
    )
  }

  function removeItem(): void {
    const removeItem: any = localStorage.clear()
    return setToken(removeItem ? removeItem : null)
  }

  return [token, { setItem, removeItem }]
}
