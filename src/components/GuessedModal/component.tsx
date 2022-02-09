import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React, { memo, useState } from 'react';
import { Props } from './types'

export const GuessedModal = memo(({ guessCount, open, handleClose }: Props) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                You won!
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    number of guesses: {' '}{guessCount}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Start new game!
                </Button>
            </DialogActions>
        </Dialog>
    );
});
