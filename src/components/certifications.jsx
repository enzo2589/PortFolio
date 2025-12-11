
import "../style/Certifications.css";
import placeholderImage from '../img/image1.jpeg';
import ebios from '../img/certif_EBIOS.png';
import { Link } from 'react-router-dom';


const certifications = [
	{
		id: 1,
		title: "Mook Ebios",
		description: "Certification officielle Mook Ebios Risk Manager.",
		image: ebios,
		tags: ["Risk Management", "Security"],
	},
	{
		id: 2,
		title: "Pix",
		description: "Certification Pix.",
		image: placeholderImage,
		tags: ["compétences numériques"],
	},
];

export default function Certifications() {
	return (
		<section className="certifications-section" id="certifications">
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
