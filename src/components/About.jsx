import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a Computer Science Engineering student at Graphic Era Hill University, Dehradun,
            with a strong interest in full-stack development, AI/ML, and blockchain. I enjoy
            building real-world projects that solve problems — from decentralized apps to
            command-line tools.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I’ve developed a decentralized voting system using React and Web3, a big integer
            calculator in C using linked lists, and a cross-platform file manager CLI tool in
            Python. I actively participate in hackathons and have secured winning positions,
            showcasing my problem-solving and team collaboration skills.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I’m passionate about continuous learning and have completed the Microsoft SEFA
            program, gaining industry-level insights into SDLC and Agile practices. I’m always
            exploring new technologies and love contributing to meaningful projects that help me
            grow as a developer.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            {/* Education Box */}
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="block font-medium">B.Tech in Computer Science Engineering</span>
                <span className="block text-gray-600 dark:text-gray-400">
                  Graphic Era Hill University, Dehradun
                </span>
                <span className="block text-gray-500 dark:text-gray-500">
                  2022 - 2026 | CGPA: 8.20
                </span>
              </p>
            </div>

            {/* Language Box */}
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Languages</h3>
              <ul className="text-gray-700 dark:text-gray-300">
                <li className="mb-1">English (Fluent)</li>
                <li className="mb-1">Hindi (Native)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
