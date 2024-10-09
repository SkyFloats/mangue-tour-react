import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        margin-right: 20px;
    }
    div {
    
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #333;
    }
    div p{
        font-size: 16px;
        color: #777;
    }
    div ul{
        list-style-type: none;
    padding: 0;
    margin: 0;
    }
    div ul li{
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        padding: 15px;
    }
`
