import styled from 'styled-components';

export const PageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    min-height: 170vh;
    @media (max-width: 600px) {
        padding: 60px 30px;
    }

`;

export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    background-color: #F2F2F2F2;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    @media (max-width: 600px) {
        margin:
    }
`;

export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
`;

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfileName = styled.h2`
    font-size: 24px;
    margin: 0;
    color: #333;
`;

export const ProfileInfo = styled.p`
    font-size: 16px;
    color: #777;
    margin: 5px 0;
`;

export const CardList = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    max-width: 800px;
    background-color: #FFFFFFFF;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;
