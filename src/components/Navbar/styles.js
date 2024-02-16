import styled from 'styled-components';
import common from '../../styles/themes/common';

export const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    height: 10vh;
    width: 100%;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;

    background: ${(props) => props.theme.navbarColor};
    box-shadow:  0 0 1px 0 #9AA0AC;

    h2 {
        color: ${(props) => props.theme.textColor};
        font-size: ${common.spacing.x_large};
        letter-spacing: 2px;
    }

    form {
        display: flex;
        background-color: ${(props) => props.theme.navbarFormColor};
        padding: 10px;
        border-radius: 99999px;

        input{
            width: 20rem;
            background: none;
            border: none;
            color: #000;
            padding-left: 8px;
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
`;

export default NavBarContainer;
