import styled from 'styled-components';
import common from '../../styles/themes/common';

export const CardMovieContainer = styled.div`
    background-color: ${(props) => props.theme.navbarColor};
    margin: 2rem 0 1rem;
    padding: 20px;
    border-radius: ${common.borderRadius};
    text-align: left;
    transition: 0.2s ease-in;

    &:hover {
        border: 1px solid #536FED;
    }

    img {
        border-radius: ${common.borderRadius};
    }

    .info-movie {
        margin-top: 8px;

        .vote-movie {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-weight: 600;
            gap: 5px;
            color: ${(props) => props.theme.textColor};
        }

        .title {
            font-size: 34px;
            max-width: 500px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${(props) => props.theme.textColor};
        }

        .link-movie {
           background-color: #536FED;
           display: block;
           text-align: center;
           width: auto;
           padding: 18px;
           font-weight: 600;
           font-size: 16px;
           color: #FFFF;
           border-radius: 6px;
           transition: 0.2s;


        }

        .link-movie:hover {
            background-color: #2741b3;
        }
    }

    @media (max-width: 768px) {
        text-align: center;
        padding: 20px 10px;
        width: 380px;
        margin: 8px;

        img {
            height: 500px;
        }

        .info-movie {
            .title {
                font-size: 18px;
                width: 333px;
            }

            .vote-movie {
                text-align: center;
                justify-content: center;
            }
        }
    }

`;

export default CardMovieContainer;
