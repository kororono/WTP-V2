import React from 'react'
import Navbar from '../components/Navbar'

function Profile() {
  // Mock user data
  const user = {
    id: '123456789',
    phone: '+254712345678',
    votingHistory: [
      {
        issue: 'The Finance Bill 2024',
        vote: 'Yes',
        date: '2024-05-20',
      },
      {
        issue: 'The Housing Levy',
        vote: 'No',
        date: '2024-04-15',
      },
    ],
  }

  return (
    <div className="page-container">
      <div className="main-content">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Profile
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            User Information
          </h2>
          <div className="mb-4">
            <p className="text-gray-600">
              ID (Last 3 Digits):{' '}
              <span className="font-semibold">{user.id.slice(-3)}</span>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              Phone (Masked): <span className="font-semibold">+{user.phone.slice(3, 5)}******{user.phone.slice(-3)}</span>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Voting History
            </h2>
            {user.votingHistory.length > 0 ? (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Issue</th>
                    <th className="px-4 py-2">Vote</th>
                    <th className="px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {user.votingHistory.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.issue}</td>
                      <td className="border px-4 py-2">{item.vote}</td>
                      <td className="border px-4 py-2">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No voting history available.</p>
            )}
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
            Logout
          </button>
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
 </div>
  )
}

export default Profile
