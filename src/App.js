import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { profileData, educationData, experienceData, skillsData, projectsData, certificationsData } from './portfolioData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    // Apply dark mode attribute to the document body
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    
    // Listen for scroll to show/hide the back-to-top arrow
    const handleScroll = () => {
      setShowTopArrow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="sticky-nav">
        <div className="container max-w-4xl d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 mb-2 mb-md-0">
            <a href="#about" className="nav-logo">{profileData.name}</a>
            {showTopArrow && (
              <button onClick={scrollToTop} className="nav-link fs-5" aria-label="Back to top">
                ↑
              </button>
            )}
          </div>
          
          {/* UPDATED NAVBAR LINKS */}
          <div className="d-flex gap-3 gap-md-4 align-items-center flex-wrap">
            <a href="#expertise" className="nav-link">Expertise</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#academics" className="nav-link">Academics</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="nav-link fw-bold">
              {isDarkMode ? '☀ Light' : '☾ Dark'}
            </button>
          </div>
        </div>
      </nav>

      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* SECTION: About */}
        <section id="about" className="fullscreen-section text-center align-items-center">
          <img src="/profile.jpg" alt={`${profileData.name}`} className="profile-img" />
          <h1 className="display-4 fw-bold mb-3">{profileData.name}</h1>
          <h2 className="h5 text-muted-custom mb-4">{profileData.title}</h2>
          <p className="text-muted-custom mb-4 px-md-5">{profileData.summary}</p>
          
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href={`mailto:${profileData.email}`} className="social-link">Email</a>
            <a href={profileData.github} className="social-link" target="_blank" rel="noreferrer">GitHub</a>
            <a href={profileData.linkedin} className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profileData.leetcode} className="social-link" target="_blank" rel="noreferrer">LeetCode</a>
            <a href={profileData.hackerrank} className="social-link" target="_blank" rel="noreferrer">HackerRank</a>
          </div>
        </section>

        {/* SECTION: Technical Expertise */}
        <section id="expertise" className="fullscreen-section">
          <h3 className="section-title">Technical Expertise</h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="custom-card">
                <h4 className="h6 fw-bold mb-3">Programming Languages</h4>
                <div>
                  {skillsData.programming.map(s => <span key={s} className="tech-badge">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-card">
                <h4 className="h6 fw-bold mb-3">AI & Data Science</h4>
                <div>
                  {skillsData.aiDataScience.map(s => <span key={s} className="tech-badge">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-card">
                <h4 className="h6 fw-bold mb-3">Web Development</h4>
                <div>
                  {skillsData.webDev.map(s => <span key={s} className="tech-badge">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-card">
                <h4 className="h6 fw-bold mb-3">Databases & Tools</h4>
                <div>
                  {skillsData.databasesAndTools.map(s => <span key={s} className="tech-badge">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Projects */}
        <section id="projects" className="fullscreen-section">
          <h3 className="section-title">Project Showcase</h3>
          <div className="row g-4">
            {projectsData.map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="custom-card d-flex flex-column">
                  <h4 className="h5 fw-bold">{project.title}</h4>
                  <p className="text-muted-custom small mb-4">{project.description}</p>
                  
                  <div className="mt-auto d-flex justify-content-between align-items-end">
                    <div>
                      {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="project-link mt-3 mt-md-0">
                        View ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Full Resume Info Broken into IDs */}
        <section className="fullscreen-section">
          
          {/* ADDED ID: #experience */}
          <div id="experience" className="mb-5">
            <h3 className="section-title">Experience & Co-Curricular</h3>
            {experienceData.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="h5 fw-bold mb-1">
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noreferrer" className="exp-link">
                      {exp.title} <span className="exp-link-icon">↗</span>
                    </a>
                  ) : (
                    exp.title
                  )}
                </h4>
                <div className="text-muted-custom fw-semibold mb-2">
                  {exp.organization} <span className="float-end d-none d-md-inline">{exp.date}</span>
                </div>
                <ul>
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex} className="text-muted-custom small">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ADDED ID: #academics */}
          <div id="academics" className="mb-5">
            <h3 className="section-title">Academics</h3>
            {educationData.map((edu, index) => (
              <div key={index} className="mb-3 custom-card">
                <h4 className="h6 fw-bold mb-1">{edu.degree}</h4>
                <div className="text-muted-custom small mb-2">
                  <a href={edu.locationLink} target="_blank" rel="noreferrer" className="location-link" title="View on Google Maps">
                    <span className="pin-icon">📍</span> {edu.institution}
                  </a> 
                  <span className="mx-1">|</span> {edu.duration}
                </div>
                <div className="small fw-semibold">{edu.score}</div>
              </div>
            ))}
          </div>

          {/* ADDED ID: #certifications */}
          <div id="certifications" className="pb-5">
            <h3 className="section-title">Certifications & Achievements</h3>
            <ul className="row">
              {certificationsData.map((cert, index) => (
                <li key={index} className="col-md-6 text-muted-custom small mb-3">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                      {cert.logo && (
                        <img 
                          src={cert.logo} 
                          alt="" 
                          className="cert-logo" 
                          /* The Failsafe */
                          onError={(e) => { e.target.style.display = 'none'; }} 
                        />
                      )}
                      <span>{cert.name}</span>
                    </a>
                  ) : (
                    <span>{cert.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
        </section>

      </div>
    </div>
  );
}

export default App;