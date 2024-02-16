import styled from 'styled-components';
import common from '../../styles/themes/common';

export const CardMovieContainer = styled.div`
    background-color: ${(props) => props.theme.navbarColor};
    margin: 2rem 0 1rem;
    padding: 20px;
    border-radius: ${common.borderRadius};
    text-align: left;

    .info-movie {
        margin-top: 8px;

        .vote-movie {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            gap: 5px;
        }

        .title {
            font-size: 34px;
            max-width: 500px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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

`;

export default CardMovieContainer;
