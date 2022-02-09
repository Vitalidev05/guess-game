import React from 'react';
import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectGuessCount } from './redux/guess';
import { Box, Button } from '@mui/material';
import { actionsGuessGame } from './redux/guess/actions';
import { NumericInput } from './components/NumericInput';

export const App = () => {
  const select = useSelector(selectGuessCount)
  const dispatch = useDispatch()

  console.log('select', select)

  return (
    <Box sx={{ p: 3 }}>
        <NumericInput />
        <Button onClick={() => dispatch(actionsGuessGame.incrementGuessCount())}>click</Button>

    </Box>
  );
}
