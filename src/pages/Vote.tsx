import React from 'react'
import Navbar from '../components/Navbar'

function Vote() {
  // Mock data for bills/issues
  const issues = [
    {
      id: 1,
      title: 'The Finance Bill 2024',
      clauses: [
        {
          id: 1,
          title: 'Clause 1: Tax on Bread',
          text: 'A 16% VAT will be imposed on bread.',
          explanation: 'This clause introduces a tax on bread, potentially increasing its price.',
        },
        {
          id: 2,
          title: 'Clause 2: Increased Fuel Levy',
          text: 'The fuel levy will be increased by 8%.',
          explanation: 'This clause increases the fuel levy, which may raise transportation costs.',
        },
      ],
    },
  ]

  return (
    <div className="page-container">
      <div className="main-content">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Voting Dashboard
        </h1>
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {issue.title}
            </h2>
            {issue.clauses.map((clause) => (
              <div key={clause.id} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {clause.title}
                </h3>
                <p className="text-gray-600 mb-2">{clause.text}</p>
                <p className="text-gray-500 italic mb-4">
                  Explanation: {clause.explanation}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Yes
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    No
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Abstain
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-green-100 p-4 rounded-md">
              <p className="text-gray-700">
                Progress: <span className="font-semibold">50%</span> Clauses
                Voted
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
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
 </div>
  )
}

export default Vote
