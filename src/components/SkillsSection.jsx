import { Link } from 'react-router-dom';
import '../style/SkillsSection.css';

export default function SkillsSection() {
    return (
        <section className="skills-section" id="competences">
            <div className="skills-section-content">
                <h2 className="skills-section-title">Mes Compétences</h2>
                <p className="skills-section-description">
                    Découvrez un aperçu de mes compétences techniques et professionnelles acquises à travers mes projets et expériences.
                </p>


                <Link to="/skills" className="skills-cta-button">
                    Voir toutes mes compétences →
                </Link>
            </div>

            <div className="skills-floating-icon">
                <span>💡</span>
            </div>
        </section>
    );
}
