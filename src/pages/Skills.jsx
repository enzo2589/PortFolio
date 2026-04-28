import { Link } from 'react-router-dom';
import { skillsData } from '../data/skillsData';
import { TABLEAU_SYNTHESE_COMPETENCES_E5_PDF } from '../constants/downloads';
import '../style/Skills.css';

export default function Skills() {
    return (
        <main className="skills-container">
            <div className="skills-header">
                <Link to="/" className="back-button">← Retour</Link>
            </div>

            <div className="skills-content">
                <section className="skills-hero">
                    <h1 className="skills-title">Mes Compétences</h1>
                    <p className="skills-subtitle">
                        Grille de competences BTS SIO (Annexe 8 - Epreuve E5)
                    </p>
                </section>

                <section className="skills-grid">
                    {skillsData.map((category) => (
                        <div key={category.category} className="skills-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h2 className="category-title">{category.category}</h2>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill) => (
                                    <div key={skill} className="skill-item">
                                        <p className="skill-description">{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                <div className="skills-footer actions">
                    <a
                        href={TABLEAU_SYNTHESE_COMPETENCES_E5_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skills-download-link"
                    >
                        Consulter le tableau de synthèse (PDF)
                    </a>
                    <a
                        href={TABLEAU_SYNTHESE_COMPETENCES_E5_PDF}
                        download
                        className="skills-download-link"
                    >
                        Télécharger le tableau de synthèse (PDF)
                    </a>
                    <Link to="/" className="back-button">← Retour à l'accueil</Link>
                </div>
            </div>
        </main>
    );
}
