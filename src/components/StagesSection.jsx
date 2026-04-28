import '../style/StagesSection.css';

const stages = [
    {
        title: "Stage 2025 - Ekeep-it (my-UUU)",
        period: "21 avril 2025 au 13 juin 2025",
        summary:
            "Participation au developpement de la plateforme web my-UUU dans un cadre Agile : analyse de tickets, integration front-end React/Next.js, corrections, et evolutions ponctuelles back-end en Java/Spring Boot.",
        technologies: [
            "React",
            "Next.js",
            "Java",
            "Spring Boot",
            "Jira",
            "Slack",
            "Confluence",
            "GitHub",
            "Docker",
            "IntelliJ IDEA",
            "VS Code"
        ],
        linkedSkills: [
            "Développer la présence en ligne de l’organisation",
            "Répondre aux incidents et aux demandes d’assistance et d’évolution",
            "Travailler en mode projet",
            "Mettre à disposition des utilisateurs un service informatique"
        ]
    },
    {
        title: "Stage 2026 - SNCF e.Solutions (DataGateway)",
        period: "05 janvier 2026 au 27 fevrier 2026",
        summary:
            "Contribution au lancement d'un portail DataGateway : developpement de scripts Python CRUD pour API Microsoft Fabric, securisation des credentials, et industrialisation des tests via Jenkins/Ansible.",
        technologies: [
            "Python",
            "API REST",
            "Microsoft Fabric",
            "Power BI",
            "Jenkins",
            "Ansible",
            "GitLab",
            "HashiCorp Vault",
            "Teams",
            "VS Code"
        ],
        linkedSkills: [
            "Gérer le patrimoine informatique",
            "Mettre à disposition des utilisateurs un service informatique",
            "Organiser son développement professionnel",
            "Travailler en mode projet"
        ]
    }
];

export default function StagesSection() {
    return (
        <section className="stages-section" id="stages">
            <div className="stages-header">
                <h2>Stages</h2>
                <p>Mes deux experiences professionnelles detaillees.</p>
            </div>

            <div className="stages-grid">
                {stages.map((stage) => (
                    <article key={stage.title} className="stage-card">
                        <h3>{stage.title}</h3>
                        <p className="stage-period">{stage.period}</p>
                        <p>{stage.summary}</p>

                        <h4>Logiciels et technologies utilises</h4>
                        <div className="stage-tags">
                            {stage.technologies.map((tech) => (
                                <span key={tech} className="stage-tag">{tech}</span>
                            ))}
                        </div>

                        <h4>Competences developpees (Annexe 8)</h4>
                        <ul>
                            {stage.linkedSkills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
