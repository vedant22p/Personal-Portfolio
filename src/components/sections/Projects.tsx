import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Vedant Pandey's Personal Portfolio is a modern, responsive web application designed to showcase his skills, projects, and professional journey. Built using React, Tailwind CSS, and TypeScript, the portfolio emphasizes clean design and efficient performance. The project leverages Vite for rapid development and bundling, ensuring a seamless and interactive user experience.",
    tags: ["TypeScript", "JavaScript", "HTML", "React", "Tailwind CSS", "Vite", "PostCSS"],
    demoLink: "#",
    codeLink: "https://github.com/vedant22p/Personal-Portfolio"
  },
  {
    id: 2,
    title: "WhatsApp Chat Analyzer",
    description: "Achieved 25% increase in user engagement by developing a Python-based web application for personalized WhatsApp chat analysis. Enhanced communication by introducing Group and Personal Chat Analysis, monitoring 100+ activities and 10,000 messages. Added NLP Pipeline for sentiment analysis and modularized utilities for data visualization.",
    tags: ["Python", "NLP", "Matplotlib", "Seaborn", "Hugging Face"],
    demoLink: "https://huggingface.co/spaces/vedant22p/whatsapp-chat-analyzer",
    codeLink: "https://github.com/vedant22p/Whatsapp-Chat-Analyzer-WebApp-"
  },
  {
    id: 3,
    title: "AutoTabML",
    description: "Automated ML code generation for tabular data, reducing manual coding by 95%. Developed specialized agents for ML pipeline stages, improving development speed by 75%. Enhanced user productivity by 50% through integrated code execution and debugging capabilities.",
    tags: ["Llamba-70B", "Machine Learning", "LLM", "Hugging Face", "Streamlit", "NLP", "Deep Learning"],
    demoLink: "https://huggingface.co/spaces/singhtech/AutoTabML",
    codeLink: "https://github.com/vedant22p/AutoTabML"
  },
  {
    id: 4,
    title: "Elite CPU Scheduler",
    description: "Developed a C++ program implementing seven CPU scheduling algorithms: FCFS, RR, SPN, SRT, HRRN, Feedback, and Aging. Engineered an integrated system to compare waiting times, optimizing scheduling performance and demonstrating proficiency in advanced algorithmic concepts.",
    tags: ["C++", "OOP", "Operating Systems", "Algorithms"],
    demoLink: "#",
    codeLink: "https://github.com/vedant22p/CPU-Scheduling-Algorithms"
  },
  {
    id: 5,
    title: "Chest Cancer Classification",
    description: "Developed an end-to-end deep learning pipeline for chest cancer classification using medical imaging. Implemented CNN with transfer learning, achieving high accuracy through comprehensive data preprocessing, augmentation, and model evaluation using metrics like ROC-AUC.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Deep Learning", "Medical Imaging"],
    demoLink: "#",
    codeLink: "https://github.com/vedant22p/End-to-End-Chest-Cancer-Classification"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <SectionHeading title="Projects" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image=""
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;