import React, { memo } from 'react';
import { Box } from '@mui/material';
import { DisplayResult } from '../DisplayResult';
import { NumericInput } from '../NumericInput';
import { useModal } from './hook';
import { GuessedModal } from '../GuessedModal';

export const GuessGame = memo(() => {
    const modal = useModal()

    return (
        <Box sx={{ p: 3 }}>
            <NumericInput />
            <DisplayResult />
            <GuessedModal {...modal} />
        </Box>
    );
});
