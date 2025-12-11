import "../style/Projet.css";
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function Projet() {
    return (
        <section className="projects-section" id="projets">
            <h2 className="projects-title">Mes Projets</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <Link to={`/projet/${project.id}`} key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <span>Voir plus</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
