import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color} ;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    transition: 400ms;
  & > div {
    @media (max-width: 600px) {
    padding-top: 70px;
  }
  }
  }
`
export default GlobalStyle
