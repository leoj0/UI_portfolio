import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Trophy, 
  User, 
  Briefcase, 
  Star 
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CafeReserve",
      description: "Cafe Management and Reservation Web Application",
      technologies: ["Laravel", "Tailwind CSS", "JavaScript"],
      githubLink: "#",
      liveLink: "#"
    },
  ];

  const accomplishments = [
    {
      title: "Sabah Net Cyber Challenge",
      description: "Cybersecurity tools expertise: FortiSIEM and FortiSOAR",
      year: 2024,
      icon: <Star className="text-yellow-500" />
    },
    {
      title: "Ocean Hackathon Kuala Lumpur",
      description: "Collaborative coding and innovative problem-solving",
      year: 2023,
      icon: <Trophy className="text-blue-500" />
    },
    {
      title: "Huawei ICT Competition",
      description: "Advanced knowledge in Big Data, AI, and Cloud Computing",
      year: 2023,
      icon: <Code className="text-green-500" />
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS", "JavaScript"],
      icon: <Code className="text-blue-600" />
    },
    {
      category: "Design",
      items: ["Figma", "UI/UX Design", "Prototyping"],
      icon: <Palette className="text-purple-600" />
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Problem Solving", "Team Collaboration"],
      icon: <User className="text-green-600" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-8 flex items-center space-x-8"
        >
          <img 
            src="https://imgur.com/a/WSxuisv" 
            alt="Joel Lim Jun Xuan" 
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Joel Lim Jun Xuan</h1>
            <p className="text-gray-600 text-lg">Computer Science (Network Engineering) | Interested in Web Development </p>
          </div>
        </motion.header>

        {/* Projects & Skills Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Projects Section */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="mr-3 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
            </div>
            <div className="space-y-4">
              {projects.map(project => (
                <div 
                  key={project.id} 
                  className="border-l-4 border-blue-500 pl-4 hover:bg-blue-50 transition-all p-4 rounded-r-lg"
                >
                  <h3 className="font-semibold text-lg text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                  <div className="flex space-x-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills & Accomplishments Container */}
          <div className="space-y-8">
            {/* Skills Section */}
            <motion.section 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center mb-6">
                <Code className="mr-3 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
              </div>
              {skills.map((skillGroup, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center mb-2">
                    {skillGroup.icon}
                    <h3 className="ml-2 font-semibold text-gray-700">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>

            {/* Accomplishments Section */}
            <motion.section 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center mb-6">
                <Trophy className="mr-3 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-800">Accomplishments</h2>
              </div>
              {accomplishments.map((acc, index) => (
                <div 
                  key={index} 
                  className="flex items-start mb-4 pb-4 border-b last:border-b-0"
                >
                  <div className="mr-4">{acc.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{acc.title}</h3>
                    <p className="text-gray-600 text-sm">{acc.description}</p>
                    <span className="text-xs text-gray-500">({acc.year})</span>
                  </div>
                </div>
              ))}
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;