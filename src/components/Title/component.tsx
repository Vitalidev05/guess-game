import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Props } from './types'

export const Title = memo(({title}: Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
            <Typography variant="h4">{title}</Typography>
        </Box>
    );
});
