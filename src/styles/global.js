import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'DM Sans', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme};
        color: ${(props) => props.theme};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.textColor};
    }
`;
