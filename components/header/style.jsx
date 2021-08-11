import styled from '../../assets/styles/base/styled-component';


export const HeaderWrapper = styled.div`
    width: 100%;
    display:flex; 
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 8px #c1aeae;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
`;

export const Logo = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[3]};
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    width: 150px;
`;

export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        padding: 20px 12px;
        display:inline-block;
        text-decoration: none;
        opacity: 0.4;
        transition: all 0.3s;
        &.active {
            font-size: ${({ theme }) => theme.fontSizes[2]};
            font-weight: ${({ theme }) => theme.fontWeights[2]};
            opacity: 1;
        }
        &:hover {
            opacity: 1;
            transition: all 0.3s;
        }
    }
`;

export const ToggleTheme = styled.div`
    width: 150px;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    img {
        width: 30px;
        height: 30px;
    }
`;