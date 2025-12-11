import placeholderImage from '../img/image1.jpeg';
import imgportfolio from '../img/portfolio.png';
import imgstage from '../img/image3.jpeg';
import divinouze from '../img/brasserie_logo.png';
import nuitinfo from '../img/nuitinfos.png';
import todolist from '../img/todolist.png';

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
        title: "Divinouze",
        description: "projet de brasserie Divinouze",
        image: divinouze,
        tags: ["HTML", "CSS", "PHP"],
        fullDescription: "Divinouze est un site web pour une brasserie locale. Le projet implique la création d'un site présentant les produits, l'historique et les services de la brasserie, ou encore comment creer ses propres bières.",
        details: [
            "Site vitrine pour brasserie",
            "Gestion des produits",
            "Responsive design",
            "Backend en PHP"
        ],
        link: "https://github.com/enzo2589/divinouze",
    },
    {
        id: 3,
        title: "Stage",
        description: "participation au développement de my-uuu.fr",
        image: imgstage,
        tags: ["React-js", "next-js", "Java", "Spring Boot", "github", "agile"],
        fullDescription: "Lors de mon stage, j'ai participé au développement de la plateforme my-uuu.fr. Ce projet m'a permis de travailler en équipe avec la méthode agile, d'apprendre Next.js, Spring Boot et de pratiquer les méthodologies agiles.",
        details: [
            "Plateforme de gestion d'utilisateurs",
            "Stack moderne : React-js / Next-js",
            "Backend Java avec Spring Boot",
            "Méthodologie Agile/Scrum",
            "Collaboration en équipe avec GitHub"
        ],
        link: "https://my-uuu.fr",
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





