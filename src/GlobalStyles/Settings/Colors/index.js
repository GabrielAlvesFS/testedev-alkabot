import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --light: #FFFFFF;
    --light-200: #F3F5F7;
    --dark: #000000;
    --gray-dark: #1A202C;
    --gray: #717171;
    --purple: #574AE8;
    --gradient-dark: #574AE8;
    --gradient-light: #3EA1DB;
  }
`;

export default Colors;
