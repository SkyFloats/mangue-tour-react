import { SideBarContainer } from "./styles.js";

const SideBar = ({ sidebarContent }) => {
    return (
        <SideBarContainer>
            <ul>
                {sidebarContent.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </SideBarContainer>
    );
};

export default SideBar;
