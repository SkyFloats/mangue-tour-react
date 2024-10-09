import styled from 'styled-components';

export const Page = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 180vh;
    padding: 10px;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #222;
    border-radius: 8px;
    color: #fff;
    width: 100%;
    max-width: 600px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    overflow-y: auto;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-size: 16px;
`;

export const Input = styled.input`
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin-bottom: 15px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
`;

export const MapImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 20px;
`;

export const ConnectionSection = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddButton = styled.button`
    background-color: #0d6efd;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0a58ca;
    }
`;

export const ConnectionList = styled.div`
    margin-bottom: 20px;
    background-color: #333;
    padding: 10px;
    border-radius: 4px;
`;

export const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;