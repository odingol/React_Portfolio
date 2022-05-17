import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="bg-indigo-600 w-full h-screen">
      <Navbar />
      <Header />
      <About title={"About Me"} />
      <Projects title={"My Projects"} />
    </div>
  );
}

export default App;

