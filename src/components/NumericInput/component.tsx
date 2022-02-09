import { Box, Button, TextField } from '@mui/material';
import React, { memo } from 'react';
import { useNumericInput } from './hook';

export const NumericInput = memo(() => {
    const { guess, value, validate } = useNumericInput()

    return (
        <Box>
            <TextField
                onChange={validate}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={value}
            />
            <Button onClick={guess}>
                Guess
            </Button>
        </Box>
    );
});
