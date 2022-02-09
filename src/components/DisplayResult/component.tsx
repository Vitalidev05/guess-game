import { Box } from '@mui/material';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../../redux/guess/selectors';
import { useDisplayResult } from './hook';

export const DisplayResult = memo(() => {
    const { userNumber, result } = useDisplayResult()
    console.log('result', result)

    return (
        <Box>
            userNumber: {userNumber}
        </Box>
    );
});
