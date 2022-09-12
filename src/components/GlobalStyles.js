import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: .5rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    input {
        font-family: 'Montserrat', sans-serif;
    }

    h2 {
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }

    h3 {
        font-size: 1.3rem;color: #333;
        padding: 1.5rem 0;
    }

    p {
        font-size: 1.2rem;
        line-height: 2;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;
    }
`;

export default GlobalStyles;
