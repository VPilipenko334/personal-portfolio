import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './stylesheets/App.css';
import AboutMe from './components/about_me';
import Projects from './components/projects';
import Skills from './components/skills';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <div className="outer-container">
      <h1>Hi this is a test</h1>
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
