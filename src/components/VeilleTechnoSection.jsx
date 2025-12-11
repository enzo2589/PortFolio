import { Link } from 'react-router-dom';
import '../style/VeilleTechnoSection.css';

export default function VeilleTechnoSection() {
    return (
        <section className="veille-techno-section">
            <div className="veille-techno-section-content">
                <div className="veille-techno-section-text">
                    <h2 className="veille-techno-section-title">Veille Technologique</h2>
                    <p className="veille-techno-section-description">
                        Suivez ma veille technologique où je partage les dernières découvertes, 
                        frameworks et pratiques qui enrichissent mon expertise en développement.
                    </p>
                    <Link to="/veille-techno" className="veille-techno-button">
                        Découvrir →
                    </Link>
                </div>
            </div>
        </section>
    );
}
