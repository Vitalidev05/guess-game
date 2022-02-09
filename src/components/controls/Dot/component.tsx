import React, { memo } from 'react'
import { styles } from "./styles";
import { Props } from './types'

export const Dot = memo(({ variant }: Props) => {
    if (variant === "dark") {
        return <span style={styles.dark} data-testid={'dark-dot'} />;
    }
    if (variant === 'light') {
        return <span style={styles.light} data-testid={'light-dot'} />;
    }
    return  <span style={styles.transparent} data-testid={'transparent-dot'} />;
});
