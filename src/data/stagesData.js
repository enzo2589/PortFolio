export const stagesData = [
    {
        id: 'ekeep-it-2025',
        title: 'Ekeep-it - Projet my-UUU',
        period: '21 avril 2025 au 13 juin 2025',
        company: 'Ekeep-it, Wasquehal',
        summary:
            "Stage de deux mois centre sur le developpement web full-stack dans un contexte Agile. J'ai contribue a l'evolution fonctionnelle de my-UUU en travaillant sur l'integration front-end et des corrections back-end.",
        technologies: [
            'React',
            'Next.js',
            'Java',
            'Spring Boot',
            'Jira',
            'Slack',
            'Confluence',
            'GitHub',
            'Docker',
            'IntelliJ IDEA',
            'VS Code'
        ],
        linkedSkills: [
            'Développer la présence en ligne de l’organisation',
            'Répondre aux incidents et aux demandes d’assistance et d’évolution',
            'Travailler en mode projet',
            'Mettre à disposition des utilisateurs un service informatique'
        ],
        details: [
            "Participation aux sprints (grooming, planning, daily, demo) et suivi des tickets dans Jira.",
            "Integration de composants front-end selon maquettes Figma et amelioration de la responsivite.",
            "Correction d'un bug de coherence ville/code postal avec impact front et back.",
            "Mise en place de pratiques de qualite (branches Git, revues de code, tests et non-regression)."
        ],
        reportUrl: '/rapport-stage-2025.pdf'
    },
    {
        id: 'sncf-2026',
        title: 'SNCF e.Solutions - Projet DataGateway',
        period: '05 janvier 2026 au 27 fevrier 2026',
        company: 'SNCF e.Solutions, EuraTechnologies Lille',
        summary:
            "Stage oriente automatisation, data et infrastructure. J'ai developpe les briques techniques CRUD en Python pour interagir avec l'API Microsoft Fabric et fiabiliser la gestion des DataGateways.",
        technologies: [
            'Python',
            'API REST',
            'Microsoft Fabric',
            'Power BI',
            'Jenkins',
            'Ansible',
            'GitLab',
            'HashiCorp Vault',
            'Teams',
            'VS Code'
        ],
        linkedSkills: [
            'Gérer le patrimoine informatique',
            'Mettre à disposition des utilisateurs un service informatique',
            'Organiser son développement professionnel',
            'Travailler en mode projet'
        ],
        details: [
            "Developpement de scripts CRUD (create/read/update/delete) pour les connexions et passerelles.",
            "Gestion securisee des credentials avec HashiCorp Vault et chiffrement asymetrique.",
            "Execution et validation des scripts en pipeline Jenkins avec parametrage via Jenkinsfile.",
            "Documentation des fonctions Python avec docstrings pour faciliter la reprise par l'equipe."
        ],
        reportUrl: '/rapport-stage-2026.pdf'
    }
];

export const getStageById = (id) => stagesData.find((stage) => stage.id === id);
