import React, { useState, useEffect } from 'react';
import myPhoto from './assets/n.jpg';
import pnyFrontend from './assets/n.jpg'; // Adjust filename as needed
import pnyBackend from './assets/n.jpg';   // Adjust filename as needed
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA CONFIGURATION ---
const portfolioData = {
  name: "Noor ul Hassan",
  title: "Full Stack Developer",
  bio: "I build fast, scalable applications using React, Node.js, and modern web technologies.",
  email: "hassan.noor0107@gmail.com",
  education: [
    {
      degree: "B.S. in Computer Science & Software Engineering",
      institution: "University of Central Punjab",
      year: "2024 - Present",
      description: "Focused on object-oriented programming, data structures, algorithmic logic, and relational database systems."
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science & Software Engineering",
      institution: "University of Central Punjab",
      year: "2024 - Present",
      description: "Focused on object-oriented programming, data structures, algorithmic logic, and relational database systems.",
      image: null
    },
    {
      degree: "Frontend Development Certification",
      institution: "PNY Trainings",
      year: "2024",
      description: "Certification covering HTML, CSS, JavaScript, and ReactJS.",
      image: pnyFrontend
    },
    {
      degree: "Backend Development Certification",
      institution: "PNY Trainings",
      year: "2025",
      description: "Certification covering Node.js, Express, and Database connectivity.",
      image: pnyBackend
    }
  ],
  skills: {
    languages: ["Java", "JavaScript", "C++", "HTML/CSS"],
    backend: ["Node.js", "Express", "Spring Boot", "REST APIs"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git & GitHub", "VS Code", "Docker", "Postman"]
  },
  projects: [
    {
      id: 1,
      name: "Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      tech: ["React", "Node.js", "Framer Motion", "Tailwind CSS"],
      link: "https://noor-ul-hassan-portfolio.netlify.app/"
    },
    {
      id: 2,
      name: "Karigar",
      description: "A platform connecting skilled workers with customers, featuring real-time search.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      id: 3,
      name: "AI Sentiment Analysis",
      description: "A full-stack web application that analyzes customer feedback using AI.",
      tech: ["Python", "Flask", "React"],
      link: "#"
    }
  ]
};

// --- ADVANCED ANIMATION VARIANTS ---
const pageVariants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(5px)", y: 20 },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } },
  exit: { opacity: 0, scale: 1.02, filter: "blur(5px)", transition: { duration: 0.3, ease: "easeIn" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", bounce: 0.3 } }
};

const floatingAnim = {
  y: [0, -15, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// --- COMPONENTS ---

const Navbar = ({ activeTheme, setActiveTheme, activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const navItems = ['Home', 'Skills', 'Projects', 'Education', 'Contact'];

  const handleNavClick = (page) => {
    setActivePage(page.toLowerCase());
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      style={{ backgroundColor: activeTheme }}
      className="fixed w-full flex justify-between items-center p-5 md:px-8 md:py-4 text-white z-50 shadow-lg transition-colors duration-700"
    >
      <motion.div 
        whileHover={{ scale: 1.05, rotate: -2 }} 
        whileTap={{ scale: 0.95 }}
        onClick={() => handleNavClick('Home')}
        className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer z-50"
      >
        {portfolioData.name}
      </motion.div>
      
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <motion.button 
            key={item} 
            whileHover={{ y: -2 }}
            onClick={() => handleNavClick(item)}
            className={`transition-all duration-300 py-2 border-b-2 ${activePage === item.toLowerCase() ? 'border-white' : 'border-transparent hover:border-white/50'}`}
          >
            {item}
          </motion.button>
        ))}
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff", borderColor: "#000", boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('HireMe')}
          className="border-2 border-white px-5 py-2 rounded-full text-sm font-bold transition-colors cursor-pointer"
        >
          Hire Me
        </motion.button>
        
        <div className="flex items-center gap-2 border-l-2 border-white/30 pl-6 ml-2">
          <span className="font-bold tracking-wide">Theme</span>
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg cursor-pointer"
          >
            <input 
              type="color" value={activeTheme} onChange={(e) => setActiveTheme(e.target.value)}
              className="absolute top-[-10px] left-[-10px] w-12 h-12 cursor-pointer border-0 p-0"
            />
          </motion.div>
        </div>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 p-2 focus:outline-none">
        <div className="w-6 h-5 flex flex-col justify-between items-center">
          <span className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-0.5 w-full bg-white rounded-lg transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }} 
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)", transition: { duration: 0.5 } }} 
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)", transition: { duration: 0.4 } }}
            className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 + 0.2 } }}
                key={item} onClick={() => handleNavClick(item)}
                className="text-3xl font-bold hover:text-gray-400 transition-colors"
                style={{ color: activePage === item.toLowerCase() ? '#fff' : activeTheme }}
              >
                {item}
              </motion.button>
            ))}
            <motion.button onClick={() => handleNavClick('HireMe')} className="mt-6 border-2 border-white px-8 py-3 rounded-full text-lg font-bold">Hire Me</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Education = ({ activeTheme }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="bg-zinc-950 min-h-screen py-32 px-6 md:px-20 text-white flex items-start"
  >
    <div className="max-w-4xl mx-auto w-full">
      <motion.h2 variants={fadeInUp} style={{ color: activeTheme }} className="text-sm font-bold tracking-widest uppercase mb-2">Academic & Professional</motion.h2>
      <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12">EDUCATION & CERTIFICATIONS</motion.h3>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-8">
        {portfolioData.education.map((edu, index) => (
          <motion.div key={index} variants={fadeInUp} className="bg-black p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
              <div style={{ color: activeTheme }} className="text-lg font-semibold mb-4">{edu.institution}</div>
              <p className="text-zinc-400 mb-4">{edu.year}</p>
              <p className="text-zinc-300">{edu.description}</p>
            </div>
            {edu.image && (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="w-full md:w-1/3 h-48 rounded-xl overflow-hidden border border-zinc-700 shadow-lg"
              >
                <img src={edu.image} alt={edu.degree} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

const Hero = ({ activeTheme, setActivePage }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="min-h-screen flex items-center pt-24 pb-12 px-6 md:px-20 transition-colors duration-700" style={{ backgroundColor: activeTheme }}
  >
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
      <motion.div variants={staggerContainer} className="w-full md:w-1/2 text-white z-10 text-center md:text-left">
        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          Hi, I'm <br className="hidden md:block"/>{portfolioData.name}.
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg sm:text-xl mb-8 font-light max-w-md mx-auto md:mx-0 opacity-90">
          {portfolioData.bio}
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <motion.button onClick={() => setActivePage('projects')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform w-full sm:w-auto">
            View My Work
          </motion.button>
          <motion.button onClick={() => setActivePage('hireme')} whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff", borderColor: "#000" }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto">
            Hire Me
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeInUp} className="w-full md:w-1/2 flex justify-center md:justify-end">
        <motion.div 
          animate={floatingAnim}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2 } }} 
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-black/20 rounded-full border-4 border-black flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm cursor-crosshair"
        >
          <img src={myPhoto} alt="Noor ul Hassan" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

const Skills = ({ activeTheme }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="bg-zinc-950 min-h-screen py-32 px-6 md:px-20 text-white flex items-start"
  >
    <div className="max-w-6xl mx-auto w-full">
      <motion.h2 variants={fadeInUp} style={{ color: activeTheme }} className="text-sm font-bold tracking-widest uppercase mb-2">Technical Rigor</motion.h2>
      <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12">MY SKILLSET</motion.h3>
      <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {Object.entries(portfolioData.skills).map(([category, skillsList], index) => (
          <motion.div 
            key={index} variants={fadeInUp} 
            whileHover={{ y: -8, scale: 1.02, borderColor: activeTheme, boxShadow: `0 15px 35px -10px ${activeTheme}60` }} 
            className="border border-zinc-800 p-6 rounded-2xl transition-all duration-300 bg-black shadow-lg cursor-default"
          >
            <h4 style={{ color: activeTheme }} className="text-xl font-semibold mb-6 capitalize">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill, idx) => (
                <motion.span 
                  key={idx} 
                  whileHover={{ scale: 1.1, backgroundColor: activeTheme, color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-zinc-900 text-sm px-3 py-1.5 rounded-md border border-zinc-800 transition-colors duration-200" 
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

const Projects = ({ activeTheme }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="bg-black min-h-screen py-32 px-6 md:px-20 text-white flex items-start"
  >
    <div className="max-w-6xl mx-auto w-full">
      <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12">Work that speaks<br className="hidden sm:block"/>for itself.</motion.h2>
      <motion.div variants={staggerContainer} className="flex flex-col gap-8 md:gap-10">
        {portfolioData.projects.map((project) => (
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ scale: 1.015, backgroundColor: "#111" }} 
            key={project.id} 
            className="bg-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl transition-colors"
          >
            <div className="w-full md:w-3/4">
              <div style={{ color: activeTheme }} className="font-mono text-sm mb-2 font-bold">0{project.id}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-zinc-400 mb-6 max-w-lg text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs font-semibold bg-black px-3 py-1.5 rounded-full text-zinc-300 border border-zinc-800">{tech}</span>
                ))}
              </div>
            </div>
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: activeTheme, borderColor: activeTheme, color: "#fff", boxShadow: `0 0 20px ${activeTheme}40` }} 
              whileTap={{ scale: 0.95 }} 
              href={project.link} 
              className="mt-8 md:mt-0 w-full md:w-auto text-center border-2 border-zinc-700 px-6 py-3 rounded-full font-bold transition-all duration-300"
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

const Contact = ({ activeTheme }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => { setStatus('Message sent successfully!'); setFormData({ firstName: '', lastName: '', email: '', message: '' }); }, 1500);
  };

  return (
    <motion.section 
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="bg-black py-32 px-6 md:px-20 text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-[100px] font-black tracking-tighter leading-none mb-12 opacity-90">SAY HELLO</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={fadeInUp}>
            <p className="text-xl md:text-3xl font-medium mb-6">Let's build something great together.</p>
            <p className="text-zinc-400 mb-2">Email me directly at:</p>
            <motion.a whileHover={{ x: 10, filter: "brightness(1.5)" }} href={`mailto:${portfolioData.email}`} className="text-xl md:text-3xl font-bold underline break-all inline-block" style={{ color: activeTheme }}>
              {portfolioData.email}
            </motion.a>
          </motion.div>
          
          <motion.form 
            variants={staggerContainer}
            onSubmit={handleSubmit} 
            className="flex flex-col gap-5 p-6 sm:p-8 rounded-3xl shadow-2xl transition-colors duration-700" style={{ backgroundColor: activeTheme }}
          >
            <div className="flex gap-5 flex-col sm:flex-row">
              <motion.input variants={fadeInUp} type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required placeholder="First Name" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md" />
              <motion.input variants={fadeInUp} type="text" name="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required placeholder="Last Name" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md" />
            </div>
            <motion.input variants={fadeInUp} type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="Email Address" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md" />
            <motion.textarea variants={fadeInUp} name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required placeholder="Your Message" rows="4" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md resize-none"></motion.textarea>
            
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.03, backgroundColor: "#222" }} whileTap={{ scale: 0.97 }}
              type="submit" className="bg-black text-white py-4 px-8 rounded-full font-bold w-full sm:w-auto self-start mt-2"
            >
              Send Message
            </motion.button>
            {status && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-sm font-bold text-white">{status}</motion.p>}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

const HireMe = ({ activeTheme }) => {
  const [inquiry, setInquiry] = useState({ name: '', company: '', email: '', service: 'Full Stack App', budget: '', details: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting inquiry...');
    const payload = {
      firstName: inquiry.name,
      lastName: inquiry.company ? `(${inquiry.company})` : '',
      email: inquiry.email,
      message: `SERVICE: ${inquiry.service}\nBUDGET: ${inquiry.budget}\n\nPROJECT DETAILS:\n${inquiry.details}`
    };
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Inquiry received! I will get back to you within 24 hours.');
        setInquiry({ name: '', company: '', email: '', service: 'Full Stack App', budget: '', details: '' });
      } else {
        setStatus('Failed to send inquiry.');
      }
    } catch (error) {
      setStatus('An error occurred. Is your backend server running?');
    }
  };

  return (
    <motion.section 
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="bg-zinc-950 py-32 px-6 md:px-20 text-white min-h-screen border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 variants={fadeInUp} style={{ color: activeTheme }} className="text-sm font-bold tracking-widest uppercase mb-2">Project Inquiry</motion.h2>
        <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">START A PROJECT</motion.h3>
        <motion.p variants={fadeInUp} className="text-zinc-400 mb-12 text-lg">Please fill out the form below to help me understand your project requirements, scope, and timeline. I review all inquiries carefully and respond promptly.</motion.p>
        
        <motion.form variants={staggerContainer} onSubmit={handleSubmit} className="flex flex-col gap-8 bg-black p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-semibold mb-2 text-zinc-300">Full Name *</label>
              <input type="text" required value={inquiry.name} onChange={(e) => setInquiry({...inquiry, name: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-semibold mb-2 text-zinc-300">Company / Organization</label>
              <input type="text" value={inquiry.company} onChange={(e) => setInquiry({...inquiry, company: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors" />
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-zinc-300">Email Address *</label>
              <input type="email" required value={inquiry.email} onChange={(e) => setInquiry({...inquiry, email: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors" />
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="w-full h-px bg-zinc-800 my-2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-semibold mb-2 text-zinc-300">Primary Service Needed</label>
              <select value={inquiry.service} onChange={(e) => setInquiry({...inquiry, service: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white text-white appearance-none cursor-pointer">
                <option>Full Stack Web Application</option>
                <option>Frontend Architecture (React)</option>
                <option>Backend API Development (Node/Express)</option>
                <option>Database Design & Optimization</option>
                <option>General Technical Consultation</option>
              </select>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-semibold mb-2 text-zinc-300">Estimated Budget (USD)</label>
              <select value={inquiry.budget} onChange={(e) => setInquiry({...inquiry, budget: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white text-white appearance-none cursor-pointer">
                <option value="" disabled>Select a range</option>
                <option>Less than $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-zinc-300">Project Overview & Goals *</label>
              <textarea required rows="5" value={inquiry.details} onChange={(e) => setInquiry({...inquiry, details: e.target.value})} placeholder="Describe the problem you are trying to solve..." className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white resize-none transition-colors"></textarea>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="flex flex-col items-end">
            <motion.button 
              whileHover={{ scale: 1.05, filter: "brightness(1.2)", boxShadow: `0 10px 25px -5px ${activeTheme}` }} whileTap={{ scale: 0.95 }}
              type="submit" style={{ backgroundColor: activeTheme }}
              className="text-white py-4 px-10 rounded-xl font-bold w-full md:w-auto mt-4 transition-all"
            >
              Submit Inquiry
            </motion.button>
            {status && <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ color: activeTheme }} className="text-sm font-bold mt-3 text-right">{status}</motion.p>}
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

// --- MAIN APP COMPONENT ---
const Footer = () => (
  <footer className="bg-black py-8 text-center text-zinc-500 border-t border-zinc-900">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Noor ul Hassan. All rights reserved.
    </p>
  </footer>
);
// --- MAIN APP COMPONENT ---
export default function App() {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || '#6e6363';
  });
  
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem('portfolio_page') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', activeTheme);
    localStorage.setItem('portfolio_page', activePage);
  }, [activeTheme, activePage]);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Hero activeTheme={activeTheme} setActivePage={setActivePage} key="home" />;
      case 'skills': return <Skills activeTheme={activeTheme} key="skills" />;
      case 'projects': return <Projects activeTheme={activeTheme} key="projects" />;
      case 'education': return <Education activeTheme={activeTheme} key="education" />;
      case 'contact': return <Contact activeTheme={activeTheme} key="contact" />;
      case 'hireme': return <HireMe activeTheme={activeTheme} key="hireme" />;
      default: return <Hero activeTheme={activeTheme} setActivePage={setActivePage} key="home" />;
    }
  };

  return (
    <div className="font-sans antialiased selection:bg-white selection:text-black bg-black relative overflow-x-hidden min-h-screen flex flex-col">
      <Navbar activeTheme={activeTheme} setActiveTheme={setActiveTheme} activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* The Footer is now fixed to the bottom of the column */}
      <Footer />
    </div>
  );
}