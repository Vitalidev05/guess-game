import { Box } from '@mui/material';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../../redux/guess/selectors';
import { useDisplayResult } from './hook';

export const DisplayResult = memo(() => {
    const { userNumber, result, code, isGuessed } = useDisplayResult();
    console.log('result', result);
    console.log('code', code);
    console.log('isGuessed', isGuessed);

    return (
        <Box>
        </Box>
    );
});
