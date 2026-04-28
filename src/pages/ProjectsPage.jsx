import { Link } from 'react-router-dom';
import Projet from '../components/Projet';

export default function ProjectsPage() {
    return (
        <main>
            <section className="page-shell">
                <div className="page-shell-header">
                    <Link to="/" className="back-button">← Retour</Link>
                    <h1>Projets</h1>
                    <p>Selection de projets techniques et académiques.</p>
                </div>
                <Projet />
            </section>
        </main>
    );
}
