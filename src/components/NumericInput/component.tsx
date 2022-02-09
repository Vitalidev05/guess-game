import { Box, Button, TextField } from '@mui/material';
import React, { memo } from 'react';
import { useNumericInput } from './hook';
import { styles } from "./style";

export const NumericInput = memo(() => {
    const { guess, value, validate } = useNumericInput()

    console.log('value', value)

    return (
        <Box sx={styles.inputContainer}>
            <TextField
                onChange={validate}
                id="outlined-basic"
                label="Input a number"
                variant="outlined"
                value={value}
            />
            <Button onClick={guess} variant="contained">
                Guess
            </Button>
        </Box>
    );
});
