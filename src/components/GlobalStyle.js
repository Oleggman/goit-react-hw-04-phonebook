import { createGlobalStyle } from "styled-components"
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background: linear-gradient(#141e30, #243b55);
    padding: 15px;
    box-shadow: inset -1px -1px 8px 8px rgba(0,0,0,.71);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  p, h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
  }
`