import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import './App.css';

import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

function App() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navigation-menu">
          <ul>
            <li>
              <Link
                to="/full-stack-development"
                className={activeLink === 'full-stack' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleLinkClick('full-stack')}
              >
                Full Stack Development
              </Link>
            </li>
            <li>
              <Link
                to="/data-science"
                className={activeLink === 'data-science' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleLinkClick('data-science')}
              >
                Data Science
              </Link>
            </li>
            <li>
              <Link
                to="/cyber-security"
                className={activeLink === 'cyber-security' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleLinkClick('cyber-security')}
              >
                Cyber Security
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className={activeLink === 'career' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleLinkClick('career')}
              >
                Career
              </Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route  className="hover-button" path="/" element={<FullStackDevelopment />} />
          <Route  className="hover-button" path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route className="hover-button" path="/data-science" element={<DataScience />} />
          <Route className="hover-button" path="/cyber-security" element={<CyberSecurity />} />
          <Route className="hover-button" path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
