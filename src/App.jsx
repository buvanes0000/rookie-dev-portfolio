import './App.css';
import Navbar from './components/Navbar';  // Ensure correct import path for Navbar
import Home from './pages/Home';           // Ensure correct import path for Home
import Projects from './pages/Projects';   // Ensure correct import path for Projects
import Contact from './pages/Contact';     // Ensure correct import path for Contact
import About from './pages/About';         // Ensure correct import path for About
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
