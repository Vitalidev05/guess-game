import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Props } from './types'
import { styles } from './styles'

export const Title = memo(({ title} : Props) => {
    return (
        <Box sx={styles.root}>
            <Typography variant="h4">{title}</Typography>
        </Box>
    );
});
