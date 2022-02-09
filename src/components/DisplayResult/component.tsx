import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectInput } from '../../redux/guess/selectors';
import { useDisplayResult } from './hook';
import { Dot } from '../controls/Dot';
import { styles } from './styles'

export const DisplayResult = memo(() => {
    const { userNumber, result, code, isGuessed } = useDisplayResult();

    return (
        <Box>
            <Box sx={styles.root}>
                <Typography variant="h5">Result:</Typography>
            </Box>

            <Box sx={styles.box}>
                {result?.map(({ value, isGuess, isRightPosition }) => (
                    <Box
                        key={value}
                        sx={styles.container}
                    >
                        {isGuess && !isRightPosition && <Dot variant="dark" />}
                        {isRightPosition && <Dot variant="light" />}
                        {!isGuess && !isRightPosition && <Dot variant="transparent" />}
                        <Typography variant="h1">{value}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
});
