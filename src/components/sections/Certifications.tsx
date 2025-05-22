import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    id: 1,
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    date: "2024",
    credentialID: "5eb1270999d5f9ccaa6ae839cdbd372a",
    description: "Comprehensive course covering machine learning concepts and practical implementation in Python.",
    link: "https://coursera.org/share/5eb1270999d5f9ccaa6ae839cdbd372a"
  },
  {
    id: 2,
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialID: "LKJGBNFJSSLM",
    description: "Fundamental course covering AWS cloud services and technical implementation.",
    link: "https://www.coursera.org/account/accomplishments/verify/LKJGBNFJSSLM"
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Certifications" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-blue-500"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-400 font-medium">{item.issuer}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mt-2 mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>Credential ID: {item.credentialID}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{item.description}</p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Verify Credential <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;