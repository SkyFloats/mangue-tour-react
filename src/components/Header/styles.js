import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #2D4DAD;
    text-align: center;
    padding: 20px;
    width: 100%;
        @media screen and (max-width: 600px) {
            position: fixed;
            top:0;
            img {
                max-height: 60px;
            }
        }

`