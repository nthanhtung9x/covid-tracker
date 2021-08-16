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

export const SubText = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights[1]};
    color: ${({ theme }) => theme.colors.Red};
    margin: 20px 0;
`;

export const TotalWrapper = styled.div`
    width: 100%;
    display:flex;
    align-items: center; 
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    width: 48%;
    display:flex;
    align-items:center;
    flex-direction: column;
    margin-bottom: 20px;
    span {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        min-width: 20px;
        min-height: 20px;
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[4]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[5]};
        `}
    }
    section {
        border: 8px;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 4px 0;
        height: 28px;
        position: relative;
    }
    &.yellow {
        color: ${({ theme }) => theme.colors.Yellow};
        section {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 1;
                background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Yellow : '#FEF3C7'};
                border-radius: 8px;
            }
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                font-size: ${({ theme }) => theme.fontSizes[0]};
                font-weight: ${({ theme }) => theme.fontWeights[1]};
                letter-spacing: -0.44px;
                color: ${({ theme }) => theme.colors.Yellow};
                ${mediaQuery.md`
                    font-size: ${({ theme }) => theme.fontSizes[1]};
                `}
            }
        }
    }
    &.green {
        color: ${({ theme }) => theme.colors.Green};
        section {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.4;
                opacity: 1;
                background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Green : '#D1FAE5'};
                border-radius: 8px;
            }
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                font-size: ${({ theme }) => theme.fontSizes[0]};
                font-weight: ${({ theme }) => theme.fontWeights[1]};
                letter-spacing: -0.44px;
                color: ${({ theme }) => theme.colors.Green};
                ${mediaQuery.md`
                    font-size: ${({ theme }) => theme.fontSizes[1]};
                `}
            }
        }
    }
    &.red {
        color: ${({ theme }) => theme.colors.Red};
        section {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.4;
                opacity: 1;
                background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Red : '#FEE2E2'};
                border-radius: 8px;
            }
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                font-size: ${({ theme }) => theme.fontSizes[0]};
                font-weight: ${({ theme }) => theme.fontWeights[1]};
                letter-spacing: -0.44px;
                color: ${({ theme }) => theme.colors.Red};
                ${mediaQuery.md`
                    font-size: ${({ theme }) => theme.fontSizes[1]};
                `}
            }
        }
    }
    &.grey {
        color: ${({ theme }) => theme.colors.Grey};
        p {
            color: ${({ themeStore, theme }) => themeStore === 'light' ? '#000' : '#FFF'};
        }
        section {
            background-color: ${({ theme }) => theme.colors.Grey};
            border-radius: 8px;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.8;
                background-color:  ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Grey : '#6B7280'};
                border-radius: 8px;
            }
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                font-size: ${({ theme }) => theme.fontSizes[0]};
                font-weight: ${({ theme }) => theme.fontWeights[1]};
                letter-spacing: -0.44px;
                color: ${({ themeStore, theme }) => themeStore === 'light' ? '#6B7280' : '#fff'};
                ${mediaQuery.md`
                    font-size: ${({ theme }) => theme.fontSizes[1]};
                `}
            }
        }
    }

`;

export const SideBar = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    margin: 12px auto;
    ${mediaQuery.md`
        width: 60%;
    `}
`;

export const SideBarChart = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px auto 0;
`;

export const SideBarItem = styled.div`
    border-radius: 32px;
    width: 33.3333%;
    padding: 12px;
    margin: 0 12px;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    border: 1px solid #c1aeae;
    border-width: ${({ themeStore, theme }) => themeStore === 'light' ? '1px' : '0'};
    text-align: center;
    cursor: pointer;
    transition: 0.3s all;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? '#fff' : theme.colors.blockDark};
    &:hover {
        transform: scale(1.05);
        transition: 0.3s all;
    }
    &.active {
        border: 2px solid ${({ theme }) => theme.colors.Red};
        color: ${({ theme }) => theme.colors.Red};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        background-color: ${({ themeStore, theme }) => themeStore === 'light' ? '#fff' : 'transparent'};
        filter: brightness(1.1);
    }
`;

export const ChartWrapper = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${mediaQuery.md`
        width: 90%;
    `}
`;

export const ChartItem = styled.div`
    border-radius: 8px;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    padding: 20px;
    width:100%;
    margin-bottom: 20px;
    ${mediaQuery.md`
        width: 48%;
    `}
    h1 {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const AllCountryTitle = styled.div`
    border-radius: 8px;
    width: 100%;
    display:flex; 
    align-items: center;
    justify-content: space-between;
    background-color: #FECACA;
    padding: 12px;
    cursor: pointer;
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        color: ${({ theme }) => theme.colors.Red};
        cursor: pointer;

    }
    img {
        width: 12px;
        height: 12px;
        transition: all 0.3s;
        &.down {
            transform: rotate(0deg);
            transition: all 0.3s;
        }
        &.up {
            transform: rotate(180deg);
            transition: all 0.3s;
        }
    }
`;

export const ColumnWrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 12px;
`;

export const ColumnTitle = styled.div`
    width: 15%;
    text-align: center;
    &.name {
        width: 55%;
        text-align: left;
    }
    &.bold {
        font-weight: ${({ theme }) => theme.fontWeights[2]};
    }
`;


export const ColumnItem = styled.div`
    width: 100%;
    display:flex;
    margin: 3px 0;
    &:hover {
        background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.Grey : '#4B5563'};
    }
`;

export const ColumnItemChild = styled.div`
    width: 15%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    &.name {
        width: 55%;
        text-align: left;
    }
    &.bold {
        font-weight: ${({ theme }) => theme.fontWeights[2]};
    }
    &.today {
        color: ${({ theme }) => theme.colors.Red};
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

export const FlexVaccine = styled.div`
    width: 100%;
    display:Flex;
    align-items: center;
    
`;

export const FlexVaccineItem = styled.div`
    width: 33.3333%;
    border-right: 0.5px solid ${({ theme }) => theme.colors.Grey};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.Grey};
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    &::last-child {
        border-right: none;
    }
    ${({ themeStore }) => {
        if(themeStore === 'dark') {
            return {
                borderRight: 'none',
            }
        }
    }}
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        letter-spacing: -0.94px;
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[2]};
        `}
    }
    b {
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        letter-spacing: -0.44px;
        ${mediaQuery.md`
            font-size: ${({ theme }) => theme.fontSizes[4]};
        `}
    }
    &.vaccine-active {
        color: ${({ theme }) => theme.colors.Green};
    }
`;

export const FlexTipVaccine = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    section {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        color: ${({ theme }) => theme.colors.Green};
        background-color: #D1FAE5;
        border-radius: 10px;
        padding: 4px 8px;
    }
    span {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[1]};
        color: ${({ theme }) => theme.colors.Green};
    }
`;

export const ProgressVaccine = styled.div`
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #D1FAE5;
    border-radius: 12px;
    margin: 12px 0;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ progressVaccine }) => `${progressVaccine}%`};
        background-color: ${({ theme }) => theme.colors.Green};
        height: 100%;
        border-radius: 12px;
    }
`;

export const ProgressSubText = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
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