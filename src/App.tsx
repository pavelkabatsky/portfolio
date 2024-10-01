import './App.css';
import { About } from './layout/about/About';
import { Contacts } from './layout/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Projects } from './layout/projects/Projects';
import { Skills } from './layout/skills/Skills';
import { Testimonials } from './layout/testimonials/Testimonials';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Testimonials/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;