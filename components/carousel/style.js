import styled from '../../assets/styles/base/styled-component';

export const CarouselContent = styled.div`
    width: 100%;
    padding: 12px;
    article {
        font-size: ${({ theme }) => theme.fontSizes[3]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        cursor: pointer;
    }
    h4 {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        margin: 4px 0;
        color: ${({ themeStore, theme }) => themeStore === 'light' ? '#000' : '#D1D5DB'};
        cursor: pointer;
    }
    span {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        cursor: pointer;
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights[2]};
        cursor: pointer;
    }
`;