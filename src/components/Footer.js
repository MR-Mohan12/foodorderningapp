
import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4  static bottom-0">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2024 Your Yummy Food Delivery App</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/mohaan_raghuwanshi___"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} /> 
          </a>
          <a
            // href="https://www.linkedin.com/in/Mohan Singh"
            href="https://www.linkedin.com/in/mohan-singh-aa788328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app https://www.linkedin.com/in/mohan-singh-aa788328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} /> 
          </a>
          <a
            href="https://www.threads.net/@mohaan_raghuwanshi___"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} /> 
          </a>
          <a
            // href="https://www.linkedin.com/in/Mohan Singh"
            href=" https://twitter.com/mohan_devloper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

