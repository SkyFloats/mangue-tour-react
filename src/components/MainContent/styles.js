import styled from 'styled-components';

export const MainContentContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    grid-area: main;
    min-height: 70vh;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;
