import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--light-200);
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

export default Base;
