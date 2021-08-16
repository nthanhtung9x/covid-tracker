import React from 'react'
import * as Styles from './style';
import WorldIcon from '../../public/images/world.svg';
import HomeIcon from '../../public/images/home.svg';
import NewsIcon from '../../public/images/news.svg';

import WorldLightIcon from '../../public/images/world-light.svg';
import HomeLightIcon from '../../public/images/home-light.svg';
import NewsLightIcon from '../../public/images/news-light.svg';
import Image from 'next/image';
import { NavLink } from '../navlink';

const FooterNavigation = ({ theme }) => {
    return (
        <Styles.FooterNav themeStore={theme}>
            <NavLink  href="/world">
                <Styles.FooterItem>
                    <Image src={theme === 'dark' ? WorldLightIcon : WorldIcon} alt="world"/>
                    <span>Thế giới</span>
                </Styles.FooterItem>
            </NavLink>
            <NavLink  href="/" exact>
                <Styles.FooterItem>
                    <Image src={theme === 'dark' ? HomeLightIcon : HomeIcon} alt="home"/>
                    <span>Trang chủ</span>
                </Styles.FooterItem>
            </NavLink>
            <NavLink  href="/news" >
                <Styles.FooterItem>
                    <Image src={theme === 'dark' ? NewsLightIcon : NewsIcon} alt="news"/>
                    <span>Tin tức</span>
                </Styles.FooterItem>
            </NavLink>
        </Styles.FooterNav>
    )
}

export default FooterNavigation
