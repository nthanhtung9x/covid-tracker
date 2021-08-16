import '../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import Header from '../components/header'
import { DefaultTheme } from '../assets/styles/base/default'
import { useRouter } from 'next/router';
import Skeleton from '../components/skeleton';
import FooterNavigation from '../components/footer-nav';

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
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  return <ThemeProvider theme={{...theme, ...DefaultTheme}}>
      <>
        <GlobalStyle/>
        {
          pageLoading ? <Skeleton theme={theme}></Skeleton> : <>
            <Component {...pageProps} theme={theme} />
          </>
        }
        <Header theme={theme.mode} setToggleTheme={useTheme}/>
        <FooterNavigation theme={theme.mode}/>
      </>
    </ThemeProvider>
}

export default MyApp
