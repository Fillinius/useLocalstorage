import { useEffect, useState } from 'react'

export default function useLocalstorage(defaultValueKey: string) {
  const [token, setToken] = useState<string>(defaultValueKey)

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem(defaultValueKey)))
  }, [token])

  function setItem(initialState: string) {
    return setToken(
      localStorage.setItem(defaultValueKey, JSON.stringify(initialState))
    )
  }

  function removeItem() {
    return setToken(localStorage.clear() || '')
  }

  return [token, { setItem, removeItem }]
}
