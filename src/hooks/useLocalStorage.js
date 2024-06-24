import { useState } from 'react'

export default function useLocalstorage(defaultValue) {
  const [value, setValue] = useState(defaultValue)
  function setItem() {
    console.log('setItem')
  }

  function removeItem() {
    console.log('remove')
  }

  return [value, { setItem, removeItem }]
}
