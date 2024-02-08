
import './index.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import Home2 from './components/Home2.jsx';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';



function App() {
return (
  <div>

    <NavBar/>
    <Home/>
   <SocialLinks/>
   <About/>
   <Portfolio/>
   <Experience/>
   <Contact/>
   
  </div>
   )
}

export default App
