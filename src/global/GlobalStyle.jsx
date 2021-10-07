import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    * {
    box-sizing: border-box;
    }

    html {
        font-family: 'Noto Sans JP', sans-serif;
    }

    body {
        margin: 0;
        background-color: #3f3f3f;

    }
    ::-webkit-scrollbar {
        width: 1rem;
        margin-block: 0.5rem;
    }
    ::-webkit-scrollbar-track {
        background: #ccc;
        border-radius: 100vw;
    }
    ::-webkit-scrollbar-thumb {
        background: #8a2b06;
        border-radius: 100vw;
        border: 0.19rem solid #ccc;
    }


`;

export default GlobalStyle;
