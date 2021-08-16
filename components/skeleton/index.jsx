import React from 'react'
import Container from '../../layout/container'
import * as Styles from './style';

const Skeleton = ({ theme }) => {
    return (
        <Container>
            <Styles.StatistWrapper themeStore={theme.mode}>
                <Styles.TitleWrapper themeStore={theme.mode}>
                    <h1></h1>
                    <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.TitleWrapper>
                <Styles.Item themeStore={theme.mode}>
                   <p></p>
                   <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.Item>
                <Styles.Item themeStore={theme.mode}>
                    <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.Item>
                <Styles.Item themeStore={theme.mode}>
                     <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.Item>
            </Styles.StatistWrapper>

            <Styles.StatistWrapper themeStore={theme.mode}>
                <Styles.TitleWrapper themeStore={theme.mode}>
                    <h1></h1>
                    <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                    </Styles.TitleWrapper>
                <Styles.Item themeStore={theme.mode}>
                   <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.Item>
                <Styles.Item themeStore={theme.mode}>
                    <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.Item>
                <Styles.Item themeStore={theme.mode}>
                     <p></p>
                    <Styles.Progress themeStore={theme.mode}></Styles.Progress>
                </Styles.Item>
            </Styles.StatistWrapper>
        </Container>
    )
}

export default Skeleton
