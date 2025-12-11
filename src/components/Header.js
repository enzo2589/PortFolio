import '../style/Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { replace: false });
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className="nav-header">
            <ul>
                <li>
                    <a href="#projets" onClick={(e) => { e.preventDefault(); handleNavigation('projets'); }}>Projets</a>
                </li>
                <li>
                    <a href="#competences" onClick={(e) => { e.preventDefault(); handleNavigation('competences'); }}>Compétences</a>
                </li>
                <li>
                    <a href="#certifications" onClick={(e) => { e.preventDefault(); handleNavigation('certifications'); }}>Certifications</a>
                </li>
                <li>
                    <Link to="/veille-techno">Veille Techno</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
