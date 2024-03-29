import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}; */
  }

  body {
    display: flex;
    justify-content: center;
    height: 100vh;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
`
