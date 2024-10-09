import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    display: flex;
    border-left: 1px solid rgba(48, 146, 233, 0.801);
    background-color: #009B50;
    border-radius: 10px;
    opacity: 0.8;
    grid-area: aside;
    padding: 20px;
    height: '100vh';
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        @media screen and (max-width: 600px) {
            width: 100%;
            justify-content:center;
            display: flex;
        }
    }
    li {
        margin: 20px 0;
        @media screen and (max-width: 600px) {
            margin: 20px;

        }
    }

    a:hover {
        border-radius: 8px;
        border: 1px solid 646cff;
        padding: 0.6em 1.2em;
        background-color: #646cff;
    }

    @media screen and (max-width: 600px) {
        border-left: none;
        border-top: 1px solid rgba(48, 146, 233, 0.801);
        width: 100%;
        max-height:60px;
    }
`;
