import styled from '../../assets/styles/base/styled-component';
import { mediaQuery } from '../../assets/styles/mixins/mediaQuery';


export const FooterNav = styled.div`
    position: fixed;
    bottom: -2px;
    left: 0;
    width: 100%;
    display:flex;
    align-items: center;
    padding: 20px 0;
    box-shadow: 2px 0 4px rgba(0,0,0,0.1);
    z-index: 99;
    ${mediaQuery.md`
        display: none;
    `};
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    a {
        width: 33.3333%;
    }
`;

export const FooterItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width:12px;
        height: 12px;
    }
    span {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        padding-top: 4px;
    }
`;