import React, { memo } from 'react';
import { Box, Button } from '@mui/material';
import { DisplayResult } from '../../components/DisplayResult';
import { NumericInput } from '../../components/controls/NumericInput';
import { useModal } from './hook';
import { Modal } from '../../components/controls/Modal';
import { Title } from '../../components/controls/Title';
import { Legend } from '../../components/controls/Legend';

export const GuessGame = memo(() => {
    const { open, handleClose, body } = useModal()

    return (
        <Box sx={{ p: 3 }}>
            <Title title="Guess Game" />
            <Legend
                legend1=" - right number, wrong position"
                legend2=" - right number, right position"
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 6,
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Box>
                    <NumericInput />
                </Box>
                <Box>
                    <DisplayResult />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Button onClick={() => handleClose()} variant="outlined">
                    Start new game!
                </Button>
            </Box>

            <Modal
                body={body}
                title="You won!"
                actionText="start new game"
                handleClose={handleClose}
                open={open}
            />
        </Box>
    );
});
