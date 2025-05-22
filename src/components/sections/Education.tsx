import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const educationData = [
  {
    id: 1,
    degree: "Integrated Masters in Technology",
    university: "VIT Bhopal University",
    location: "Bhopal, India",
    period: "2020 - 2025",
    description: "Currently pursuing Integrated Masters in Technology.",
    gpa: "8.72/10"
  },
  {
    id: 2,
    degree: "Class 12 - CBSE Board",
    university: "J. D. Tytler School",
    location: "New Delhi, India",
    period: "2019 - 2020",
    description: "Completed senior secondary education with focus on Science and Mathematics.",
    gpa: "89.6%"
  },
  {
    id: 3,
    degree: "Class 10 - CBSE Board",
    university: "J. D. Tytler School",
    location: "New Delhi, India",
    period: "2017 - 2018",
    description: "Completed secondary education with excellent academic performance.",
    gpa: "90.6%"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Education" />
        
        <div className="mt-12 space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={item.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="text-purple-400 font-medium">{item.university}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-3">{item.description}</p>
              
              <div className="flex items-center text-sm text-gray-400">
                <span className="font-medium">{item.gpa}</span>
                <span className="mx-2">•</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;