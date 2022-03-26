import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './stylesheets/App.css';
import './stylesheets/About.css';
import AboutMe from './components/about_me';
import Projects from './components/projects';
import Skills from './components/skills';
import Resume from './components/resume';
import Contact from './components/contact';
import Background from './components/background';

function App() {
  return (
    <div className="outer-container">
        <Routes>
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
