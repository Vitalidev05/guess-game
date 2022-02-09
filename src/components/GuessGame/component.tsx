import React, { memo } from 'react';
import { Box } from '@mui/material';
import { DisplayResult } from '../DisplayResult';
import { NumericInput } from '../NumericInput';
import { useModal } from './hook';
import { GuessedModal } from '../GuessedModal';
import { Title } from '../Title';
import { Legend } from '../Legend/component';

export const GuessGame = memo(() => {
    const modal = useModal()

    return (
        <Box sx={{ p: 3 }}>
            <Title title="Guess Game" />
            <Legend
                legend1="* - right number, wrong position"
                legend2="○ - right number, right position"
            />
            <NumericInput />
            <DisplayResult />
            <GuessedModal {...modal} />
        </Box>
    );
});
