import stageEkeepitGitTraining from '../img/stage-ekeepit-git-training.png';
import stageEkeepitReactForm from '../img/stage-ekeepit-react-form.png';
import stageEkeepitDailyMeeting from '../img/stage-ekeepit-daily-meeting.png';
import stageEkeepitCodeReview from '../img/stage-ekeepit-code-review.png';
import stageSncfPowerBiConnections from '../img/stage-sncf-powerbi-connections.png';
import stageSncfFabricApiDocs from '../img/stage-sncf-fabric-api-docs.png';
import stageSncfJenkinsPipeline from '../img/stage-sncf-jenkins-pipeline.png';
import stageSncfGitlabCommits from '../img/stage-sncf-gitlab-commits.png';

export const stagesData = [
    {
        id: 'ekeep-it-2025',
        title: 'Stage Ekeep-It (Developpement Web React & Java)',
        period: '21 avril 2025 au 13 juin 2025',
        company: 'Ekeep-it, Wasquehal',
        summary:
            "Lors de mon stage de premiere annee chez Ekeep-It, j'ai integre l'incubateur de l'entreprise pour participer au developpement de la plateforme my-UUU. Ce projet d'envergure pour l'univers equestre reposait sur une architecture React/Next.js en front et Java/Spring Boot en back. En autonomie, j'ai travaille sur des sprints Agile de la conception d'interfaces a la logique metier et aux tests.",
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
            'Gerer le patrimoine informatique',
            'Développer la présence en ligne de l’organisation',
            'Travailler en mode projet',
            'Mettre à disposition des utilisateurs un service informatique',
            'Organiser son développement professionnel'
        ],
        details: [
            "Organisation du code en branches par fonctionnalite et Pull Requests.",
            "Developpement front-end React/Next.js et ajustements ergonomiques du header.",
            "Synchronisation dynamique code postal/ville pour fluidifier l'inscription.",
            "Participation Scrum (daily, poker planning, sprint review) et suivi Jira.",
            "Mise en place de tests back-end et validation via code review."
        ],
        competencyJustifications: [
            {
                skill: '1.1 Gerer le patrimoine informatique',
                evidence: "Gestion du versioning avec Git/GitHub, branches fonctionnelles et Pull Requests. Usage d'ESLint pour respecter les standards de qualite et Docker pour garantir un environnement de developpement uniformise."
            },
            {
                skill: "1.3 Developper la presence en ligne de l'organisation",
                evidence: "Contribution directe a my-UUU pour renforcer la visibilite web des centres equestres, avec ameliorations d'ergonomie front-end et optimisation du parcours d'inscription."
            },
            {
                skill: '1.4 Travailler en mode projet',
                evidence: "Integration dans une equipe Agile Scrum sur des sprints de 2 a 3 semaines, participation active aux rituels (daily, poker planning, demos) et suivi continu des User Stories dans Jira."
            },
            {
                skill: '1.5 Mettre a disposition des utilisateurs un service informatique',
                evidence: "Implementation de tests unitaires/integration cote back-end et validation des evolutions par code review avant fusion pour limiter les regressions."
            },
            {
                skill: '1.6 Organiser son developpement professionnel',
                evidence: "Montee en competences structuree via Confluence (Git, React, Java, Spring Boot), mise en place d'un environnement Linux Ubuntu en dualboot et tenue de notes techniques regulieres."
            }
        ],
        proofImages: [
            {
                src: stageEkeepitGitTraining,
                alt: "Formation initiale Git lors du stage Ekeep-It"
            },
            {
                src: stageEkeepitReactForm,
                alt: "Developpement front-end React sur formulaire my-UUU"
            },
            {
                src: stageEkeepitDailyMeeting,
                alt: "Rituel d'equipe en salle pendant le stage Ekeep-It"
            },
            {
                src: stageEkeepitCodeReview,
                alt: "Historique de commits et revues sur la plateforme Git"
            }
        ],
        documentationLinks: [
            'https://docs.github.com/',
            'https://www.docker.com/',
            'https://eslint.org/'
        ],
        competencyTables: [
            {
                label: 'Tableau competences E4',
                url: '/tableau-competences-epreuve-e4.pdf'
            },
            {
                label: 'Tableau competences E5',
                url: '/tableau-synthese-competences-e5-annexe8.pdf'
            }
        ],
        reportUrl: '/rapport-stage-2025.pdf'
    },
    {
        id: 'sncf-2026',
        title: 'Stage SNCF e.Solutions (Automatisation DataGateways)',
        period: '05 janvier 2026 au 27 fevrier 2026',
        company: 'SNCF e.Solutions, EuraTechnologies Lille',
        summary:
            "Lors de mon stage de deuxieme annee chez SNCF e.Solutions (equipe Architecture Solutions), j'ai travaille sur l'automatisation et la securisation des flux de donnees. Ma mission principale etait de developper les briques backend Python du futur portail interne Automatio pour la gestion centralisee des DataGateways, en environnement industriel avec API REST, GitLab, Jenkins, Ansible et HashiCorp Vault.",
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
            'Développer la présence en ligne de l’organisation',
            'Mettre à disposition des utilisateurs un service informatique',
            'Organiser son développement professionnel',
            'Travailler en mode projet'
        ],
        details: [
            "Developpement de scripts Python CRUD pour manipuler les DataGateways via Microsoft Fabric.",
            "Securisation des secrets avec HashiCorp Vault et bonnes pratiques de non-stockage en dur.",
            "Mise en place et adaptation de pipelines Jenkins et playbooks Ansible pour les tests.",
            "Travail quotidien en compagnonnage technique avec livrables versionnes sur GitLab.",
            "Documentation des fonctions en docstrings pour faciliter l'integration par les equipes."
        ],
        competencyJustifications: [
            {
                skill: '1.1 Gerer le patrimoine informatique',
                evidence: "Versioning du code via GitLab sur branche dediee et gestion securisee des credentials avec HashiCorp Vault pour respecter les contraintes de securite de l'entreprise."
            },
            {
                skill: "1.3 Developper la presence en ligne de l'organisation",
                evidence: "Contribution au futur portail interne Automatio en developpant le backend Python qui expose les operations CRUD vers l'API Fabric pour simplifier les operations des utilisateurs techniques."
            },
            {
                skill: '1.4 Travailler en mode projet',
                evidence: "Approche par compagnonnage de proximite, coordination quotidienne via Teams et reunions hebdomadaires, avec organisation asynchrone des livrables sur GitLab."
            },
            {
                skill: '1.5 Mettre a disposition des utilisateurs un service informatique',
                evidence: "Validation des scripts en environnement iso-production via pipelines Jenkins parametres et execution de playbooks Ansible pour fiabiliser les tests avant mise a disposition."
            },
            {
                skill: '1.6 Organiser son developpement professionnel',
                evidence: "Face a une documentation Fabric incomplete, mise en place d'une veille personnelle approfondie, experimentation technique continue et journal de bord de montee en competences DevOps."
            }
        ],
        proofImages: [
            {
                src: stageSncfPowerBiConnections,
                alt: 'Vue des connexions et passerelles dans Power BI'
            },
            {
                src: stageSncfFabricApiDocs,
                alt: 'Documentation Microsoft Fabric REST API - List Gateways'
            },
            {
                src: stageSncfJenkinsPipeline,
                alt: 'Pipeline Jenkins de validation et deploiement'
            },
            {
                src: stageSncfGitlabCommits,
                alt: 'Historique des commits sur GitLab'
            }
        ],
        documentationLinks: [
            'https://learn.microsoft.com/rest/api/fabric/',
            'https://www.jenkins.io/doc/',
            'https://developer.hashicorp.com/vault/docs'
        ],
        competencyTables: [
            {
                label: 'Tableau competences E4',
                url: '/tableau-competences-epreuve-e4.pdf'
            },
            {
                label: 'Tableau competences E5',
                url: '/tableau-synthese-competences-e5-annexe8.pdf'
            }
        ],
        reportUrl: '/rapport-stage-2026.pdf'
    }
];

export const getStageById = (id) => stagesData.find((stage) => stage.id === id);
