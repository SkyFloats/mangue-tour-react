import { HeaderContainer } from "./styles.js";
import logo from "../../assets/logo2.png"
import { Link } from "react-router-dom";



const Header = () => {


    return (
        <HeaderContainer>
            <Link to="/"><img src={logo}/></Link>
        </HeaderContainer>
    );
};

export default Header;
