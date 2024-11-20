import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png'; // Ensure the correct path
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B3A75] text-white py-12 px-6 sm:py-16 sm:px-12 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Leading the Way in AI Ethics and <br className="hidden lg:block" /> Responsibility
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#173780] text-white font-light rounded-md border border-gray-400">
            RECEIVE NEWS
          </button>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black font-light rounded-md border border-gray-400">
            <Link to="/donate">DONATE</Link>
          </button>
        </div>
      </div>

      {/* Footer Links - Four Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-left mb-10 text-white">
        {/* Navigation Section */}
        <div>
                <h3 className="font-semibold mb-1 uppercase tracking-wide text-sm lg:text-base">Navigation</h3>
                <ul className="space-y-2 p-0">
                  <li className="mt-0 mb-1"><a href="/" className="no-underline text-white">Home</a></li>
                  <li className="mt-0 mb-1"><a href="/about" className="no-underline text-white">About Us</a></li>
                  <li className="mt-0 mb-1"><a href="/what-we-do" className="no-underline text-white">What We Do</a></li>
                  <li className="mt-0 mb-1"><a href="/power-of-10" className="no-underline text-white">Power of 10</a></li>
                  <li className="mt-0 mb-1"><a href="/donate" className="no-underline text-white">Donate</a></li>
                </ul>
              </div>


                    {/* What We Do Section */}
              <div>
                <h3 className="font-semibold mb-1 uppercase tracking-wide text-sm lg:text-base">What We Do</h3>
                <ul className="space-y-2 p-0">
                  <li className="mt-0"><a href="/encouraging-testing" className="no-underline text-white">Testing</a></li>
                  <li className="mt-0"><a href="/strengthening-advocacy" className="no-underline text-white">Advocacy</a></li>
                  <li className="mt-0"><a href="/sharing-information" className="no-underline text-white">Information</a></li>
                  <li className="mt-0"><a href="/building-leadership" className="no-underline text-white">Leadership</a></li>
                  <li className="mt-0"><a href="/engaging-global-fun" className="no-underline text-white">Global Fun</a></li>
                  <li className="mt-0"><a href="/shining-a-light" className="no-underline text-white">Shining Light</a></li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="font-semibold mb-1 uppercase tracking-wide text-sm lg:text-base">Legal</h3>
                <ul className="space-y-2 p-0">
                  <li className="mt-0"><a href="/general-info" className="no-underline text-white">General Info</a></li>
                  <li className="mt-0"><a href="/privacy-policy" className="no-underline text-white">Privacy Policy</a></li>
                  <li className="mt-0"><a href="/terms-of-service" className="no-underline text-white">Terms</a></li>
                </ul>
              </div>


                    {/* Talk to Us Section */}
              <div>
                <h3 className="font-semibold mb-1 uppercase tracking-wide text-sm lg:text-base">Talk to Us</h3>
                <ul className="space-y-2 p-0">
                  <li className="mt-0"><a href="mailto:info@raifaalliance.org" className="no-underline text-white">Email Us</a></li>
                  <li className="mt-0"><a href="tel:+254717999616" className="no-underline text-white">+254 717 999 616</a></li>
                  <li className="mt-0"><a href="/contact-us" className="no-underline text-white">Contact Us</a></li>
                  <li className="mt-0"><a href="https://facebook.com" className="no-underline text-white">Facebook</a></li>
                  <li className="mt-0"><a href="https://linkedin.com" className="no-underline text-white">LinkedIn</a></li>
                  <li className="mt-0"><a href="https://twitter.com" className="no-underline text-white">Twitter</a></li>
                  <li className="mt-0"><a href="https://www.tiktok.com/@raialliance" className="no-underline text-white">TikTok</a></li>
                  <li className="mt-0"><a href="https://www.youtube.com/@RAIALLIANCE" className="no-underline text-white">YouTube</a></li>
                </ul>
              </div>

      </div>

      {/* Bottom Section with Logo, Copyright, and Social Icons */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-4 border-t border-gray-600 pt-4 space-y-4 lg:space-y-0">
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="LogoImage" className="w-16 h-auto lg:w-20" />
        </div>

        {/* Centered Copyright Text */}
        <p className="text-center text-sm lg:text-base">&copy; 2024 Lift Media. All Rights Reserved.</p>

        {/* Social Icons - Right aligned */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-gray-400">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-gray-400">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-gray-400">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@raialliance" aria-label="TikTok" className="text-white hover:text-gray-400">
            <FaTiktok className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@RAIALLIANCE" aria-label="YouTube" className="text-white hover:text-gray-400">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
