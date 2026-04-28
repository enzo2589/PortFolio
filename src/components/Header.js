import '../style/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navClassName = ({ isActive }) => (isActive ? 'active' : '');

    return (
        <nav className="nav-header">
            <NavLink to="/" className="brand">
                Mon Portfolio
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/" className={navClassName}>Presentation</NavLink>
                </li>
                <li>
                    <NavLink to="/projets" className={navClassName}>Projets</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" className={navClassName}>Competences</NavLink>
                </li>
                <li>
                    <NavLink to="/stages" className={navClassName}>Stages</NavLink>
                </li>
                <li>
                    <NavLink to="/veille-techno" className={navClassName}>Veille Techno</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={navClassName}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
