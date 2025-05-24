import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-gray-200 border-t border-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-wrap gap-y-8">
          <div className="w-full md:w-1/2 lg:w-4/12 flex flex-col justify-between mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MegaBlog. All Rights Reserved.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-2/12 mb-6 md:mb-0">
            <h3 className="mb-4 text-xs font-semibold uppercase text-blue-700 tracking-wider">Company</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Features</Link>
              </li>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Press Kit</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-2/12 mb-6 md:mb-0">
            <h3 className="mb-4 text-xs font-semibold uppercase text-blue-700 tracking-wider">Support</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Account</Link>
              </li>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Help</Link>
              </li>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Contact Us</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Customer Support</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-4/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-blue-700 tracking-wider">Legals</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Terms &amp; Conditions</Link>
              </li>
              <li className="mb-2">
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-base text-gray-700 hover:text-blue-600 transition" to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-xs text-gray-400">
          Made with <span className="text-pink-500">♥</span> by Pratham 
        </div>
      </div>
    </footer>
  )
}

export default Footer