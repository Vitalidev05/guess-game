import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { isNumeric, isStringUnique } from '../../const/helpers'
import { actionsGuessGame } from '../../redux/guess/actions'

export const useNumericInput = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch()

  const guess = useCallback(() => {
    dispatch(actionsGuessGame.guess(value))
    dispatch(actionsGuessGame.incrementGuessCount())
  }, [dispatch, value]);

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
