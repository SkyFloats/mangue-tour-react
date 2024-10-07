import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    display: flex;
    border-left: 1px solid rgba(48, 146, 233, 0.801);
    background-color: #009B50;
    grid-area: aside;
    padding: 30px;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        @media screen and (max-width: 600px) {
            width: 100%;
            float: none;
        }
    }

    @media screen and (max-width: 600px) {
        border-left: none;
        border-top: 1px solid rgba(48, 146, 233, 0.801);
        width: 100%;
    }
`;
