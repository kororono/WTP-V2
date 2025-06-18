import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Login() {
  const [nationalId, setNationalId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const sendOtp = () => {
    // Simulate OTP sending
    console.log(
      `Sending OTP to ${phoneNumber} for National ID ${nationalId.slice(-3)}`,
    )
    setOtpSent(true)
  }

  const verifyOtp = () => {
    // Simulate OTP verification
    console.log(`Verifying OTP ${otp}`)
    alert('OTP Verified! (Simulated)')
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Login / Sign Up
          </h2>
          <div className="mb-4">
            <label
              htmlFor="nationalId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              National ID Number
            </label>
            <input
              type="text"
              id="nationalId"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your National ID"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {!otpSent ? (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={sendOtp}
            >
              Send OTP
            </button>
          ) : (
            <>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}
          <p className="text-gray-600 mt-4">
            Your data is encrypted. We never share or sell it.
          </p>
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
              <span className="ml-2 text-gray-700">
                I agree to the <a href="/terms" className="text-green-500">Terms &amp; Conditions</a> and <a href="/privacy" className="text-green-500">Privacy Policy</a>
              </span>
            </label>
          </div>
        </div>
      </div>
		</div>
  )
}

export default Login
