import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import { Props } from './types'

export const Legend = memo(({ legend1, legend2 }: Props) => {
    return (
        <Box>
            <Typography variant="h6">{legend1}</Typography>
            <Typography variant="h6">{legend2}</Typography>
        </Box>
    );
});
