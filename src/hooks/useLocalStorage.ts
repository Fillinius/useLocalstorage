import { useEffect, useState } from 'react'

type Token = [
  value: string | null,
  {
    setItem: (value: string) => void
    removeItem: () => void
  }
]

export default function useLocalstorage(defaultValueKey: string) {
  const [token, setToken] = useState<Token | any>(defaultValueKey)

  useEffect(() => {
    const item = localStorage.getItem(defaultValueKey)
    setToken(item ? JSON.parse(item) : null)
  }, [defaultValueKey, token])

  function setItem(initialState: string): void {
    return setToken(
      localStorage.setItem(defaultValueKey, JSON.stringify(initialState))
    )
  }

  function removeItem() {
    return setToken(localStorage.clear())
  }

  return [token, { setItem, removeItem }]
}
