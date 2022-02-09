import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import React, { memo, useState } from 'react';
import { Props } from './types'

export const Modal = memo(({ open, handleClose, title, body, actionText }: Props) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    {actionText}
                </Button>
            </DialogActions>
        </Dialog>
    );
});
