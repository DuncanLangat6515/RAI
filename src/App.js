import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Client/Navbar';
import Home from './components/Client/Home';
import About from './components/Client/About';
import WhoWeServe from './components/Client/WhoWeServe';
import Resources from './components/Client/Resources';
import Events from './components/Client/Events';
import OurTeam from './components/Client/OurTeam';
import Blog from './components/Client/Blog';
import Contact from './components/Client/Contact';
import Footer from './components/Client/Footer';
import CoursesPage from './components/Client/CoursesPage';
import Donate from './components/Donate';
import Gallery from './components/Client/Gallery';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Resources />} />
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/courses' element={<CoursesPage/>}/>
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
