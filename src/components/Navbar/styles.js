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
        margin: 4px auto;

        span {
            display: flex;
            width: 3rem;
            height: 1.8rem;
            border: 1px solid ${(props) => props.theme.textColor};
            border-radius: 9999px;
        }

        button {
            height: 28px;
            width: 28px;
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

    @media (max-width: 768px) {
        padding: 8px;

        h2 {
            font-size: 23px;
            letter-spacing: normal;

            svg {
                display: none;
            }
        }

        .container-form {
            input {
                max-width: 135px;
                font-size: 13px;
            }
        }


        .container-toggle-button {
            width: auto;

            span {
                display: none;
            }

            button {
                position: initial;
                transform: none;
            }


        }
    }
`;

export default NavBarContainer;
