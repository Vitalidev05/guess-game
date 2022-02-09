import React from 'react';
import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectGuessCount } from './redux/guess';
import { Box, Button } from '@mui/material';
import { actionsGuessGame } from './redux/guess/actions';
import { NumericInput } from './components/NumericInput';
import { DisplayResult } from './components/DisplayResult';

export const App = () => {
  const dispatch = useDispatch()

  return (
    <Box sx={{ p: 3 }}>
        <NumericInput />
        <DisplayResult />
    </Box>
  );
}
