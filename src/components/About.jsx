import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, Next.js, Tailwind CSS',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Node.js, Python, Go, Express.js, FastAPI',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database & Cloud',
      description: 'PostgreSQL, MongoDB, AWS, Docker, Kubernetes',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, Progressive Web Apps',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'DevOps & CI/CD',
      description: 'GitHub Actions, Jenkins, Terraform, Monitoring',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance & Security',
      description: 'Optimization, Security Best Practices, Testing',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 8 years of experience in full-stack development, I specialize in building
            scalable web applications and leading development teams to deliver exceptional digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Started as a curious computer science student, I've evolved into a senior fullstack developer
              with a passion for creating elegant solutions to complex problems. I've worked with startups
              to enterprise companies, always focusing on clean code, performance, and user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring junior
              developers, or exploring the latest trends in web development and emerging technologies.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;