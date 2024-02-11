import common from "../../styles/themes/common";

import styled from "styled-components";

export const NavBarContainer = styled.nav`
    display: flex;
    position: fixed;
    align-items: center;
    height: 10vh;
    width: 100%;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;

    background: #111111;
    box-shadow:  0 0 1px 0 #9AA0AC;

    h2 {
        font-size: ${common.spacing.x_large};
        letter-spacing: 2px;
    }

    form {
        display: flex;
        background-color: #9AA0AC;
        padding: 10px;
        border-radius: 99999px;

        input{
            width: 20rem;
            background: none;
            border: none;
            color: #000;
            font-weight: 500;
            font-size: ${common.spacing.medium};
        }

        input:focus {
            outline: none;
            border: none;
        }

        button {
            cursor: pointer;
            background: none;
            border: none;
        }
    }
`

export default NavBarContainer;
