import { MainContentContainer } from "./styles.js";

const MainContent = ({ title, content }) => {
    return (
        <MainContentContainer>
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </MainContentContainer>
    );
};

export default MainContent;
