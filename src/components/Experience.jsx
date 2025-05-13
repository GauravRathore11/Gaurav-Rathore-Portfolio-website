import React from 'react';
import { experiences, achievements } from '../data/experienceData';
import { Briefcase, Award } from 'lucide-react';

const ExperienceItem = ({ role, company, location, period, description, isLast }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 mt-1 flex items-center justify-center w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full z-10">
        <Briefcase size={14} className="text-white" />
      </div>

      {!isLast && (
        <div className="absolute left-3 top-6 bottom-0 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
      )}

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role}</h3>
        <div className="text-gray-600 dark:text-gray-400 mb-2">
          {company} · {location} · {period}
        </div>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
              <span className="inline-block w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2 mt-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AchievementCard = ({ title, date, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start">
        <Award className="text-indigo-600 dark:text-indigo-400 mr-4 shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{date}</p>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Achievements</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              Work Experience
            </h3>
            <div className="mt-8">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={exp.id}
                  role={exp.role}
                  company={exp.company}
                  location={exp.location}
                  period={exp.period}
                  description={exp.description}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              Achievements
            </h3>
            <div className="grid grid-cols-1 gap-6 mt-8">
              {achievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  title={achievement.title}
                  date={achievement.date}
                  description={achievement.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
