import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { skillsData } from '../data/skillsData';
import { TABLEAU_SYNTHESE_COMPETENCES_E5_PDF } from '../constants/downloads';
import { projectsData } from '../data/projectsData';
import { stagesData } from '../data/stagesData';
import '../style/Skills.css';

export default function Skills() {
    const [selectedSkillCode, setSelectedSkillCode] = useState(null);

    const selectedSkillCategory = useMemo(
        () => skillsData.find((category) => category.code === selectedSkillCode) || null,
        [selectedSkillCode]
    );

    const relatedProjects = useMemo(
        () =>
            projectsData.filter((project) =>
                project.competencyJustifications?.some((item) =>
                    item.skill.startsWith(`${selectedSkillCode} `)
                )
            ),
        [selectedSkillCode]
    );

    const relatedStages = useMemo(
        () =>
            stagesData.filter((stage) =>
                stage.competencyJustifications?.some((item) =>
                    item.skill.startsWith(`${selectedSkillCode} `)
                )
            ),
        [selectedSkillCode]
    );

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
                        <div
                            key={category.category}
                            className={`skills-category ${selectedSkillCode === category.code ? 'selected' : ''}`}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h2 className="category-title">{category.code} - {category.category}</h2>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill) => (
                                    <button
                                        key={skill}
                                        type="button"
                                        className={`skill-item ${selectedSkillCode === category.code ? 'active' : ''}`}
                                        onClick={() => setSelectedSkillCode(category.code)}
                                    >
                                        <p className="skill-description">{skill}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {selectedSkillCategory && (
                    <section className="skills-related-projects">
                        <h2>
                            Projets lies a la competence {selectedSkillCategory.code}
                        </h2>
                        <p className="related-subtitle">
                            {selectedSkillCategory.category}
                        </p>

                        {relatedProjects.length > 0 ? (
                            <div className="related-projects-grid">
                                {relatedProjects.map((project) => (
                                    <Link to={`/projet/${project.id}`} key={project.id} className="related-project-card">
                                        <img src={project.image} alt={project.title} />
                                        <div className="related-project-card-content">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="related-empty">
                                Aucun projet rattache a cette competence pour le moment.
                            </p>
                        )}
                    </section>
                )}

                {selectedSkillCategory && (
                    <section className="skills-related-projects">
                        <h2>
                            Stages lies a la competence {selectedSkillCategory.code}
                        </h2>
                        <p className="related-subtitle">
                            {selectedSkillCategory.category}
                        </p>

                        {relatedStages.length > 0 ? (
                            <div className="related-projects-grid">
                                {relatedStages.map((stage) => (
                                    <Link to={`/stages/${stage.id}`} key={stage.id} className="related-project-card">
                                        <div className="related-project-card-content">
                                            <h3>{stage.title}</h3>
                                            <p>{stage.company}</p>
                                            <p>{stage.period}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="related-empty">
                                Aucun stage rattache a cette competence pour le moment.
                            </p>
                        )}
                    </section>
                )}

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
