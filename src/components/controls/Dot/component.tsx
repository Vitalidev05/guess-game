import React, { memo } from 'react'
import { styles } from "./styles";
import { Props } from './types'

export const Dot = memo(({ color }: Props) => {
    if (color === "dark") {
        return <span style={styles.dark}></span>;
    }
    if (color === 'light') {
        return <span style={styles.light}></span>;
    }
    return  <span style={styles.transparent}></span>;
});
