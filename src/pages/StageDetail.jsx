import { Link, useParams } from 'react-router-dom';
import { getStageById } from '../data/stagesData';
import '../style/StageDetail.css';

export default function StageDetail() {
    const { id } = useParams();
    const stage = getStageById(id);

    if (!stage) {
        return (
            <main className="stage-detail-page">
                <section className="page-shell">
                    <div className="page-shell-header">
                        <h1>Stage introuvable</h1>
                        <Link to="/stages" className="back-button">← Retour aux stages</Link>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="stage-detail-page">
            <section className="page-shell">
                <div className="page-shell-header">
                    <Link to="/stages" className="back-button">← Retour aux stages</Link>
                    <h1>{stage.title}</h1>
                    <p>{stage.period} - {stage.company}</p>
                </div>

                <article className="stage-detail-card">
                    <h2>Resume du stage</h2>
                    <p>{stage.summary}</p>

                    <h2>Missions principales</h2>
                    <ul>
                        {stage.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>

                    <h2>Logiciels et technologies utilises</h2>
                    <div className="stage-detail-tags">
                        {stage.technologies.map((tech) => (
                            <span key={tech} className="stage-tag">{tech}</span>
                        ))}
                    </div>

                    <h2>Competences developpees (Annexe 8)</h2>
                    <ul>
                        {stage.linkedSkills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>

                    <div className="stage-detail-actions">
                        <a
                            href={stage.reportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="stage-link"
                        >
                            Consulter le rapport PDF
                        </a>
                    </div>
                </article>
            </section>
        </main>
    );
}
