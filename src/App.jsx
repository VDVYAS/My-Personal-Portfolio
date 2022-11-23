
import './App.css';
import Header from './component/Header/Header'
import { Skills } from './component/Skills/Skills';
import {About}  from './component/About/About'
import {Contact} from './component/Contact/Contact'
import {Footer} from './component/Footer/Footer'
function App() {

  return (
    <div className='App' >
    <Header/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
