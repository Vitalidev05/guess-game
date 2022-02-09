import { Box } from '@mui/material';
import React, { memo } from 'react';
import { DisplayResult } from '../DisplayResult';
import { NumericInput } from '../NumericInput';

export const GuessGame = memo(() => {

    return (
        <Box sx={{ p: 3 }}>
            <NumericInput />
            <DisplayResult />
            {/*<GuessedModal />*/}
        </Box>
    );
});
