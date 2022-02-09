import React, { memo } from 'react';
import { Box, Button } from '@mui/material';
import { DisplayResult } from '../../components/DisplayResult';
import { NumericInput } from '../../components/controls/NumericInput';
import { useModal } from './hook';
import { GuessedModal } from '../../components/GuessedModal';
import { Title } from '../../components/controls/Title';
import { Legend } from '../../components/controls/Legend';

export const GuessGame = memo(() => {
    const modal = useModal()

    return (
        <Box sx={{ p: 3 }}>
            <Title title="Guess Game" />
            <Legend
                legend1=" - right number, wrong position"
                legend2=" - right number, right position"
            />
            {/* todo separate style */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 6,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1 }}>
                    {/* todo rename*/}
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
