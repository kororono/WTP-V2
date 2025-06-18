import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Educate from './pages/Educate';
import SubmitIssue from './pages/SubmitIssue';
import Profile from './pages/Profile';
import LegalAction from './pages/LegalAction';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        {/* Navbar appears on all pages */}
        <Navbar  /> 
        {/* Main content area with proper spacing */}
        <main 
          style={{ 
            paddingTop: '0px',  // Default for mobile
            paddingBottom: '80px'  // Space for mobile bottom nav
          }}
          className="md:pt-32 md:pb-0"  // Desktop spacing via Tailwind
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/educate" element={<Educate />} />
            <Route path="/submit" element={<SubmitIssue />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/legal" element={<LegalAction />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;