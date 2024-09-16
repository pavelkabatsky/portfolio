import './App.css';
import { Contacts } from './layout/contacts/contacts';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Projects } from './layout/projects/Projects';
import { Skills } from './layout/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;