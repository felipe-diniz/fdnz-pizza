import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
html {
  background-color: #292929;
}
 body {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
 }
`;

export default GlobalStyled;
