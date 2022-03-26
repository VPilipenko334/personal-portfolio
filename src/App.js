import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './stylesheets/App.css';
import './stylesheets/About.css';
import './stylesheets/Projects.css';
import './stylesheets/HomePage.css';
import './stylesheets/Skills.css';
import './stylesheets/Resume.css';
import './stylesheets/Contact.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="outer-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
