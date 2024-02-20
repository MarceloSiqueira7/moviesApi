import styled from 'styled-components';

export const HomeContainer = styled.section`
    .moives-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .title-home {
        margin: 2rem 0 0 1.6rem;
        font-size: 38px;
        font-weight: 800;
        color: ${(props) => props.theme.textColor};
        }

    @media (max-width: 768px) {
        .title-home {
            font-size: 28px;
            margin: 1rem 0 0 0.8rem;
        }
    }
`;

export default HomeContainer;
