import React, { useState, useCallback } from 'react'
import { isNumeric, isStringUnique } from '../../const/helpers'

export const useNumericInput = () => {
  const [value, setValue] = useState<string>('')
  const guess = () => console.log('guess')
  const validate = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const num = event.target.value[event.target.value.length - 1]
    if (value.length >= 4) return
    if (!isNumeric(num)) return
    // if (!isStringUnique(value, +event.target.value)) return todo add function when its ready
    setValue(value => value + num)
  }, [value, setValue])

  return {
    guess,
    value,
    validate,
  }
}
