import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hello, I'm</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Gaurav Rathore</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Software Engineering student
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating beautiful, functional, and user-centered designs.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 ease-in-out">
                Contact Me
              </a>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300 ease-in-out"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300 ease-in-out"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300 ease-in-out"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQHR64m3QMuWDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727521975517?e=1751500800&v=beta&t=cLfmhGbkgt2EZW4GtHV_5cr2CPJIzzdcNEY2hWFrNOI" 
                  alt="John Doe" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-600 dark:text-gray-400" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
