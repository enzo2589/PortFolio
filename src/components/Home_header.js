import '../style/Home_header.css';
import { Link } from 'react-router-dom';

const Home_header = () => {
  return (
    <div className="home-header">
      <Link to="/" className="home-title-link">
        <h1 className="home-title">Mon PortFolio</h1>
      </Link>
    </div>
  );
};

export default Home_header;
