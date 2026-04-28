import Certifications from '../components/certifications';
import Header from '../components/Header';
import PresentationSection from '../components/PresentationSection';
import ProjectDetail from './ProjectDetail';
import Contact from './Contact';
import Skills from './Skills';
import VeilleTechno from './VeilleTechno';
import ProjectsPage from './ProjectsPage';
import StagesPage from './StagesPage';
import StageDetail from './StageDetail';
import '../style/index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <header className="back-header">
                <Header />
            </header>

            <Routes>
                <Route path="/" element={
                    <main>
                        <PresentationSection />
                        <Certifications />
                    </main>
                } />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/projet/:id" element={<ProjectDetail />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/stages" element={<StagesPage />} />
                <Route path="/stages/:id" element={<StageDetail />} />
                <Route path="/veille-techno" element={<VeilleTechno />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </>
    );
}
export default App; 