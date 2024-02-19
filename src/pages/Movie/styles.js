import styled from 'styled-components';
import common from '../../styles/themes/common';

const MovieContainer = styled.section`
    margin: 2rem;
    display: flex;
    gap: 2rem;
    color: ${(props) => props.theme.textColor};

    .info-movie-container {
        max-width: 800px;

        .title-movie {
            font-size: 38px;
            letter-spacing: 1.6px;
        }

        .about-movie {
            padding: 0.6rem 0 0.6rem 0;
            font-size: 18px;
        }

        .genres-container {
            h3 {
                font-size: 26px;
            }

            .genres {
                display: flex;
                flex-direction: row;
                gap: 1rem;
                padding: 0.6rem 0 0.6rem 0;

                span {
                    background-color: #536FED;
                    text-align: center;
                    color: #FFF;
                    width: 160px;
                    padding: 6px;
                    border-radius: ${common.borderRadius};
                    cursor: pointer;
                    transition: 0.2s;
                }

                span:hover {
                        background-color: #2741b3;
                    }

            }
        }

        .data-movie {
            padding: 0.6rem 0 0.6rem 0;

            h3 {
                font-size: 26px;
            }

            span {
                font-size: 20px;
                letter-spacing: 2px;

            }
        }

        .companies-movie-container {
            h3 {
                font-size: 26px;
            }

            .companies-movie {
                font-size: 18px;
                font-weight: 600;
                display: flex;
                flex-direction: row;
                gap: 1rem;
                cursor: pointer;
            }

            .companie:hover {
                color: #536FED;
            }
        }
    }
`;

export default MovieContainer;
