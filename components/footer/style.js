import styled from '../../assets/styles/base/styled-component';
import { mediaQuery } from '../../assets/styles/mixins/mediaQuery';

export const FooterLink = styled.div`
    text-align: center;
    width: 100%;
    min-height: 100px;
    margin-top: 40px;
    margin-bottom: 50px;
    ${mediaQuery.md`
        margin-bottom: 0;
    `}
    a {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        transition: color 0.3s;
        :hover {
            color: #3B82F6;
            transition: color 0.3s;
        }
        b {
            font-weight: ${({ theme }) => theme.fontWeights[2]};
        }
    }
    p {
        font-size: ${({ theme }) => theme.fontSizes[0]};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
    }
`;