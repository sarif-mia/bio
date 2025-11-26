import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'Python & Django', level: 88 },
    { name: 'TypeScript', level: 92 },
    { name: 'Database Design', level: 85 },
    { name: 'DevOps & AWS', level: 80 }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <div className="section-badge">Get to know me</div>
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Passionate developer crafting innovative digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-fadeInLeft' : ''}`}>
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating intuitive user experiences and robust backend systems that solve 
              real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community through 
              blog posts and mentoring.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className={`about-skills ${isVisible ? 'animate-fadeInRight' : ''}`}>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={`skill-progress ${isVisible ? 'animate-scaleIn' : ''}`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;