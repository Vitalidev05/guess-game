import React, { memo } from 'react'
import { styles } from "./styles";
import { Props } from './types'

export const Dot = memo(({ color }: Props) => {
    if (color === "dark") {
        return <span style={styles.dark}/>;
    }
    if (color === 'light') {
        return <span style={styles.light}/>;
    }
    return  <span style={styles.transparent}/>;
});
