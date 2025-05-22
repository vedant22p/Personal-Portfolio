import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Award, Trophy, Medal, Star, Crown, ExternalLink } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: "Google CodeJam Global Rank 972",
    organization: "Google",
    year: "March 2022",
    description: "Participated in Google's individual competition Google KickStart and achieved global rank of 972.",
    icon: Trophy
  },
  {
    id: 2,
    title: "Google KickStart Global Rank 1472",
    organization: "Google",
    year: "November 2022",
    description: "Participated in Google's individual competition Google KickStart and achieved global rank of 1472 in Round H.",
    icon: Crown
  },
  {
    id: 3,
    title: "Flipkart Grid 5.0 Round 1 Qualifier",
    organization: "Flipkart",
    year: "July 2023",
    description: "Qualified the first part of round 1 quiz in the Software Development Track. Among the top 0.04% qualifying for next round.",
    icon: Star
  },
  {
    id: 4,
    title: "Leetcode 5-Star Rating",
    organization: "Leetcode",
    year: "2025",
    description: "Demonstrated expertise by solving 1400+ DSA problems, securing a 4-star rating.",
    profileLink: "https://leetcode.com/u/user0352V/",
    icon: Star
  },
  {
    id: 5,
    title: "Best Paper Award - AICVMD 2025",
    organization: "AICVMD Conference",
    year: "2025",
    description: "Received Best Paper Award for research contribution.",
    certificateLink: "https://drive.google.com/file/d/1d4VowNhPsUGXAhPec68zjrDzI8YfJEKl/view?usp=drive_link",
    icon: Award
  },
  {
    id: 6,
    title: "Top Student Recognition",
    organization: "VIT Bhopal University",
    year: "2025",
    description: "Ranked in top 2% of university batch.",
    icon: Medal
  },
  {
    id: 7,
    title: "EF SET English Certificate",
    organization: "EF Standard English Test",
    year: "2021",
    description: "Achieved C2 Proficient level with score 73/100",
    icon: Award
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Achievements" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group border-l-4 border-blue-500 h-full"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-900/30 text-purple-400 rounded-lg mb-4">
                  <item.icon size={24} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                
                <div className="flex justify-between items-center mb-3">
                  <p className="text-purple-400 font-medium">{item.organization}</p>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                    {item.year}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{item.description}</p>
                
                <div className="flex gap-4 mt-auto">
                  {item.profileLink && (
                    <a 
                      href={item.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Profile <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {item.certificateLink && (
                    <a 
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Certificate <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;