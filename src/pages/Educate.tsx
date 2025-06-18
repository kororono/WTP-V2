import React from 'react'
import Navbar from '../components/Navbar'

function Educate() {
  const educationCards = [
    {
      title: 'What is Public Participation?',
      content:
        'Public participation is the process by which the public\'s concerns, needs, and values are incorporated into governmental and corporate decision-making.',
    },
    {
      title: 'What is the Finance Bill?',
      content:
        'The Finance Bill is a proposed law that outlines the government\'s plans for taxation and revenue generation.',
    },
    {
      title: 'What does "Clause" mean in law?',
      content:
        'In law, a clause is a distinct section or provision within a legal document, such as a contract or a bill.',
    },
  ]

  return (
		<div className="page-container">
      <div className="main-content">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Civic Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {card.title}
              </h2>
              <p className="text-gray-600">{card.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Future AI-Assisted Explanations
          </h2>
          <p className="text-gray-600">
            In the future, this section will include AI-assisted explanations to
            help you understand complex civic issues.
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
export default Educate
