import placeholderImage from '../img/image1.jpeg';
import imgportfolio from '../img/portfolio.png';
import divinouze from '../img/brasserie_logo.png';
import nuitinfo from '../img/nuitinfos.png';
import todolist from '../img/todolist.png';
import divinouzePreuvePresentation from '../img/divinouze-preuve-presentation.png';
import divinouzePreuveAuth from '../img/divinouze-preuve-auth.png';
import gestionBddCircuitsInterface from '../img/gestion-bdd-circuits-interface.png';
import gestionBddCircuitsSchema from '../img/gestion-bdd-circuits-schema.png';
import workshop2024Preuve from '../img/workshop-2024-preuve.png';
import todolistPhpDbConfig from '../img/todolist-php-db-config.png';
import todolistPhpPhpmyadmin from '../img/todolist-php-phpmyadmin.png';
import workshop2025Preuve from '../img/workshop-2025-preuve.png';
import supanoteUml from '../img/supanote-uml.png';
import supanoteMobileList from '../img/supanote-mobile-list.png';
import supanoteMobileAdd from '../img/supanote-mobile-add.png';
import supanoteSupabase from '../img/supanote-supabase.png';

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
        competencyTables: [
            {
                label: "Tableau competences E4",
                url: "/tableau-competences-epreuve-e4.pdf"
            },
            {
                label: "Tableau competences E5",
                url: "/tableau-synthese-competences-e5-annexe8.pdf"
            }
        ],
        link: "https://github.com/enzo2589/divinouze",
    },
    {
        id: 4,
        title: "Gestion BDD Circuits Touristiques",
        description: "Site responsive de reservation touristique avec backend PHP et base SQL",
        image: gestionBddCircuitsInterface,
        tags: ["HTML", "CSS", "PHP", "SQL", "PDO", "Git"],
        fullDescription: "Ce projet, realise en binome, a consiste en la creation complete d'un site web responsive dedie a la reservation de circuits touristiques. Le coeur du developpement reposait sur la conception et l'exploitation d'une base de donnees SQL robuste pour gerer les destinations, les offres commerciales et les reservations clients. Le backend etait en PHP. Ce projet m'a permis d'allier logique de gestion des donnees et interface utilisateur fluide.",
        details: [
            "Conception d'une base SQL pour destinations, offres et reservations",
            "Developpement d'un backend PHP pour la logique metier",
            "Interface responsive pour l'utilisateur final",
            "Panneau d'administration avec acces securise",
            "Travail en binome avec suivi de version"
        ],
        competencyJustifications: [
            {
                skill: "1.1 Gerer le patrimoine informatique",
                evidence: "Mise en place des niveaux d'habilitation dans le code PHP et la base SQL afin de securiser l'acces au panneau d'administration."
            },
            {
                skill: "1.4 Travailler en mode projet",
                evidence: "Organisation du travail en binome avec planification des taches et utilisation d'un systeme de gestion de versions pour collaborer et suivre l'avancement."
            },
            {
                skill: "1.6 Organiser son developpement professionnel",
                evidence: "Auto-formation sur les points techniques backend PHP/SQL via documentations et tutoriels pour resoudre les difficultes rencontrees."
            }
        ],
        proofImages: [
            {
                src: gestionBddCircuitsInterface,
                alt: "Interface de gestion des lieux a visiter"
            },
            {
                src: gestionBddCircuitsSchema,
                alt: "Schema de base de donnees des circuits touristiques"
            }
        ],
        documentationLinks: [
            "https://www.php.net/manual/fr/pdo.connections.php",
            "https://www.php.net/manual/fr/reserved.variables.session.php",
            "https://www.php.net/manual/fr/pdo.prepared-statements.php"
        ],
        competencyTables: [
            {
                label: "Tableau competences E4",
                url: "/tableau-competences-epreuve-e4.pdf"
            },
            {
                label: "Tableau competences E5",
                url: "/tableau-synthese-competences-e5-annexe8.pdf"
            }
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
        title: "To-Do List PHP (Environnement Local)",
        description: "Application de gestion de taches CRUD en PHP/MySQL sur WAMP",
        image: todolistPhpDbConfig,
        tags: ["PHP", "MySQL", "WAMP", "CRUD", "phpMyAdmin"],
        fullDescription: "Ce projet individuel a constitue ma premiere veritable immersion dans le developpement back-end avec PHP. L'objectif etait de concevoir une application de gestion de taches simple et intuitive. Deployee en environnement local avec WAMP, l'application met en pratique les operations CRUD : creation, modification, suppression et gestion des taches terminees.",
        details: [
            "Configuration de l'environnement local WAMP",
            "Connexion PHP/MySQL pour la persistance des taches",
            "Implementation complete des operations CRUD",
            "Gestion de la base de donnees avec phpMyAdmin",
            "Interface simple orientee productivite"
        ],
        competencyJustifications: [
            {
                skill: "1.1 Gerer le patrimoine informatique",
                evidence: "Configuration et administration d'un environnement de developpement local avec WAMP, puis conception de la structure de base MySQL pour gerer les donnees actives (ajout, mise a jour et suppression des taches)."
            }
        ],
        proofImages: [
            {
                src: todolistPhpDbConfig,
                alt: "Configuration de la connexion a la base dans db.php"
            },
            {
                src: todolistPhpPhpmyadmin,
                alt: "Gestion de la base To-Do List dans phpMyAdmin"
            }
        ],
        documentationLinks: [
            "https://github.com/enzo2589/todolist"
        ],
        competencyTables: [
            {
                label: "Tableau competences E4",
                url: "/tableau-competences-epreuve-e4.pdf"
            },
            {
                label: "Tableau competences E5",
                url: "/tableau-synthese-competences-e5-annexe8.pdf"
            }
        ],
        link: "https://github.com/enzo2589/todolist",
    },
    {
        id: 7,
        title: "Workshop 2025 - Boite a cigares James Bond (IoT)",
        description: "Projet IoT equipe avec Arduino, Raspberry Pi et ESP8266",
        image: workshop2025Preuve,
        tags: ["IoT", "Arduino", "Raspberry Pi", "ESP8266", "Prototypage"],
        fullDescription: "Dans le cadre du Workshop 2025, notre groupe a releve un defi technique et creatif : concevoir des gadgets connectes inspires de l'univers James Bond. Nous avons fabrique une boite a cigares trompe-l'oeil ou chaque cigare integrait une fonction secrete (detecteur de mouvement sur Arduino, mini-camera sur Raspberry Pi, outil reseau via ESP8266). Ce format hands-on nous a permis d'iterer rapidement avec feedback et mentoring continu.",
        details: [
            "Prototype IoT thematique et fonctionnel",
            "Integration de composants heterogenes en temps contraint",
            "Repartition des roles selon l'expertise materielle/logicielle",
            "Cycles de tests et ajustements rapides",
            "Travail collectif accompagne par mentoring"
        ],
        competencyJustifications: [
            {
                skill: "1.4 Travailler en mode projet",
                evidence: "Participation active a l'analyse des objectifs et a l'organisation du projet. Planification precise des taches face a la diversite des composants (Arduino, Raspberry Pi, ESP8266), suivi des indicateurs de progression et reajustement de la conception en temps reel."
            }
        ],
        proofImages: [
            {
                src: workshop2025Preuve,
                alt: "Equipe projet Workshop 2025"
            }
        ],
        competencyTables: [
            {
                label: "Tableau competences E4",
                url: "/tableau-competences-epreuve-e4.pdf"
            },
            {
                label: "Tableau competences E5",
                url: "/tableau-synthese-competences-e5-annexe8.pdf"
            }
        ],
        link: "",   
    },
    {
        id: 8,
        title: "Workshop 2024 - Machine de Rube Goldberg & IoT",
        description: "Projet d'equipe Arduino/capteurs avec integration web iterative",
        image: workshop2024Preuve,
        tags: ["Arduino", "Capteurs", "IoT", "HTML", "CSS", "JavaScript"],
        fullDescription: "Dans le cadre du Workshop 2024, j'ai participe a la conception et a la realisation d'une machine de Rube Goldberg interactive, confinee dans une boite en carton. Ce projet melait electronique et programmation avec des microcontroleurs Arduino et differents capteurs. L'objectif etait de maitriser l'integration materielle tout en consolidant les bases du developpement web en connectant les capteurs a une interface. Realise en equipe, le projet s'est appuye sur une demarche iterative avec entraide, retours continus et amelioration progressive.",
        details: [
            "Conception et integration d'une machine de Rube Goldberg",
            "Utilisation d'Arduino et de capteurs en environnement reel",
            "Connexion entre partie materielle et interface web",
            "Travail d'equipe avec organisation iterative",
            "Amelioration continue basee sur les retours"
        ],
        competencyJustifications: [
            {
                skill: "1.4 Travailler en mode projet",
                evidence: "Participation active a l'analyse des objectifs, planification des activites personnelles et coordination entre la partie web et la partie materielle (Arduino). Suivi regulier de l'avancement pour analyser les ecarts et ameliorer la solution."
            }
        ],
        proofImages: [
            {
                src: workshop2024Preuve,
                alt: "Mise en oeuvre technique pendant le Workshop 2024"
            }
        ],
        competencyTables: [
            {
                label: "Tableau competences E4",
                url: "/tableau-competences-epreuve-e4.pdf"
            },
            {
                label: "Tableau competences E5",
                url: "/tableau-synthese-competences-e5-annexe8.pdf"
            }
        ],
        link: "",   
    },
    {
        id: 9,
        title: "Application Mobile Supanote (Flutter)",
        description: "Application mobile To-Do avec comptes utilisateurs et priorites",
        image: supanoteMobileList,
        tags: ["Flutter", "Dart", "Supabase", "GitHub", "Mobile"],
        fullDescription: "Dans le cadre d'une epreuve du BTS SIO, j'ai concu et developpe en totale autonomie Supanote, une application mobile de prise de notes type To-Do list. Developpee avec Flutter, elle integre la creation de comptes utilisateurs et la gestion des niveaux d'importance des taches. Le code source a ete heberge et versionne sur GitHub pour garantir un suivi rigoureux du developpement.",
        details: [
            "Developpement mobile cross-platform avec Flutter",
            "Comptes utilisateurs et gestion des droits d'acces",
            "Gestion des priorites de taches dans l'interface",
            "Persistance des donnees avec Supabase",
            "Tests sur emulateur puis generation de l'application"
        ],
        competencyJustifications: [
            {
                skill: "1.1 Gerer le patrimoine informatique",
                evidence: "Suivi, sauvegarde et evolution du code avec Git/GitHub. Mise en place de niveaux d'habilitation pour securiser l'acces aux notes utilisateur, avec stockage en base via Supabase."
            },
            {
                skill: "1.5 Mettre a disposition des utilisateurs un service informatique",
                evidence: "Realisation de tests d'integration et d'acceptation sur emulateurs (inscription, ajout de note, changement de priorite), puis generation de l'application pour une installation sur smartphone."
            }
        ],
        proofImages: [
            {
                src: supanoteMobileList,
                alt: "Ecran principal de Supanote"
            },
            {
                src: supanoteMobileAdd,
                alt: "Ajout d'une tache dans Supanote"
            },
            {
                src: supanoteSupabase,
                alt: "Base de donnees Supabase de l'application"
            },
            {
                src: supanoteUml,
                alt: "Schema de donnees Supanote"
            }
        ],
        documentationLinks: [
            "https://github.com/enzo2589/App-mobile-flutter",
            "https://docs.flutter.dev/get-started/install",
            "https://docs.flutter.dev/ui/widgets",
            "https://supabase.com/docs"
        ],
        competencyTables: [
            {
                label: "Tableau competences E4",
                url: "/tableau-competences-epreuve-e4.pdf"
            },
            {
                label: "Tableau competences E5",
                url: "/tableau-synthese-competences-e5-annexe8.pdf"
            }
        ],
        link: "https://github.com/enzo2589/App-mobile-flutter",
    },
];

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};





