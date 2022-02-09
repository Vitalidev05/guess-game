import React, { memo } from 'react';
import { Box, Button } from '@mui/material';
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
                legend1=" - right number, wrong position"
                legend2=" - right number, right position"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, flexWrap: 'wrap' }} >
                <Box sx={{ flex: 1 }}>
                    <NumericInput />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <DisplayResult />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Button onClick={() => modal.handleClose()} variant="outlined">
                    Start new game!
                </Button>
            </Box>


            <GuessedModal {...modal} />
        </Box>
    );
});
