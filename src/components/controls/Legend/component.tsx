import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Props } from './types'
import { Dot } from '../Dot'
import { styles } from './style'

export const Legend = memo(({ legend1, legend2 }: Props) => {
    return (
        <Box sx={styles.root}>
            <Typography variant="h6">
                <Dot variant="dark" />
                {legend1}
            </Typography>
            <Typography variant="h6">
                <Dot variant="light" />
                {legend2}
            </Typography>
        </Box>
    );
});
