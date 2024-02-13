import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'DM Sans', sans-serif;
    }

    body {
        background-color: #111111;
        color: #FFFF;
    }

    a {
        text-decoration: none;
        color: #9AA0AC;
    }
`;
