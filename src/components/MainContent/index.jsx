import { MainContentContainer } from "./styles.js";

const MainContent = ({ content }) => {
    return (
        <MainContentContainer>
            <p>{content}</p>
        </MainContentContainer>
    );
};

export default MainContent;
