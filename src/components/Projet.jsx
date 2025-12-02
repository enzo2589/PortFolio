import "../style/Projet.css";
import placeholderImage from '../img/image1.jpeg';

const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "Mon portfolio personnel développé avec React",
        image: placeholderImage,
        tags: ["React", "CSS", "JavaScript"],
    },
    {
        id: 2,
        title: "Projet 2",
        description: "Description courte du projet 2",
        image: placeholderImage,
        tags: ["Node.js", "Express", "MongoDB"],
    },
];

export default function Projet() {
    return (
        <section className="projects-section">
            <h2 className="projects-title">Mes Projets</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
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
                    </div>
                ))}
            </div>
        </section>
    );
}
