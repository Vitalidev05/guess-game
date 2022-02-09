import React, { useState, useCallback } from 'react'
import { isNumeric, isStringUnique } from '../../const/helpers'

export const useNumericInput = () => {
  const [value, setValue] = useState<string>('')
  const guess = () => console.log('guess')
  const validate = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const num = event.target.value
    if (num === '') setValue(num)
    if (num.length > 4) return
    if (!isNumeric(num)) return
    if (!isStringUnique(num)) return
    setValue(num)
  }, [setValue])

  return {
    guess,
    value,
    validate,
  }
}
