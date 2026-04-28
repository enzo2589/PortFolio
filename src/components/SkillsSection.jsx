import { Link } from 'react-router-dom';
import '../style/SkillsSection.css';
import { skillsData } from '../data/skillsData';
import { TABLEAU_COMPETENCES_E4_PDF } from '../constants/downloads';

export default function SkillsSection() {
    return (
        <section className="skills-section" id="competences">
            <div className="skills-section-content">
                <h2 className="skills-section-title">Mes Compétences</h2>
                <p className="skills-section-description">
                    Compétences issues du référentiel BTS SIO (Epreuve E4).
                </p>

                <div className="skills-preview">
                    {skillsData.map((category) => (
                        <article key={category.category} className="skill-preview-item">
                            <span className="skill-preview-icon">{category.icon}</span>
                            <h3>{category.category}</h3>
                        </article>
                    ))}
                </div>

                <div className="skills-actions">
                    <Link to="/skills" className="skills-cta-button">
                        Voir la grille detaillee
                    </Link>

                    <a
                        href={TABLEAU_COMPETENCES_E4_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skills-cta-button"
                    >
                        Consulter le tableau (PDF)
                    </a>

                    <a
                        href={TABLEAU_COMPETENCES_E4_PDF}
                        download
                        className="skills-cta-button secondary"
                    >
                        Télécharger le tableau de synthèse (PDF)
                    </a>
                </div>
            </div>

            <div className="skills-floating-icon">
                <span>💡</span>
            </div>
        </section>
    );
}
