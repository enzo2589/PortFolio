import Certifications from '../components/certifications';
import Header from '../components/Header';
import Homeheader from '../components/Home_header';
import MediaSlider from '../components/MediaSlider';
import Projet from '../components/Projet';
import ProjectDetail from './ProjectDetail';
import Contact from './Contact';
import Skills from './Skills';
import SkillsSection from '../components/SkillsSection';
import VeilleTechno from './VeilleTechno';
import VeilleTechnoSection from '../components/VeilleTechnoSection';
import '../style/index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <header className="back-header">
                <Header />
                <Homeheader />
            </header>

            <Routes>
                <Route path="/" element={
                    <main>
                        <MediaSlider />
                        <Projet />
                        <VeilleTechnoSection />
                        <Certifications />
                        <SkillsSection />
                    </main>
                } />
                <Route path="/projet/:id" element={<ProjectDetail />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/veille-techno" element={<VeilleTechno />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </>
    );
}
export default App; 