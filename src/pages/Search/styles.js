import styled from 'styled-components';

export const SearchContainer = styled.section`
    .moives-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .title-info {
        margin: 30px 0 0 30px;
        display: flex;
        gap: 10px;
        font-size: 38px;
        font-weight: 800;
        color: ${(props) => props.theme.textColor};

        .title-query {
            color: #536FED;
        }
    }
`;

export default SearchContainer;
