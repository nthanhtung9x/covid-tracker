import '../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Header from '../components/header'
import { DefaultTheme } from '../assets/styles/base/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props =>
      props.theme.mode === 'dark' ? '#111827 !important' : '#F9FAFB'
    };
    color: ${props =>
      props.theme.mode === 'dark' ? '#FFF !important' : '#000'
    };
  }
`

function MyApp({ Component, pageProps }) {
  const [theme, useTheme] = useState({ mode: 'light'})
  return <ThemeProvider theme={{...theme, ...DefaultTheme}}>
      <>
        <GlobalStyle/>
          <Component {...pageProps} theme={theme} />
          <Header theme={theme.mode} setToggleTheme={useTheme}/>
      </>
    </ThemeProvider>
}

export default MyApp
