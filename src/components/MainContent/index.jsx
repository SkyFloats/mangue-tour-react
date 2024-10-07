import { MainContentContainer } from "./styles.js";

const MainContent = ({ title, content }) => {
    return (
        <MainContentContainer>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>

        </MainContentContainer>
    );
};

export default MainContent;
