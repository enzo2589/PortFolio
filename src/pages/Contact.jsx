import { Link } from 'react-router-dom';
import '../style/Contact.css';

export default function Contact() {
    return (
        <main className="contact-container">
            <div className="contact-header">
                <Link to="/" className="back-button">← Retour</Link>
            </div>

            <div className="contact-content">
                <h1 className="contact-title">Contactez-moi</h1>
                <p className="contact-subtitle">
                    N'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.
                </p>

                <div className="contact-grid">
                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/enzo-deyrich/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card linkedin-card"
                    >
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.429-.663 1.196-1.608 2.905-1.608 2.122 0 3.714 1.383 3.714 4.357v5.604zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.959-1.715 1.188 0 1.914.76 1.938 1.715 0 .953-.75 1.715-1.982 1.715zm1.946 11.597H3.392V9.724h3.891v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                            </svg>
                        </div>
                        <h3>LinkedIn</h3>
                        <p>Connectez-moi sur LinkedIn</p>
                        <span className="contact-link-arrow">Visiter →</span>
                    </a>

                    {/* GitHub */}
                    <a 
                        href="https://github.com/enzo2589" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card github-card"
                    >
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <h3>GitHub</h3>
                        <p>Découvrez mes projets</p>
                        <span className="contact-link-arrow">Visiter →</span>
                    </a>

                    {/* CV */}
                    <a 
                        href="/cv.pdf" 
                        download
                        className="contact-card cv-card"
                    >
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="11" x2="12" y2="17"></line>
                                <line x1="9" y1="14" x2="15" y2="14"></line>
                            </svg>
                        </div>
                        <h3>Mon CV</h3>
                        <p>Téléchargez mon CV complet</p>
                        <span className="contact-link-arrow">Télécharger →</span>
                    </a>
                </div>

                {/* Email Section */}
                <section className="email-section">
                    <h2>Ou envoyez-moi un email</h2>
                    <a href="mailto:enzo.deyrich@ecoles-epsi.net" className="email-link">
                        enzo.deyrich@ecoles-epsi.net
                    </a>
                </section>

            </div>
        </main>
    );
}
