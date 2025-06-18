import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <div className="main-content" style={{ 
        minHeight: 'calc(100vh - 80px)',  // Account for mobile bottom nav
        backgroundColor: '#f9fafb'
      }}>
        {/* Hero Section */}
        <section style={{
          backgroundColor: 'white',
          padding: '48px 24px',
          textAlign: 'center',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}>
              WeThePeopleKE Civic Platform
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              fontStyle: 'italic',
              margin: 0
            }}>
              "When the people stand together, no power can silence them."
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{
          padding: '48px 24px',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              How It Works
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px'
                }}>
                  1. Get Verified
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Verify your Kenyan citizenship using your National ID and Phone Number.
                </p>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px'
                }}>
                  2. Vote on Issues
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Review and vote on national issues, clause by clause.
                </p>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '12px'
                }}>
                  3. Make a Difference
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Your voice matters. Participate in shaping the future of Kenya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section style={{
          backgroundColor: '#f0fdf4',
          padding: '48px 24px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '24px'
            }}>
              Ready to Participate?
            </h2>
            <a 
              href="/login" 
              style={{
                display: 'inline-block',
                backgroundColor: '#10b981',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
            >
              Get Verified & Vote
            </a>
          </div>
        </section>
      </div>

      {/* Universal Footer */}
      <footer className="universal-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/legal">Legal Action</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/help">Help</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 WeThePeopleKE. All rights reserved.</p>
            <p>Empowering Kenyan voices for democratic participation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;