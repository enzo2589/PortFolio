import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import '../style/ProjectDetail.css';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = getProjectById(id);

    if (!project) {
        return (
            <main className="project-detail-container">
                <div className="project-not-found">
                    <h1>Projet non trouvé</h1>
                    <Link to="/" className="back-button">Retour à l'accueil</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="project-detail-container">
            <div className="project-detail-header">
                <Link to="/" className="back-button">← Retour</Link>
            </div>

            <article className="project-detail">
                <div className="project-hero">
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                    <h1 className="project-title">{project.title}</h1>
                    
                    <div className="project-meta">
                        <span className="project-duration">{project.duration}</span>
                    </div>

                    <p className="project-summary">{project.description}</p>

                    <section className="project-section">
                        <h2>À propos du projet</h2>
                        <p>{project.fullDescription}</p>
                    </section>

                    <section className="project-section">
                        <h2>Caractéristiques</h2>
                        <ul className="features-list">
                            {project.details.map((detail, index) => (
                                <li key={index}>✓ {detail}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="project-section">
                        <h2>Technologias utilisées</h2>
                        <div className="technologies">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    </section>

                    {project.link && (
                        <section className="project-section">
                            <h2>Liens</h2>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Voir le projet →
                            </a>
                        </section>
                    )}

                    <div className="project-footer">
                        <Link to="/" className="back-button">← Retour aux projets</Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
