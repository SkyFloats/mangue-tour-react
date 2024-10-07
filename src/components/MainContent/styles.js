import styled from 'styled-components';

export const MainContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    grid-area: main;
    min-height: 70vh;
    padding: 30px;
    div {
        background-color: rgba(48, 146, 233, 0.801);
        border-radius: 35px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;
