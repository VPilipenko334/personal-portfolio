import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './stylesheets/App.css';
import AboutMe from './components/about_me';

function App() {
  return (
    <div className="outer-container">
      <h1>Hi this is a test</h1>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
        </Routes>
    </div>
  );
}

export default App;
