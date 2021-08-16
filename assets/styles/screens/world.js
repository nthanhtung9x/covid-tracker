import styled from '../base/styled-component';
import { mediaQuery } from '../mixins/mediaQuery';

export const StatistWrapper = styled.div`
    width: 95%; 
    margin: 0 auto 20px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    ${mediaQuery.md`
        width: 80%;
    `}
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
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[4]};
        `}
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        padding-top: 8px;
        color: ${({ themeStore, theme }) => themeStore === 'light' ? '#6B7280' : '#9CA3AF'};
    }
`;

export const Item = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 12px;
    span {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.blockDark : '#D1D5DB'};
       
    }
    h4 {
        font-size: ${({ theme }) => theme.fontSizes[4]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        &.yellow {
            color: ${({ theme }) => theme.colors.Yellow};
        }
        &.red {
            color: ${({ theme }) => theme.colors.Red};
        }
        &.green {
            color: ${({ theme }) => theme.colors.Green};
        }
        text-align: center;
        padding: 2px 0;
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        text-align: center;
        color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.blockDark : '#D1D5DB'};
        background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Grey : theme.colors.blockDark};
        border-radius: 8px;
        padding: 12px;
    }
`;