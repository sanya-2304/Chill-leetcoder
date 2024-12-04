import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub,FaCode } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center items-center flex-col fixed bottom-0 left-0 w-full">
      <p className="text-lg mb-2 font-semibold hover:text-green-500">Made with <span className="text-orange-500 text-xl">&hearts; </span> by Sanya Doda</p>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/sanya-doda-774241216/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaLinkedin size={24} />
        </a>
        
        <a
          href="https://github.com/sanya-2304"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://leetcode.com/sanyadoda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <FaCode size={24} />
        </a>
        <a
          href="https://x.com/TheOneWithSanya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
