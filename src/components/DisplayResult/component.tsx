import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectInput } from '../../redux/guess/selectors';
import { useDisplayResult } from './hook';
import { Dot } from '../Dot';

export const DisplayResult = memo(() => {
    const { userNumber, result, code, isGuessed } = useDisplayResult();
    console.log('code', code);

    return (
        <Box>
            <Typography variant="h5">Result:</Typography>
            <Box sx={{
                border: '1px solid black',
                borderRadius: 3,
                minHeight: 150,
                display: 'flex',
                minWidth: 200,
                maxWidth: 300,
                justifyContent: 'space-between',
                px: 3,
                alignItems: 'center',
                gap: 2,
            }}>
                {result?.map(({ value, isGuess, isRightPosition }) => (
                    <Box
                        key={value}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            pt: 2,
                        }}
                    >
                        {isGuess && !isRightPosition && <Dot color="dark" />}
                        {isRightPosition && <Dot color="light" />}
                        {!isGuess && !isRightPosition && <Dot color="transparent" />}
                        <Typography variant="h1">{value}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>

    );
});
