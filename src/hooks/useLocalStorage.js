import { useEffect, useState } from 'react'

export default function useLocalstorage(defaultValueKey) {
  const [token, setToken] = useState(defaultValueKey)

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem(defaultValueKey)))
  }, [token])

  function setItem(initialState) {
    return setToken(
      localStorage.setItem(defaultValueKey, JSON.stringify(initialState))
    )
  }

  function removeItem() {
    return setToken(localStorage.clear())
  }

  return [token, { setItem, removeItem }]
}
