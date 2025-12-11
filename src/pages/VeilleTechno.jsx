import { Link } from 'react-router-dom';
import '../style/VeilleTechno.css';

export default function VeilleTechno() {
    const veilleTechnoTheme = {
        theme: "IA & developpement augmenté",
        description: "Analyse de l'impact de l'Intelligence Artificielle générative sur le métier de développeur : outils, productivité et enjeux éthiques.",
        items: [
            {
                type: "article",
                title: "GitHub Octoverse : L'état des lieux",
                description: "Rapport annuel de référence montrant que 92% des développeurs utilisent déjà des outils d'IA. Une adoption massive qui transforme le standard de l'industrie.",
                url: "https://octoverse.github.com/",
                date: "Nov 2024",
            },
            {
                type: "article",
                title: "Devin : Le premier ingénieur IA",
                description: "Annonce de Cognition Labs sur 'Devin', la première IA capable de gérer un projet de A à Z de manière autonome (codage, débogage, déploiement).",
                url: "https://www.cognition-labs.com/blog",
                date: "Mar 2024",
            },
            {
                type: "lien",
                title: "Cursor Editor",
                description: "Découverte de l'IDE 'Cursor', un fork de VS Code conçu pour l'IA ('AI Native'). Il permet de refactoriser et générer du code bien plus vite que Copilot.",
                url: "https://cursor.sh/",
                date: "En cours",
            },
            {
                type: "video",
                title: "La fin du métier de développeur ?",
                description: "Débat sur la chaîne Underscore_ : analyse des risques pour l'emploi et de l'évolution vers un rôle d'architecte/superviseur d'IA.",
                url: "https://www.youtube.com/@Underscore_",
                date: "Fév 2024",
            },
            {
                type: "article",
                title: "Samsung bannit ChatGPT (Sécurité)",
                description: "Étude de cas sur les risques de fuite de données confidentielles lorsque le code propriétaire est envoyé aux serveurs d'OpenAI.",
                url: "https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak",
                date: "Mai 2023",
            },
            {
                type: "lien",
                title: "V0.dev (Génération UI)",
                description: "Outil de Vercel permettant de générer des interfaces React/Tailwind complètes à partir de simples prompts textuels.",
                url: "https://v0.dev/",
                date: "En cours",
            },
            {
                type: "video",
                title: "Coder avec l'IA (Benjamin Code)",
                description: "Démonstration pratique des capacités et des limites des assistants IA actuels. Test de productivité en conditions réelles.",
                url: "https://www.youtube.com/@BenjaminCode",
                date: "Jan 2024",
            },
            {
                type: "article",
                title: "L'enquête Stack Overflow 2024",
                description: "Les outils d'IA préférés des développeurs et leur sentiment (productivité vs peur du remplacement) analysés par la communauté.",
                url: "https://survey.stackoverflow.co/",
                date: "Mai 2024",
            },
        ],
    };

    const getItemIcon = (type) => {
        switch(type) {
            case 'article': return '📄';
            case 'video': return '🎥';
            case 'lien': return '🔗';
            default: return '📌';
        }
    };

    const getItemTypeLabel = (type) => {
        switch(type) {
            case 'article': return 'Article';
            case 'video': return 'Vidéo';
            case 'lien': return 'Outil';
            default: return 'Ressource';
        }
    };

    return (
        <main className="veille-techno-container">
            <div className="veille-techno-header">
                <Link to="/" className="back-button">← Retour</Link>
            </div>

            <div className="veille-techno-content">
                <section className="veille-techno-hero">
                    <h1 className="veille-techno-title">Ma Veille Technologique</h1>
                    <p className="veille-techno-subtitle">
                        Une exploration continue des technologies qui redéfinissent notre métier.
                    </p>
                </section>

                <section className="veille-techno-themes">
                    <div className="theme-section">
                        <div className="theme-header">
                            <span className="theme-icon">{veilleTechnoTheme.icon}</span>
                            <div>
                                <h2 className="theme-title">{veilleTechnoTheme.theme}</h2>
                                <p className="theme-description">{veilleTechnoTheme.description}</p>
                            </div>
                        </div>

                        <div className="items-list">
                            {veilleTechnoTheme.items.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="item-card"
                                >
                                    <div className="item-header">
                                        <span className="item-icon">{getItemIcon(item.type)}</span>
                                        <span className="item-type">{getItemTypeLabel(item.type)}</span>
                                        <span className="item-date">{item.date}</span>
                                    </div>
                                    <h3 className="item-title">{item.title}</h3>
                                    <p className="item-description">{item.description}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="veille-techno-footer">
                    <Link to="/" className="back-button">← Retour à l'accueil</Link>
                </div>
            </div>
        </main>
    );
}