import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Timeline from '../ui/Timeline';
import TimelineItem from '../ui/TimelineItem';

const experienceData = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "ThinkSage",
    location: "Remote",
    period: "January 2024 - March 2024",
    description: "Working as a Data Science Intern, focusing on implementing machine learning solutions and data analysis.",
    skills: [],
    link: "https://thinksage.in/"
  },
  {
    id: 2,
    role: "SDE Intern",
    company: "ITJOBSXS",
    location: "Remote",
    period: "October 2023 - April 2024",
    description: "Working as a Software Development Engineer Intern, developing and maintaining web applications.",
    skills: [],
    link: "https://itjobxs.com/"
  },
  {
    id: 3,
    role: "Text Content Creator",
    company: "PhysicsWallah",
    location: "Remote",
    period: "May 2022 - November 2022",
    description: "Created and curated educational content for physics courses.",
    skills: [],
    link: "https://www.pw.live/"
  },
  {
    id: 4,
    role: "Machine Learning Intern",
    company: "Eduversity",
    location: "Remote",
    period: "June 2022 - September 2022",
    description: "Worked on implementing machine learning algorithms and developing AI solutions for educational platforms.",
    skills: [],
    link: "https://edu-versity.in/"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Experience" />
        
        <div className="mt-12">
          <Timeline>
            {experienceData.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.role}
                subtitle={
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item.company}
                  </a>
                }
                period={item.period}
                location={item.location}
                description={item.description}
                skills={item.skills}
                isLeft={index % 2 === 0}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;