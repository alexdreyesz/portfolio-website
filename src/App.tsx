import Header from './components/Header'
import Home from './components/sections/home/Home'
import About from './components/sections/about/About'
import Skills from './components/sections/skills/Skills'
import Career from './components/sections/career/Career'
import Projects from './components/sections/projects/Projects'
import Contact from './components/sections/contact/Contact'
import Footer from './components/Footer'
import CanvasBackground from "./components/common/background/CanvasBackground";


function App() {
  return (
    <div>
      <CanvasBackground/>
      <Header/>
      <main className="overflow-hidden">
        <Home/>
        <About/>
        <Career/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App