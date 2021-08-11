import { ThemedCssFunction } from 'styled-components';
import { css } from '../base/styled-component';

const breakPoints = {
  elg: '1500px',
  lg: '1200px',
  md: '992px',
  sm: '768px',
  xs: '480px',
  xxs: '320px',
};

export const mediaQuery = (Object.keys(breakPoints)).reduce(
  (acc, label) => {
    acc[label] = (first, ...interpolations) => css`
      @media (min-width: ${breakPoints[label]}) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {},
);