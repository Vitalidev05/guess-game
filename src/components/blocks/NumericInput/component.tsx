import React, { memo } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNumericInput } from './hook';
import { styles } from "./style";

export const NumericInput = memo(() => {
    const { guess, value, validate, isDisabled } = useNumericInput()

    return (
        <Box sx={styles.inputContainer}>
            <Typography variant="h5">Guess number:</Typography>
            <TextField
                onChange={validate}
                id="outlined-basic"
                label="Input a number"
                variant="outlined"
                value={value}
            />
            <Button disabled={isDisabled} onClick={guess} variant="contained">
                Guess
            </Button>
        </Box>
    );
});
