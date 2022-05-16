import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/About';


function App() {
  return (
    <div className="bg-indigo-600 w-full h-screen">
      <Navbar />
      <Header />
      <About title={"About Me"} />
    </div>
  );
}

export default App;

