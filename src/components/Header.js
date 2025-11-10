import '../style/Header.css';

const Header = () => {
    return (
        
    
    <nav className="nav-header">
        <ul>
            <li>
                <a href="#projets">Projets</a>
                <ul className="submenu">
                    <li><a href="#projet1">Projet 1</a></li>
                    <li><a href="#projet2">Projet 2</a></li>
                </ul>
            </li>
            <li>
                <a href="#competences">Compétences</a>
                <ul className="submenu">
                    <li><a href="#frontend">Frontend</a></li>
                    <li><a href="#backend">Backend</a></li>
                </ul>
            </li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>


    );
}

export default Header;
