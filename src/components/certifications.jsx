
import "../style/Certifications.css";
import placeholderImage from '../img/image2.jpeg';
import { Link } from 'react-router-dom';

const certifications = [
	{
		id: 1,
		title: "React Developer",
		description: "Certification officielle React pour développeurs front-end.",
		image: placeholderImage,
		tags: ["React", "Front-end", "JavaScript"],
	},
	{
		id: 2,
		title: "Node.js Expert",
		description: "Certification avancée Node.js pour le back-end.",
		image: placeholderImage,
		tags: ["Node.js", "Back-end", "API"],
	},
];

export default function Certifications() {
	return (
		<section className="certifications-section">
			<h2 className="certifications-title">Mes Certifications</h2>
			<div className="certifications-grid">
				{certifications.map((certif) => (
					<Link to={`/certification/${certif.id}`} key={certif.id} className="certification-card">
						<div className="certification-image">
							<img src={certif.image} alt={certif.title} />
							<div className="certification-overlay">
								<span>Voir plus</span>
							</div>
						</div>
						<div className="certification-info">
							<h3>{certif.title}</h3>
							<p>{certif.description}</p>
							<div className="certification-tags">
								{certif.tags.map((tag, idx) => (
									<span key={idx} className="certification-tag">{tag}</span>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
