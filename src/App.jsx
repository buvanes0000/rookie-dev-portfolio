import './App.css';
import Navbar from './components/Navbar';  // Ensure correct import path for Navbar
import Home from './pages/Home';           // Ensure correct import path for Home
import Projects from './pages/Projects';   // Ensure correct import path for Projects
import Contact from './pages/Contact';     // Ensure correct import path for Contact
import About from './pages/About';         // Ensure correct import path for About
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { LoadingProvider, useLoading } from './contexts/LoadingContext.jsx';
import Loading from './components/Loading';

const AppContent = () => {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Adjust this timeout as needed
    };

    handleRouteChange();
  }, [location, setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <LoadingProvider>
    <Router>
      <AppContent />
    </Router>
  </LoadingProvider>
);

export default App;
