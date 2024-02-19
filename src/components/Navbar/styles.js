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

    .container-form {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 12px;
    }

    .container-toggle-button {
        position: relative;
        width: 64px;
        margin: 4px auto;

        span {
            display: flex;
            width: 4rem;
            height: 1.3rem;
            border: 1px solid ${(props) => props.theme.textColor};
            border-radius: 9999px;
        }

        button {
            height: 30px;
            width: 30px;
            background-color: ${(props) => props.theme.textColor};
            border: 0;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: ${(props) => props.theme.positionButtonToggle};
            z-index: 1;
            transform: translateY(-50%);

            cursor: pointer;

            svg {
                transform: translateY(10%);
            }
        }
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
