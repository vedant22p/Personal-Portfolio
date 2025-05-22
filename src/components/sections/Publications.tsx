import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const publicationsData = [
  {
    id: 1,
    title: "Spatially Attentive Scale Invariant Feature Modelling for Alzheimer's Disease Detection",
    journal: "IEEE Xplore",
    date: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10543826"
  },
  {
    id: 2,
    title: "Scale Invariant Feature Modelling with Integrated Transfer Learning for Parkinson's Disease Diagnosis",
    journal: "IEEE Xplore",
    date: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10723906"
  },
  {
    id: 3,
    title: "Vision Transformer Based Approach for Parkinson's Disease Diagnosis",
    journal: "IEEE Xplore",
    date: "2024",
    link: "https://ieeexplore.ieee.org/document/10752200"
  },
  {
    id: 4,
    title: "A Comparative Study of Different Feature Extractors for Parkinson's Disease Detection",
    journal: "IEEE Xplore",
    date: "2024",
    link: "https://ieeexplore.ieee.org/document/10752301"
  },
  {
    id: 5,
    title: "A Comparative study and analysis of Transfer Learning Models for Parkinson's Disease Diagnosis",
    journal: "Springer LAIS",
    date: "2024",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-65392-6_21"
  },
  {
    id: 6,
    title: "A Fine-Tuned Transfer Learning Approach for Parkinson's Disease Detection on New Hand PD Dataset",
    journal: "Springer CCIS",
    date: "2024",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-58953-9_7"
  },
  {
    id: 7,
    title: "A Comparative study and analysis of Transfer Learning Models for Early Detection of Parkinson's Disease",
    journal: "Springer CCIS",
    date: "2024",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-71484-9_9"
  },
  {
    id: 8,
    title: "Early Diagnosis of Parkinson's Disease using Optimized Hybrid Transfer Learning Model",
    journal: "Springer CCIS",
    date: "2024",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-8865-1_34"
  },
  {
    id: 9,
    title: "Leveraging Invariant and MultiScale Features for Parkinson's Disease Detection",
    journal: "IEEE Xplore",
    date: "2024",
    link: "https://ieeexplore.ieee.org/document/10990993"
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Publications" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationsData.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-purple-400 font-medium mb-2">{item.journal}</p>
                <p className="text-sm text-gray-400 mb-4">{item.date}</p>
              </div>
              
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-2"
              >
                Read Publication <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;