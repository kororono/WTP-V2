import React from 'react'
import Navbar from '../components/Navbar'

function SubmitIssue() {
  return (
    <div className="page-container">
      <div className="main-content">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Submit a Civic Issue
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the issue title"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter a detailed description of the issue"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Category
              </label>
              <select
                id="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Governance</option>
                <option>Economy</option>
                <option>Environment</option>
                <option>Social Issues</option>
              </select>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Issue
            </button>
          </form>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upvoting Section
          </h2>
          <p className="text-gray-600">
            Users can upvote important civic issues. Top-voted issues can be
            flagged “Pending Legal Action” when thresholds are reached.
          </p>
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

export default SubmitIssue
