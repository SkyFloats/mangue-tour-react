import { HeaderContainer } from "./styles.js";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png"



const Header = () => {

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'List', path: '/list' },
        { label: 'Form', path: '/form' },
        { label: 'Delete', path: '/delete' },
    ];

    return (
        <HeaderContainer>
            <img src={logo}/>
            <nav>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
