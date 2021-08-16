import * as Styles from './style';
import Link from 'next/link';
import Image from 'next/image';
import SunIcon from '../../public/images/sun.svg';
import MoonIcon from '../../public/images/moon.svg';
import { useRouter } from "next/router";
import { NavLink } from '../navlink';
import { useState } from 'react';
const Header = ({ theme, setToggleTheme }) => {
    const router = useRouter();
    const [toggle, setToggle] = useState(false);
    return (
        <Styles.HeaderWrapper themeStore={theme}>
            <Styles.Logo>Covid-19 Tracker</Styles.Logo>
            <Styles.NavMenu>
                <NavLink  href="/world">Thế giới</NavLink>
                <NavLink  href="/" exact>Trang chủ</NavLink>
                <NavLink  href="/news" >Tin tức</NavLink>
            </Styles.NavMenu>
            <Styles.ToggleTheme>
                {
                    toggle ? 
                        <Image alt="moon" src={MoonIcon} onClick={() => {
                            setToggle(!toggle);
                            if (theme === 'light') {
                                setToggleTheme({mode: 'dark'});
                                return;
                            }
                            setToggleTheme({mode: 'light'});
                        }}/>
                    :
                        <Image alt="sun" src={SunIcon} onClick={() => {
                            setToggle(!toggle);
                            if (theme === 'light') {
                                setToggleTheme({mode: 'dark'});
                                return;
                            }
                            setToggleTheme({mode: 'light'});
                        }}/>
                }
            </Styles.ToggleTheme>
        </Styles.HeaderWrapper>
    )
}

export default Header;
