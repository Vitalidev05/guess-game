import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Props } from './types'
import { Dot } from '../Dot'

export const Legend = memo(({ legend1, legend2 }: Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">
                <Dot color="dark" />
                {legend1}
            </Typography>
            <Typography variant="h6">
                <Dot color="light" />
                {legend2}
            </Typography>
        </Box>
    );
});
