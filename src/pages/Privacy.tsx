import React from 'react'
import Navbar from '../components/Navbar'

function Privacy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. This privacy policy explains how we
            collect, use, and protect your personal information.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Phone number (for OTP verification only)
            </li>
            <li>
              National ID Number (for verification purposes only)
            </li>
            <li>
              Voting history
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              OTP is only used to verify your phone number.
            </li>
            <li>
              We do not store your raw ID or phone data in plaintext.
            </li>
            <li>
              All data is encrypted.
            </li>
            <li>
              We do not share or track your data with any third parties.
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Data Security
          </h2>
          <p className="text-gray-600 mb-4">
            We take the security of your data seriously and implement
            appropriate measures to protect it.
          </p>
        </div>
      </div>
      <footer className="terms-footer">
        <p>&copy; {new Date().getFullYear()} WeThePeopleKE. All rights reserved.</p>
        <p>Empowering Kenyan voices for democratic participation.</p>
      </footer>
    </div>
  )
}

export default Privacy
