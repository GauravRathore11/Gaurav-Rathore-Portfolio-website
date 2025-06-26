import React, { useRef, useEffect } from 'react';
import { skills } from '../data/skillsData';

const SkillBar = ({ name, level }) => {
  const barRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${level * 20}%`;
                barRef.current.style.opacity = '1';
              }
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level * 20}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          ref={barRef}
          className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%', opacity: 0 }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, category }) => {
  const categorySkills = skills.filter(skill => skill.category === category);
  
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      {categorySkills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SkillCategory title="Core subjects" category="core"/>
          <SkillCategory title="Frontend Development" category="frontend" />
          <SkillCategory title="Design" category="design" />
          <SkillCategory title="Tools & Platforms" category="tools" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
