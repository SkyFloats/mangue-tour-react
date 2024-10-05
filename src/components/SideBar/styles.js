import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    display: flex;
    border-left: 1px solid red;
    background-color: green;
    grid-area: aside;
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
        border-top: 1px solid red;
        width: 100%;
    }
`;
