import React from 'react'

function LegalAction() {
  return (
    <div className="page-container">
      <div className="main-content">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Legal Action Tracker
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600">
              This is a placeholder for the Legal Action Tracker. In the future,
              this page will show real-time updates on court cases or LSK actions
              filed in response to submitted issues.
            </p>
          </div>
        </div>
      </div>

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
  )
}

export default LegalAction