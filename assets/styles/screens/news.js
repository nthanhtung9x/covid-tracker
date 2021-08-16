import styled from '../base/styled-component';
import { mediaQuery } from '../mixins/mediaQuery';

export const Flex = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 95%;
    margin: auto;
    ${mediaQuery.md`
        width: 100%;
    `}
`;

export const NewsWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    order: 2;
    ${mediaQuery.md`
        width: 68%;
        order: 1;
    `}
`;

export const NavWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    order: 1;
    margin-bottom: 20px;
    ${mediaQuery.md`
        width: 30%;
        order: 2;
        margin-bottom: 0;
    `}
`;

export const Carousel = styled.div`
    padding: 10px;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    .embla__slide__inner {
        height: 250px;
        ${mediaQuery.md`
            height: 400px;
        `}
    }
`;

export const StatistWrapper = styled.div`
    width: 100%; 
    margin: 0 auto 20px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-top: 20px;
`; 

export const TitleWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    padding: 12px 0;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Grey : theme.colors.blockDark};

    h1 {
        font-size: ${({ theme }) => theme.fontSizes[4]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        padding-top: 8px;
        color: ${({ themeStore, theme }) => themeStore === 'light' ? '#6B7280' : '#9CA3AF'};
    }
`;

export const ListNews = styled.ul`
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    background-color: transparent;
    margin: 12px 0;
    li {
        width: 100%;
        display: flex;
        margin-bottom: 8px;
        padding-top: 12px;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
            background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Grey : theme.colors.blockDark};
        }
        a {
            display:flex;
            width: 100%;
            height: 100%;
        }
    }
`;

export const ThumnailNew = styled.div`
    width: 30%;
    height: 100%;
    text-align:center;
    ${mediaQuery.md`
        width: 20%;
        height: 200px;
    `}
    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        ${mediaQuery.md`
            width: 128px;
            height: 128px;
        `}
    }
`;

export const ContentNew = styled.div`
    width: 70%;
    padding-left: 12px;
    article {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        cursor: pointer;
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[3]};
        `}
    }
    h4 {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        margin: 4px 0;
        color: ${({ themeStore, theme }) => themeStore === 'light' ? '#000' : '#D1D5DB'};
        cursor: pointer;
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[1]};
        `}
    }
    span {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        cursor: pointer;
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        cursor: pointer;
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[1]};
        `}
    }
`;


export const ButtonHide = styled.div`
    border-radius: 8px;
    width: 100%;
    display:flex; 
    align-items: center;
    justify-content: center;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Grey : '#4B5563'};
    padding: 12px;
    cursor: pointer;
    margin-top: 8px;
    
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        cursor: pointer;
    }
    &:hover {
        background-color: ${({ themeStore, theme }) => themeStore === 'light' ? '#E5E7EB' : '#4B5563'};
    }
`;

export const Weather = styled.div`
    width: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 10px;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    text-align: center;
    border-radius: 8px;
    h4 {
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        padding: 12px 0;
        border-bottom: 1px solid grey;
    }
    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
    }
    span {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        display:block;
        padding: 4px 0;
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[5]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        text-align: center;
        color: ${({ themeStore, theme }) => themeStore === 'light' ? '#6B7280' : '#E5E7EB'};
    }
`;

export const NavMenu = styled.ul`
    overflow-x:scroll;
    display: flex;
    align-items: center;
    width: 100%;
    li {
        border-radius: 12px;
        background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        text-align: center;
        overflow: hidden;
        padding: 8px 16px;
        min-width: 50%;
        display: block;
        box-shadow: 0 0 2px rgba(0,0,0,0.1);
        margin-right: 8px;
        cursor: pointer;
        ${mediaQuery.md`
            min-width: 20%;
        `}
    }
`;