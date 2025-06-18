import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, User, Book, Plus, Gavel } from 'lucide-react';

function Navbar() {
  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/vote', label: 'Vote', icon: Gavel },
    { path: '/educate', label: 'Learn', icon: Book },
    { path: '/submit', label: 'Submit Issue', icon: Plus },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR - Use CSS media query instead of Tailwind */}
      <div 
        style={{
          display: 'none', // Hidden by default
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        className="desktop-navbar"
      >
        {/* Desktop Branding Section */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '12px 24px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '2px 4px',
                borderRadius: '4px',
                fontSize: '50px',
                fontWeight: 'bold'
              }}>
                🇰🇪
              </div>
              <h1 style={{
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: 0
              }}>
                WeThePeopleKE
              </h1>
            </div>
            <NavLink 
              to="/login" 
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Login
            </NavLink>
          </div>
        </div>

        {/* Desktop Navigation Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '8px 24px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px'
          }}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-green-600 bg-green-50 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR - Use CSS media query instead of Tailwind */}
      <div 
        style={{ display: 'none' }}
        className="mobile-navbar"
      >
        {/* Mobile Header */}
        <header style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '12px 16px',
          textAlign: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <span style={{ fontSize: '30px' }}>🇰🇪</span>
            <h1 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              margin: 0
            }}>
              WeThePeopleKE
            </h1>
          </div>
        </header>

        {/* Mobile Bottom Navigation */}
        <nav style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb',
          padding: '8px',
          zIndex: 50
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs p-2 transition-colors ${
                    isActive ? 'text-green-600 font-semibold' : 'text-gray-600'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;