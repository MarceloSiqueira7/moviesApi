import styled from 'styled-components';

export const HomeContainer = styled.section`
    .moives-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .title-home {
        margin: 2rem 0 0 4.6rem;
        font-size: 38px;
        font-weight: 800;
        color: ${(props) => props.theme.textColor};
        }
`;

export default HomeContainer;
