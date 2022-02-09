import { Box } from '@mui/material';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectInput } from '../../redux/guess/selectors';
import { useDisplayResult } from './hook';

export const DisplayResult = memo(() => {
    const { userNumber } = useDisplayResult()

    return (
        <Box>
            userNumber: {userNumber}
        </Box>
    );
});
