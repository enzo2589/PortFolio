import { Link } from 'react-router-dom';
import '../style/VeilleTechno.css';

export default function VeilleTechno() {
    const resources = [
        {
            type: 'article',
            title: 'GitHub x Accenture : impact de Copilot en entreprise',
            description:
                "Etude sur l'impact de Copilot : adoption, satisfaction et gains mesurables sur le flux de developpement.",
            url: 'https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture',
            date: '2024'
        },
        {
            type: 'article',
            title: 'Stack Overflow Developer Survey 2024 (section IA)',
            description:
                "Donnees communautaires sur l'adoption des assistants IA, la confiance dans les reponses et la perception du risque de remplacement.",
            url: 'https://survey.stackoverflow.co/2024/ai/',
            date: '2024'
        },
        {
            type: 'article',
            title: 'McKinsey - Unleashing developer productivity with generative AI',
            description:
                'Analyse des gains de productivite selon les types de taches (generation, documentation, refactoring) et des limites sur les sujets complexes.',
            url: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/unleashing-developer-productivity-with-generative-ai',
            date: '2023'
        },
        {
            type: 'article',
            title: 'Google Cloud DORA 2024 et IA en developpement',
            description:
                "Recherche DORA sur l'usage de l'IA dans le travail des equipes software et ses effets sur la productivite individuelle.",
            url: 'https://cloud.google.com/blog/products/ai-machine-learning/sharing-new-dora-research-for-gen-ai-in-software-development',
            date: '2024'
        },
        {
            type: 'video',
            title: 'Google I/O - Accelerate your development with the Gemini API',
            description:
                'Presentation video officielle autour des usages Gemini pour accelerer les workflows de developpement.',
            url: 'https://io.google/2025/explore/pa-keynote-3',
            date: '2025'
        },
        {
            type: 'video',
            title: 'Gemini Code Assist for individuals',
            description:
                'Ressource Google Developers sur Gemini Code Assist (IDE, generation de code, assistance contextuelle).',
            url: 'https://developers.google.com/gemini-code-assist',
            date: '2025'
        }
    ];

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
                        Sujet : impact de l&apos;IA sur le metier de developpeur (assistance, limites et evolution du role)
                    </p>
                </section>

                <section className="veille-techno-themes">
                    <div className="theme-section">
                        <div className="veille-summary-grid">
                            <article className="summary-card">
                                <h3>Theme</h3>
                                <p>Impact de l&apos;IA generative sur le developpement logiciel.</p>
                            </article>
                            <article className="summary-card">
                                <h3>Problematique</h3>
                                <p>L&apos;IA remplace-t-elle le developpeur ou augmente-t-elle sa productivite ?</p>
                            </article>
                            <article className="summary-card">
                                <h3>Objectif</h3>
                                <p>Comparer les gains concrets, les limites et les risques sur le terrain.</p>
                            </article>
                            <article className="summary-card">
                                <h3>Methode</h3>
                                <p>Analyse croisee d&apos;etudes officielles, retours de pratique et demos outils.</p>
                            </article>
                        </div>

                        <h2 className="theme-title">Contexte</h2>
                        <p className="theme-description">
                            Les assistants IA comme GitHub Copilot ou Gemini changent deja le
                            quotidien des developpeurs. Ils accelerent la production de code,
                            aident a documenter, suggerent des correctifs et fluidifient
                            certaines etapes de developpement. La question centrale n&apos;est pas
                            seulement &quot;peuvent-ils coder ?&quot; mais surtout &quot;dans quelle mesure
                            transforment-ils le role du developpeur ?&quot;.
                        </p>

                        <h2 className="theme-title">Analyse</h2>
                        <p className="theme-description">
                            <strong>1) Des gains de productivite reels :</strong> plusieurs
                            etudes (GitHub, McKinsey, DORA) montrent un gain de vitesse sur les
                            taches repetitives et sur la documentation.
                        </p>
                        <p className="theme-description">
                            <strong>2) Pas d&apos;autonomie complete :</strong> l&apos;IA reste
                            limitee sur la comprehension fine du contexte metier, les choix
                            d&apos;architecture, la securite et la responsabilite finale du code.
                        </p>
                        <p className="theme-description">
                            <strong>3) Evolution du metier :</strong> le developpeur devient
                            davantage un pilote de systeme : cadrage, revue critique des sorties
                            IA, validation, tests et priorisation.
                        </p>
                        <p className="theme-description">
                            <strong>4) Risques a maitriser :</strong> fuite de donnees, dette
                            technique, biais et confiance excessive. Ces outils demandent un
                            cadre d&apos;usage strict (revues, tests, gouvernance).
                        </p>

                        <h2 className="theme-title">Position personnelle</h2>
                        <p className="theme-description">
                            A court et moyen terme, ces outils ne remplacent pas les
                            developpeurs. Ils deviennent des assistants puissants qui augmentent
                            la vitesse d&apos;execution, a condition d&apos;etre utilises avec rigueur.
                            La valeur humaine reste decisive pour comprendre le besoin, garantir
                            la qualite et prendre les decisions techniques.
                        </p>

                        <h2 className="theme-title">Sources et traces</h2>
                        <p className="theme-description">
                            Les ressources ci-dessous sont classees par type (article/video) et
                            date pour faciliter la lecture et la justification de la veille.
                        </p>

                        <div className="items-list">
                            {resources.map((item, index) => (
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
                                    <span className="item-cta">
                                        {item.type === 'video' ? 'Voir la video' : 'Lire l\'article'}
                                    </span>
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