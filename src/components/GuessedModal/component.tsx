import { Dialog, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React, { memo } from 'react';
import { Props } from './types'

export const GuessedModal = memo(({ guessCount }: Props) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen={fullScreen}
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
        </Dialog>
    );
});
