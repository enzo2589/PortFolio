import '../style/PresentationSection.css';

export default function PresentationSection() {
    const handleScrollToDetail = (event) => {
        event.preventDefault();
        const target = document.getElementById('presentation-detail');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="presentation-section" id="presentation">
            <div className="presentation-content">
                <div className="presentation-intro">
                    <p className="presentation-badge">A propos</p>
                    <h1>Enzo Deyrich</h1>
                    <p>
                        Etudiant en BTS SIO a l&apos;EPSI Lille, je me specialise dans le
                        developpement full-stack avec une forte appétence pour
                        l&apos;automatisation, la qualite logicielle et les environnements
                        collaboratifs.
                    </p>
                    <p>
                        Apres un Bac general Euro anglais (specialites NSI et Maths),
                        j&apos;ai construit mon parcours autour de projets concrets en
                        developpement web, data et DevOps.
                    </p>

                    <div className="presentation-actions">
                        <a href="#presentation-detail" onClick={handleScrollToDetail} className="btn-primary">
                            En savoir plus
                        </a>
                        <a href="/cv-enzo-deyrich.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            Consulter mon CV
                        </a>
                        <a href="/cv-enzo-deyrich.pdf" download className="btn-secondary">
                            Telecharger mon CV
                        </a>
                    </div>
                </div>
            </div>

            <div className="presentation-detail" id="presentation-detail">
                <h2>Parcours et experiences</h2>
                <p>
                    Actuellement en 2eme annee de BTS SIO (EPSI Lille, 2024-2026),
                    je recherche une alternance a partir de septembre 2026, avec un
                    rythme de 2 semaines en entreprise / 1 semaine en cours.
                </p>
                <p>
                    Lors de mon stage chez Ekeep-it, j&apos;ai participe au developpement
                    de la plateforme my-uuu.com sur une stack React/Next.js et
                    Java/Spring Boot, avec correction de bugs, integration UX/UI et
                    travail en equipe agile.
                </p>
                <p>
                    J&apos;ai ensuite realise un stage chez SNCF Connect & Tech
                    (SNCF e.Solutions), axe sur le back-end et l&apos;automatisation :
                    developpement de scripts Python (CRUD API), integration CI/CD
                    avec Jenkins/Ansible, et contribution a un portail de gestion des
                    DataGateways Power BI/Microsoft Fabric.
                </p>
            </div>
        </section>
    );
}
