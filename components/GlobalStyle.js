import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --text-primary: #0c2c4d;
        --text-secondary: #2585e6;
        --text-light: #0c2c4d99;
        --white: #ffffff;
        --background-light: #edf0f5;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Helvetica', sans-serif;
        margin: 0;
        background-color: var(--background-primary);
        color: var(--text-primary);
    }
    
    h1 {
        margin-top: 0;
    }
`;

export default GlobalStyle;
