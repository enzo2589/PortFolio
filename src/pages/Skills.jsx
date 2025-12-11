import { Link } from 'react-router-dom';
import { skillsData } from '../data/skillsData';
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
                        Découvrez mes compétences acquises à travers mes projets et expériences professionnelles
                    </p>
                </section>

                <section className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skills-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h2 className="category-title">{category.category}</h2>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-name">{skill.name}</h3>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>

                                        <p className="skill-description">{skill.description}</p>

                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>

                                        <div className="skill-projects">
                                            <label className="projects-label">Projets :</label>
                                            <div className="projects-tags">
                                                {skill.projects.map((project, projIndex) => (
                                                    <span key={projIndex} className="project-tag">
                                                        {project}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                <div className="skills-footer">
                    <Link to="/" className="back-button">← Retour à l'accueil</Link>
                </div>
            </div>
        </main>
    );
}
