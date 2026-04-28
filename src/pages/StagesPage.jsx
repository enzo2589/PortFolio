import { Link } from 'react-router-dom';
import { stagesData } from '../data/stagesData';
import '../style/StagesPage.css';

export default function StagesPage() {
    return (
        <main className="stages-page">
            <section className="page-shell">
                <div className="page-shell-header">
                    <Link to="/" className="back-button">← Retour</Link>
                    <h1>Stages</h1>
                    <p>
                        Deux experiences professionnelles detaillees avec liens
                        directs vers les rapports de stage.
                    </p>
                </div>

                <div className="stages-page-grid">
                    {stagesData.map((stage) => (
                        <article key={stage.id} className="stage-overview-card">
                            <h2>{stage.title}</h2>
                            <p className="stage-overview-period">{stage.period}</p>
                            <p className="stage-overview-company">{stage.company}</p>
                            <p>{stage.summary}</p>
                            <div className="stage-overview-actions">
                                <Link to={`/stages/${stage.id}`} className="stage-link">
                                    Voir le detail
                                </Link>
                                <a
                                    href={stage.reportUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="stage-link secondary"
                                >
                                    Ouvrir le rapport PDF
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
