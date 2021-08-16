import styled, { keyframes } from '../../assets/styles/base/styled-component';

const animationSkeleton = keyframes`
  0% { transform: translateX(-150%) skewX(-10deg)};
  100% { transform: translateX(250%) skewX(-10deg)};
`;

const animationSkeletonWebkit = `@-webkit-keyframes'
  0% { transform: translateX(-150%) skewX(-10deg)};
  100% { transform: translateX(250%) skewX(-10deg)};
'`;

export const StatistWrapper = styled.div`
    width: 80%; 
    margin: 0 auto 20px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({ themeStore, theme }) => themeStore === 'light' ? theme.colors.bgLightHeader : theme.colors.bgDarkHeader};
    overflow: hidden;
    position: relative;
`; 

export const TitleWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80px;
    border-radius: 8px;
    padding: 12px 0;
    overflow: hidden;
    position: relative;
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

export const Item = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 24px;
    overflow: hidden;
    position: relative;
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
        height: 40px;
    }
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translateX(-150%) skewX(-10deg);
  background-color: ${({ themeStore, theme }) => themeStore === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'};

  animation: ${animationSkeleton || animationSkeletonWebkit} 2s infinite;
`;