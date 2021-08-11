import React from 'react'
import * as Styles from './style';

const Container = ({ themeStore, children }) => {
    return (
        <Styles.Wrapper themeStore={themeStore}>
            {children}
        </Styles.Wrapper>
    )
}

export default Container;
