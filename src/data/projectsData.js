import placeholderImage from '../img/image1.jpeg';
import imgportfolio from '../img/portfolio.png';
import divinouze from '../img/brasserie_logo.png';
import nuitinfo from '../img/nuitinfos.png';
import todolist from '../img/todolist.png';
import divinouzePreuvePresentation from '../img/divinouze-preuve-presentation.png';
import divinouzePreuveAuth from '../img/divinouze-preuve-auth.png';

export const projectsData = [
    {
        id: 1,
        title: "Portfolio",
        description: "Mon portfolio personnel développé avec React",
        image: imgportfolio,
        tags: ["React", "CSS", "JavaScript"],
        fullDescription: "Ce projet est mon portfolio personnel, développé avec React. Il présente mes projets, mes compétences et mes certifications. C'est une excellente vitrine de mes capacités en développement web front-end.",
        details: [
            "Interface moderne et réactive",
            "Navigation fluide avec React Router",
            "Design épuré et professionnel",
            "Animations et transitions élégantes"
        ],
        link: "https://github.com/enzo2589/PortFolio",
    },
    {
        id: 2,
        title: "Brasserie Divinouz (PHP & Gestion de stock)",
        description: "Site web de brasserie avec back-office securise et gestion de stock",
        image: divinouze,
        tags: ["HTML", "CSS", "PHP", "MySQL", "Trello", "GitHub", "FileZilla"],
        fullDescription: "Ce projet realise en duo a consiste a concevoir et developper Divinouze, un site web complet pour une brasserie locale. Outre la partie vitrine (historique, services et guides de brassage), le coeur du projet repose sur un backend PHP relie a une base de donnees. J'ai participe a la creation d'une page d'administration securisee permettant la gestion des produits et des stocks. Pour cadrer le projet, nous avons utilise Trello pour la planification, GitHub pour le versioning et FileZilla pour le deploiement.",
        details: [
            "Site vitrine et back-office de gestion",
            "Connexion administrateur securisee avec sessions",
            "Gestion des produits et des stocks en base de donnees",
            "Organisation de projet en duo avec Trello et GitHub",
            "Deploiement FTP sur serveur de production avec FileZilla",
            "Tests de bon fonctionnement et verification du responsive"
        ],
        competencyJustifications: [
            {
                skill: "1.1 Gerer le patrimoine informatique",
                evidence: "Mise en place et verification de niveaux d'habilitation via une page de connexion administrateur. L'acces a la gestion des produits et des stocks est restreint, ce qui protege les donnees sensibles de l'application."
            },
            {
                skill: "1.4 Travailler en mode projet",
                evidence: "Analyse des objectifs en duo, decoupage des taches et suivi continu de l'avancement via Trello. Collaboration sur le code avec GitHub et preparation de la presentation finale sur Canva."
            },
            {
                skill: "1.5 Mettre a disposition des utilisateurs un service informatique",
                evidence: "Deploiement de l'application vers l'environnement de production avec FileZilla (FTP), puis realisation de tests pour valider la disponibilite du site et l'operationnalite de la page d'administration."
            },
            {
                skill: "1.6 Organiser son developpement professionnel",
                evidence: "Renforcement de l'environnement d'apprentissage personnel par des recherches ciblees sur les sessions PHP, la securisation des mots de passe et les bonnes pratiques de deploiement FTP."
            }
        ],
        proofImages: [
            {
                src: divinouzePreuvePresentation,
                alt: "Presentation du projet Divinouz"
            },
            {
                src: divinouzePreuveAuth,
                alt: "Code PHP de controle d'authentification et des roles"
            }
        ],
        documentationLinks: [
            "https://wiki.filezilla-project.org/Tutorial",
            "https://www.php.net/manual/fr/features.sessions.php",
            "https://www.php.net/manual/fr/function.password-hash.php"
        ],
        link: "https://github.com/enzo2589/divinouze",
    },
    {
        id: 4,
        title: "Projet base de données",
        description: "création d'un site de voyage avec une base de données",
        image: placeholderImage,
        tags: ["HTML", "CSS", "PHP", "SQL", "looping"],
        fullDescription: "création d'un site de voyage en binôme. Le projet inclut la gestion d'une base de données pour stocker les destinations, les offres et les réservations.",
        details: [
            "Site de voyage responsive",
            "Base de données SQL",
            "Backend PHP",
            "Système de réservation",
            "Admin panel pour la gestion"
        ],
        link: "",
    },
    {
        id: 5,
        title: "nuit de l'info 2024",
        description: "création d'un site mettant en relation l'océan et l'homme",
        image: nuitinfo,
        tags: ["HTML", "CSS", "JavaScript"],
        fullDescription: "Projet créé lors de la Nuit de l'Info 2024. L'objectif était de créer un site mettant en avant la relation entre l'océan et l'humanité, sensibilisant aux enjeux écologiques marins.",
        details: [
            "Thème océan et écologie",
            "Design innovant et engageant",
            "Navigation interactive",
            "Informations pédagogiques",
            "Responsive design"
        ],
        link: "",
    },
    {
        id: 6,
        title: "Todolist",
        description: "création d'une todolist en php",
        image: todolist,
        tags: ["PHP"],
        fullDescription: "Projet basique de création d'une liste de tâches (TODO list) en PHP. Ce projet m'a permis d'apprendre les concepts de base du développement back-end avec PHP et les bases de données.",
        details: [
            "Créer des tâches",
            "Modifier les tâches",
            "Supprimer les tâches",
            "Marquer comme complétées",
            "Interface simple et intuitive"
        ],
        link: "",   
    },
    {
        id: 7,
        title: "Workshop 2025",
        description: "Atelier pratique 2025 avec les dernières technologies",
        image: placeholderImage,
        tags: ["esp 8266", "raspberry pi", "arduino"],
        fullDescription: "Workshop 2025 : l'objectif etait de recreer des gadjets de james bond nous avons donc creer une boite a cigare dans laquele chaque cigare avait une fonctionalité différente comme un cigare detecteur de mouvement a l'aide d'un arduino , un cigare camera avec un raspberry pi, ou encore un maroudeur avec un esp .",
        details: [
            "Apprentissage des nouveautés 2025",
            "Pratique sur les frameworks modernes",
            "Exercices hands-on",
            "Collaboration en groupe",
            "Feedback et mentoring"
        ],
        link: "",   
    },
    {
        id: 8,
        title: "Workshop 2024",
        description: "Atelier pratique 2024 couvrant les bases du développement",
        image: placeholderImage,
        tags: ["arduino"],
        fullDescription: "Workshop 2024 : Le but etait de creer une machine de rube goldberg dans une boite en carton a l'aide d'arduino et de capteurs divers. Un atelier pratique pour maîtriser les bases du développement web et des concepts fondamentaux. ",
        details: [
            "Fundamentals du développement web",
            "Pratique sur des projets réels",
            "Méthodologies de développement",
            "Travail en équipe",
            "Retours et améliorations continus"
        ],
        link: "",   
    },
];

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};





