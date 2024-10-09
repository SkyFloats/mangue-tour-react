import styled from "styled-components";
import { Link } from "react-router-dom";

export const DeletePageContainer = styled.main`
        height: 180vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20%;
    div{

        min-width: 600px;
        background-color: #F2F2F2F2;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

`;

export const WarningText = styled.h2`
    color: #ff4d4f;
    margin-bottom: 20px;
`;

export const ConfirmButton = styled(Link)`
    background-color: #ff4d4f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #ff7875;
    }
`;

export const CancelButton = styled(Link)`
    background-color: #ddd;
    color: #333;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: #bbb;
    }
`;