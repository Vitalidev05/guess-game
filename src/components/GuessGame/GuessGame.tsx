import { Box } from '@mui/material';
import React from 'react';
import { DisplayResult } from '../DisplayResult';
import { NumericInput } from '../NumericInput';

export const GuessGame = () => {

    return (
        <Box sx={{ p: 3 }}>
            <NumericInput />
            <DisplayResult />
            {/*<GuessedModal />*/}
        </Box>
    );
}
