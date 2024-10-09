import { SideBarContainer } from "./styles.js";
import { Link } from "react-router-dom";

const SideBar = () => {

    
    const navLinks = [
        { label: 'Página Inicial', path: '/' },
        { label: 'Lista de Rotas', path: '/list' },
        { label: 'Cadastrar Rotas', path: '/form' },
    ];

    return (
        <SideBarContainer>
            <nav>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </SideBarContainer>
    );
};

export default SideBar;
