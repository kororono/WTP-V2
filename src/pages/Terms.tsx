import React from 'react'

function Terms() {
  return (
    <div className="page-container">
      <div className="main-content">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Terms &amp; Conditions
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              Welcome to WeThePeopleKE. By using this platform, you agree to
              comply with and be bound by the following terms and conditions.
            </p>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and using WeThePeopleKE, you acknowledge that you have
              read, understood, and agree to be bound by these terms and
              conditions.
            </p>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Use of the Platform
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                You must be a verified Kenyan citizen to vote on issues.
              </li>
              <li>
                You agree to provide accurate and complete information during the
                verification process.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password.
              </li>
            </ul>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              WeThePeopleKE is not liable for any direct, indirect, incidental,
              or consequential damages resulting from your use of the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Simple Terms Footer - Light green background */}
      <footer className="terms-footer">
        <p>&copy; {new Date().getFullYear()} WeThePeopleKE. All rights reserved.</p>
        <p>Empowering Kenyan voices for democratic participation.</p>
      </footer>
    </div>
  )
}

export default Terms