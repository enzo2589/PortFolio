import Header from '../components/Header';
import Homeheader from '../components/Home_header';
import MediaSlider from '../components/MediaSlider';
// import Projet from '../components/Projet';
import '../style/index.css';

function App() {
    const methodListe = () => {
    };

    const resultatMethode = methodListe();
    console.log(resultatMethode); 

    return (
        <div>
            <header className="back-header">
                <Header />
                <Homeheader />
            </header>
            <main>
                <MediaSlider />
                {/* <Projet /> */}
            </main>
        </div>
    );
}

export default App;