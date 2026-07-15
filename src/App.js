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
      description: "Core focus on advanced computational mathematics, linear algebra, multivariate optimization, and statistical analysis. Extensive coursework in object-oriented programming, data structures, and algorithmic logic using C++.",
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
    languages: ["C++", "JavaScript", "Java", "HTML/CSS", "SQL"],
    backend: ["Node.js", "Express", "REST APIs", "Relational Database Schemas"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git & GitHub", "VS Code", "Docker", "Postman"]
  },
  projects: [
    {
      id: 1,
      name: "Portfolio Architecture",
      description: "A personal portfolio website showcasing my projects and skills, featuring 3D interactions and serverless backend routing.",
      tech: ["React", "Node.js", "Framer Motion", "Tailwind CSS"],
      link: "https://noor-ul-hassan-portfolio.netlify.app/"
    },
    {
      id: 2,
      name: "Charity Event Management System",
      description: "Designed a comprehensive database schema and implementation strategy with strict data constraints, structural table components, and complex stored procedures.",
      tech: ["SQL", "RDBMS", "Database Architecture"],
      link: "#"
    },
    {
      id: 3,
      name: "Karigar",
      description: "A platform connecting skilled workers with customers, featuring real-time search and dynamic routing.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      link: "#"
    }
  ],
  faqs: [
    { q: "What is your primary tech stack?", a: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) for full-stack web development, and C++ for complex algorithmic logic." },
    { q: "Do you take on freelance projects?", a: "Yes, I am currently available for select freelance opportunities involving frontend architecture or backend API development." },
    { q: "How do you handle database design?", a: "I focus heavily on relational schema design, constraint configurations, and writing efficient SQL scripts to ensure data integrity before writing the application code." }
  ]
};

const scrollReveal3D = {
  hidden: { opacity: 0, rotateX: 45, y: 100, z: -100, scale: 0.8 },
  show: { opacity: 1, rotateX: 0, y: 0, z: 0, scale: 1, transition: { duration: 0.8, type: "spring", bounce: 0.3 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};


// --- ADVANCED ANIMATION VARIANTS ---
const pageVariants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(5px)", y: 20 },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } },
  exit: { opacity: 0, scale: 1.02, filter: "blur(5px)", transition: { duration: 0.3, ease: "easeIn" } }
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
// --- 3D ANIMATION VARIANTS ---
const card3DVariant = {
  hidden: { opacity: 0, rotateX: 30, y: 40 },
  show: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
};

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
      {/* BRAND NAME - Fades out when the mobile menu is open */}
      <motion.div 
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, rotate: -2 }} 
        whileTap={{ scale: 0.95 }}
        onClick={() => !isOpen && handleNavClick('Home')}
        className={`text-xl md:text-2xl font-bold tracking-tighter cursor-pointer z-50 ${isOpen ? 'pointer-events-none' : ''}`}
      >
        {portfolioData.name}
      </motion.div>
      
      {/* DESKTOP MENU (Hidden on Mobile) */}
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
        
        {/* Desktop Theme Picker */}
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

      {/* MOBILE HAMBURGER BUTTON (Only the 3 lines show on the navbar) */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 p-2 focus:outline-none">
        <div className="w-6 h-5 flex flex-col justify-between items-center">
          <span className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-0.5 w-full bg-white rounded-lg transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }} 
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)", transition: { duration: 0.5 } }} 
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)", transition: { duration: 0.4 } }}
            className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden z-40 overflow-y-auto py-10"
          >
            {navItems.map((item, i) => (
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 + 0.1 } }}
                key={item} onClick={() => handleNavClick(item)}
                className="text-3xl font-bold hover:text-gray-400 transition-colors"
                style={{ color: activePage === item.toLowerCase() ? '#fff' : activeTheme }}
              >
                {item}
              </motion.button>
            ))}

            {/* Mobile Theme Picker - Safely inside the scrollable menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
              className="flex items-center gap-4 mt-4 bg-zinc-900/80 px-6 py-4 rounded-full border border-zinc-700 shadow-2xl"
            >
              <span className="font-bold text-lg tracking-wide text-white">Change Theme</span>
              <motion.div 
                whileTap={{ scale: 0.9, rotate: 90 }}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg cursor-pointer"
              >
                <input 
                  type="color" value={activeTheme} onChange={(e) => setActiveTheme(e.target.value)}
                  className="absolute top-[-10px] left-[-10px] w-16 h-16 cursor-pointer border-0 p-0 z-10"
                />
              </motion.div>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
              onClick={() => handleNavClick('HireMe')} 
              className="mt-4 border-2 border-white px-10 py-4 rounded-full text-xl font-bold"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Education = ({ activeTheme, setSelectedImage }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="bg-zinc-950 min-h-screen py-32 px-6 md:px-20 text-white flex flex-col items-center"
  >
    <div className="max-w-4xl mx-auto w-full mb-32">
      <motion.h2 variants={scrollReveal3D} style={{ color: activeTheme }} className="text-sm font-bold tracking-widest uppercase mb-2 text-center md:text-left">Academic Background</motion.h2>
      <motion.h3 variants={scrollReveal3D} className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left">EDUCATION & CERTIFICATIONS</motion.h3>
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer} style={{ perspective: 1500 }} className="space-y-8">
        {portfolioData.education.map((edu, index) => (
          <motion.div 
            key={index} variants={scrollReveal3D} 
            whileHover={{ scale: 1.02, rotateX: 2, z: 30, boxShadow: `0 20px 40px -10px ${activeTheme}30` }}
            whileTap={{ scale: 0.97, z: -20, rotateX: -2 }}
            className="bg-black p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-xl flex flex-col md:flex-row gap-8 transform-gpu cursor-default"
          >
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
              <div style={{ color: activeTheme }} className="text-lg font-bold mb-4 tracking-wide">{edu.institution}</div>
              <p className="text-zinc-500 mb-4 font-mono text-sm">{edu.year}</p>
              <p className="text-zinc-300 leading-relaxed">{edu.description}</p>
            </div>
            {/* Added onClick and cursor-zoom-in here */}
            {edu.image && (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                onClick={() => setSelectedImage(edu.image)}
                className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden border border-zinc-700 shadow-lg cursor-zoom-in"
              >
                <img src={edu.image} alt={edu.degree} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* SCROLL SECTION: Academic Rigor */}
    <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ perspective: 1200 }} className="max-w-4xl mx-auto w-full pt-20 border-t border-zinc-900">
      <motion.h3 variants={scrollReveal3D} className="text-2xl md:text-4xl font-bold mb-8 text-center">Core University Coursework</motion.h3>
      <motion.div variants={scrollReveal3D} whileHover={{ z: 20 }} whileTap={{ scale: 0.98, z: -10 }} className="bg-black p-8 rounded-3xl border border-zinc-800 shadow-2xl transform-gpu">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Data Structures & Algorithms (C++)', 'Object-Oriented Programming', 'Database Management Systems', 'Software Engineering Principles', 'Linear Algebra & Vector Spaces', 'Multivariable Calculus'].map((course, i) => (
            <div key={i} className="flex items-center gap-3">
              <div style={{ backgroundColor: activeTheme }} className="w-2 h-2 rounded-full shrink-0" />
              <span className="text-zinc-300 font-medium">{course}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </motion.section>
);

  const Hero = ({ activeTheme, setActivePage, setSelectedImage }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-20 transition-colors duration-700 relative overflow-hidden flex flex-col items-center" 
    style={{ backgroundColor: activeTheme }}
  >
    {/* MAIN INTRO SECTION - FIXED SIDE-BY-SIDE SPACING */}
    <div className="max-w-6xl mx-auto flex flex-row items-center justify-between w-full gap-6 sm:gap-8 md:gap-12 z-10 pb-32">
      
      {/* LEFT SIDE: TEXT */}
      <motion.div variants={staggerContainer} className="w-[55%] md:w-1/2 text-white text-left">
        <motion.h1 variants={scrollReveal3D} className="text-2xl sm:text-5xl md:text-7xl font-extrabold mb-2 md:mb-4 tracking-tight leading-tight">
          Hi, I'm <br />{portfolioData.name}.
        </motion.h1>
        <motion.p variants={scrollReveal3D} className="text-[11px] sm:text-lg md:text-xl mb-4 md:mb-8 font-light opacity-90 leading-relaxed md:max-w-md pr-2">
          {portfolioData.bio}
        </motion.p>
        <motion.div variants={scrollReveal3D} className="flex flex-col xl:flex-row justify-start gap-3 md:gap-4">
          <motion.button 
            onClick={() => setActivePage('projects')} 
            whileHover={{ scale: 1.05, z: 20, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }} 
            whileTap={{ scale: 0.95, z: -10 }} 
            className="bg-black text-white px-4 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg transition-all text-xs md:text-base transform-gpu"
          >
            View Work
          </motion.button>
          <motion.button 
            onClick={() => setActivePage('hireme')} 
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff", borderColor: "#000", z: 20 }} 
            whileTap={{ scale: 0.95, z: -10 }} 
            className="border-2 border-white text-white px-4 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all text-xs md:text-base transform-gpu"
          >
            Hire Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: IMAGE (Fixed Size & Added onClick Modal) */}
      <motion.div variants={scrollReveal3D} style={{ perspective: 1000 }} className="w-[45%] md:w-1/2 flex justify-end">
        <motion.div 
          animate={floatingAnim}
          whileHover={{ scale: 1.05, rotateX: 15, rotateY: -15, z: 50, boxShadow: "0 30px 60px rgba(0,0,0,0.6)", transition: { duration: 0.3 } }} 
          whileTap={{ scale: 0.9, rotateX: -10, rotateY: 10, z: -30 }}
          onClick={() => setSelectedImage(myPhoto)}
          className="w-28 h-28 sm:w-48 sm:h-48 md:w-96 md:h-96 bg-black/20 rounded-full border-2 md:border-4 border-black flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm cursor-zoom-in transform-gpu transition-all shrink-0"
        >
          <img src={myPhoto} alt={portfolioData.name} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>

    {/* SCROLL INDICATOR */}
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
      className="w-full flex flex-col items-center gap-2 text-white/80 pb-32"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Discover</span>
      <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center p-1">
        <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-2 bg-white rounded-full" />
      </div>
    </motion.div>

    {/* SCROLL SECTION 1: My Approach */}
    <motion.div 
      initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer} style={{ perspective: 1200 }}
      className="max-w-5xl mx-auto w-full text-white text-center pb-32 mt-10"
    >
      <motion.h2 variants={scrollReveal3D} className="text-3xl md:text-5xl font-bold mb-12">My Approach</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          variants={scrollReveal3D} 
          whileHover={{ z: 40, rotateX: 5, rotateY: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }} 
          whileTap={{ scale: 0.95, z: -20, rotateX: 0, rotateY: 0 }} 
          className="bg-black/40 p-10 rounded-3xl border border-white/10 backdrop-blur-md transform-gpu cursor-pointer transition-all"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: activeTheme }}>Frontend Excellence</h3>
          <p className="text-white/80 leading-relaxed">Focusing on fluid animations, responsive layouts, and modern architecture using React and Tailwind CSS to create highly interactive, memorable user experiences across all devices.</p>
        </motion.div>
        <motion.div 
          variants={scrollReveal3D} 
          whileHover={{ z: 40, rotateX: 5, rotateY: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }} 
          whileTap={{ scale: 0.95, z: -20, rotateX: 0, rotateY: 0 }} 
          className="bg-black/40 p-10 rounded-3xl border border-white/10 backdrop-blur-md transform-gpu cursor-pointer transition-all"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: activeTheme }}>Backend Logic</h3>
          <p className="text-white/80 leading-relaxed">Building secure, scalable REST APIs with Node.js and Express. I prioritize strict algorithmic logic, data validation, and seamless integration between the server and the frontend.</p>
        </motion.div>
      </div>
    </motion.div>

    {/* SCROLL SECTION 2: Current Engineering Focus */}
    <motion.div 
      initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer} style={{ perspective: 1500 }}
      className="max-w-6xl mx-auto w-full pt-16 border-t border-white/10"
    >
      <motion.h2 variants={scrollReveal3D} className="text-3xl md:text-5xl font-bold mb-12 text-white text-center">Engineering Focus</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <motion.div 
          variants={scrollReveal3D} 
          whileHover={{ y: -10, z: 30, scale: 1.02, backgroundColor: "#111" }} 
          whileTap={{ scale: 0.95, z: -20, y: 0 }}
          className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 transform-gpu cursor-pointer shadow-xl text-left"
        >
          <div style={{ backgroundColor: activeTheme }} className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-black font-bold text-xl">1</div>
          <h3 className="text-xl font-bold text-white mb-3">MERN Stack Architecture</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Developing end-to-end web applications utilizing MongoDB, Express, React, and Node.js, managed through automated deployment pipelines on Vercel.</p>
        </motion.div>

        <motion.div 
          variants={scrollReveal3D} 
          whileHover={{ y: -10, z: 30, scale: 1.02, backgroundColor: "#111" }} 
          whileTap={{ scale: 0.95, z: -20, y: 0 }}
          className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 transform-gpu cursor-pointer shadow-xl text-left"
        >
          <div style={{ backgroundColor: activeTheme }} className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-black font-bold text-xl">2</div>
          <h3 className="text-xl font-bold text-white mb-3">Complex Data Structures</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Programming and optimizing advanced algorithms in C++, with a strong focus on self-balancing search trees (AVL, Red-Black), heaps, and custom sorting logic.</p>
        </motion.div>

        <motion.div 
          variants={scrollReveal3D} 
          whileHover={{ y: -10, z: 30, scale: 1.02, backgroundColor: "#111" }} 
          whileTap={{ scale: 0.95, z: -20, y: 0 }}
          className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 transform-gpu cursor-pointer shadow-xl text-left"
        >
          <div style={{ backgroundColor: activeTheme }} className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-black font-bold text-xl">3</div>
          <h3 className="text-xl font-bold text-white mb-3">Database Normalization</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Designing relational database schemas utilizing BCNF and 4NF methodologies, paired with advanced SQL correlated subqueries for maximum data integrity.</p>
        </motion.div>

      </div>
    </motion.div>
  </motion.section>
);

const Skills = ({ activeTheme }) => (
  <motion.section 
    variants={pageVariants} initial="initial" animate="animate" exit="exit"
    className="bg-zinc-950 min-h-screen py-32 px-6 md:px-20 text-white flex flex-col items-center"
  >
    <div className="max-w-6xl mx-auto w-full mb-32">
      <motion.h2 variants={scrollReveal3D} style={{ color: activeTheme }} className="text-sm font-bold tracking-widest uppercase mb-2">Technical Rigor</motion.h2>
      <motion.h3 variants={scrollReveal3D} className="text-3xl md:text-5xl font-bold mb-12">MY SKILLSET</motion.h3>
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer} style={{ perspective: 1200 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {Object.entries(portfolioData.skills).map(([category, skillsList], index) => (
          <motion.div 
            key={index} variants={scrollReveal3D} 
            whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10, z: 40, borderColor: activeTheme, boxShadow: `0 20px 40px -10px ${activeTheme}60` }} 
            whileTap={{ scale: 0.95, z: -20, rotateX: 0, rotateY: 0 }} 
            className="border border-zinc-800 p-6 rounded-2xl transition-colors duration-300 bg-black shadow-lg cursor-pointer transform-gpu"
          >
            <h4 style={{ color: activeTheme }} className="text-xl font-semibold mb-6 capitalize">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill, idx) => (
                <span key={idx} className="bg-zinc-900 text-sm px-3 py-1.5 rounded-md border border-zinc-800">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* NEW SCROLL SECTION: Deep Dive */}
    <motion.div 
      initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}
      variants={staggerContainer} style={{ perspective: 1000 }}
      className="max-w-4xl mx-auto w-full border-t border-zinc-800 pt-32"
    >
      <motion.h3 variants={scrollReveal3D} className="text-2xl md:text-4xl font-bold mb-8 text-center">Development Focus</motion.h3>
      <motion.div variants={scrollReveal3D} whileHover={{ rotateX: 2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-black p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl transform-gpu">
        <h4 style={{ color: activeTheme }} className="text-xl font-bold mb-4">The MERN Stack & Beyond</h4>
        <p className="text-zinc-400 mb-6 leading-relaxed">
          My primary development architecture revolves around MongoDB, Express, React, and Node.js. This allows me to build seamless, single-page applications with robust backend routing. Furthermore, my foundation in C++ and advanced object-oriented programming ensures that my code is not just functional, but highly optimized for complex logic and data structures.
        </p>
      </motion.div>
    </motion.div>
  </motion.section>
);

const Projects = ({ activeTheme }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = portfolioData.projects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <motion.section 
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="bg-black min-h-screen py-32 px-6 md:px-20 text-white flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto w-full mb-32">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.h2 variants={scrollReveal3D} className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Work that speaks<br className="hidden sm:block"/>for itself.
          </motion.h2>

          {/* Search Bar */}
          <motion.div variants={scrollReveal3D} className="relative w-full md:w-80 z-20">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border-2 border-zinc-800 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-white transition-colors"
            />
          </motion.div>
        </div>
        
        {/* THE FIX: Added AnimatePresence and layout props for dynamic sliding */}
        <motion.div layout className="flex flex-col gap-8 md:gap-10" style={{ perspective: 1500 }}>
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 && (
              <motion.div 
                layout 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20 bg-zinc-950 rounded-3xl border border-zinc-800"
              >
                <p className="text-xl text-zinc-400">No projects found matching "{searchQuery}"</p>
                <button onClick={() => setSearchQuery('')} style={{ color: activeTheme }} className="mt-4 font-bold underline">Clear Search</button>
              </motion.div>
            )}

            {filteredProjects.map((project) => (
              <motion.div 
                layout // <--- This magic word allows them to slide dynamically
                initial={{ opacity: 0, rotateX: 45, y: 50, z: -50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, z: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: 1, z: 40, backgroundColor: "#111", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)" }} 
                whileTap={{ scale: 0.95, rotateX: -5, z: -30 }}
                key={project.id} 
                className="bg-zinc-950 border border-zinc-800 p-6 md:p-10 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl transition-colors transform-gpu cursor-pointer z-10"
              >
                <div className="w-full md:w-3/4">
                  <div style={{ color: activeTheme }} className="font-mono text-sm mb-3 font-bold tracking-widest">0{project.id}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
                  <p className="text-zinc-400 mb-6 max-w-lg text-sm md:text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs font-bold bg-black px-4 py-2 rounded-full text-zinc-300 border border-zinc-800 shadow-inner">{tech}</span>
                    ))}
                  </div>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: activeTheme, borderColor: activeTheme, color: "#fff", boxShadow: `0 0 20px ${activeTheme}40` }} 
                  whileTap={{ scale: 0.9 }} 
                  href={project.link} 
                  className="mt-8 md:mt-0 w-full md:w-auto text-center border-2 border-zinc-700 px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Live
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Development Process Section */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ perspective: 1200 }} className="max-w-6xl mx-auto w-full pt-20 border-t border-zinc-900">
        <motion.h3 variants={scrollReveal3D} className="text-2xl md:text-4xl font-bold mb-12 text-center">My Development Pipeline</motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['1. Architecture', '2. Execution', '3. Deployment'].map((step, i) => (
            <motion.div 
              key={i} variants={scrollReveal3D} 
              whileHover={{ y: -10, z: 30, borderColor: activeTheme }} 
              whileTap={{ scale: 0.95, z: -20, rotateX: 10 }}
              className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center transform-gpu shadow-xl"
            >
              <h4 style={{ color: activeTheme }} className="text-xl font-bold mb-4">{step}</h4>
              <p className="text-zinc-400 text-sm">
                {i === 0 && "Database normalization, UML diagrams, and mapping out the precise algorithmic logic before writing any code."}
                {i === 1 && "Writing clean, modular React frontend components powered by a secure Node.js/Express REST API."}
                {i === 2 && "Deploying serverless functions and frontend assets via Vercel for maximum performance and global edge delivery."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

const Contact = ({ activeTheme }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else setStatus('Failed to send message.');
    } catch (error) { setStatus('An error occurred. Please try again later.'); }
  };

  // NEW: Social Links Data with Icons
  const socialLinks = [
    {
      name: "GitHub",
      url: "#", // Replace with your GitHub link
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
    },
    {
      name: "LinkedIn",
      url: "#", // Replace with your LinkedIn link
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
    },
    {
      name: "Resume",
      url: "#", // Replace with your resume PDF link
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
    }
  ];

  return (
    <motion.section 
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="bg-black py-32 px-6 md:px-20 text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 variants={scrollReveal3D} className="text-5xl md:text-[100px] font-black tracking-tighter leading-none mb-12 opacity-90 text-center md:text-left">SAY HELLO</motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: false }} variants={staggerContainer} className="flex flex-col justify-center">
            <motion.p variants={scrollReveal3D} className="text-xl md:text-3xl font-medium mb-6">Let's build something great together.</motion.p>
            <motion.p variants={scrollReveal3D} className="text-zinc-400 mb-2">Email me directly at:</motion.p>
            <motion.a variants={scrollReveal3D} whileHover={{ x: 10, filter: "brightness(1.5)" }} whileTap={{ scale: 0.95 }} href={`mailto:${portfolioData.email}`} className="text-xl md:text-3xl font-bold underline break-all inline-block mb-10" style={{ color: activeTheme }}>
              {portfolioData.email}
            </motion.a>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer} style={{ perspective: 1500 }}>
            <motion.form 
              variants={scrollReveal3D}
              whileHover={{ z: 20, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.98, z: -10, rotateX: 0, rotateY: 0 }}
              onSubmit={handleSubmit} 
              className="flex flex-col gap-5 p-8 rounded-3xl shadow-2xl transition-colors duration-700 transform-gpu" 
              style={{ backgroundColor: activeTheme }}
            >
              <div className="flex gap-5 flex-col sm:flex-row">
                <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required placeholder="First Name" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md" />
                <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required placeholder="Last Name" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md" />
              </div>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="Email Address" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md" />
              <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required placeholder="Your Message" rows="4" className="w-full bg-transparent border-b-2 border-white/40 p-3 placeholder-white/80 text-white focus:outline-none focus:border-white focus:bg-black/10 rounded-t-md resize-none"></textarea>
              
              <motion.button whileHover={{ scale: 1.03, backgroundColor: "#222" }} whileTap={{ scale: 0.95 }} type="submit" className="bg-black text-white py-4 px-8 rounded-full font-bold w-full sm:w-auto self-start mt-2 shadow-lg flex items-center justify-center gap-2">
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </motion.button>
              {status && <p className="mt-2 text-sm font-bold text-white">{status}</p>}
            </motion.form>
          </motion.div>
        </div>

        {/* UPDATED SCROLL SECTION: Social Links with Icons */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ perspective: 1000 }} className="border-t border-zinc-900 pt-20 pb-10 text-center">
          <motion.h3 variants={scrollReveal3D} className="text-2xl font-bold mb-8">Other Ways to Connect</motion.h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* Map over the new socialLinks array */}
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i} variants={scrollReveal3D} 
                whileHover={{ y: -5, z: 20, borderColor: activeTheme, color: activeTheme }}
                whileTap={{ scale: 0.9, z: -20, backgroundColor: activeTheme, color: "#fff" }}
                href={link.url} 
                className="flex items-center justify-center gap-3 border border-zinc-800 bg-zinc-950 px-8 py-4 rounded-full font-bold text-zinc-300 transition-colors transform-gpu cursor-pointer shadow-lg"
              >
                {link.icon}
                {link.name}
              </motion.a>
            ))}

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const HireMe = ({ activeTheme }) => {
  const [inquiry, setInquiry] = useState({ firstName: '', company: '', email: '', service: 'Full Stack Web Application', budget: '', details: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting inquiry...');
    const payload = { firstName: inquiry.firstName, lastName: inquiry.company ? `(${inquiry.company})` : '', email: inquiry.email, message: `SERVICE: ${inquiry.service}\nBUDGET: ${inquiry.budget}\n\nDETAILS:\n${inquiry.details}` };
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (result.success) {
        setStatus('Inquiry received! I will get back to you within 24 hours.');
        setInquiry({ firstName: '', company: '', email: '', service: 'Full Stack Web Application', budget: '', details: '' });
      } else setStatus('Failed to send inquiry.');
    } catch (error) { setStatus('An error occurred. Please try again later.'); }
  };

  return (
    <motion.section 
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="bg-zinc-950 py-32 px-6 md:px-20 text-white min-h-screen border-t border-zinc-900"
    >
      <div className="max-w-4xl mx-auto w-full mb-32">
        <motion.h2 variants={scrollReveal3D} style={{ color: activeTheme }} className="text-sm font-bold tracking-widest uppercase mb-2">Project Inquiry</motion.h2>
        <motion.h3 variants={scrollReveal3D} className="text-3xl md:text-5xl font-bold mb-6">START A PROJECT</motion.h3>
        <motion.p variants={scrollReveal3D} className="text-zinc-400 mb-12 text-lg">Please fill out the form below to help me understand your project requirements.</motion.p>
        
        <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer} style={{ perspective: 1500 }}>
          <motion.form variants={scrollReveal3D} whileHover={{ z: 20, rotateX: 1 }} whileTap={{ scale: 0.98, z: -10 }} onSubmit={handleSubmit} className="flex flex-col gap-8 bg-black p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl transform-gpu transition-all">
            {/* Form Inputs (Same as before) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block text-sm font-semibold mb-2 text-zinc-300">Full Name *</label><input type="text" required value={inquiry.firstName} onChange={(e) => setInquiry({...inquiry, firstName: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors" /></div>
              <div><label className="block text-sm font-semibold mb-2 text-zinc-300">Company</label><input type="text" value={inquiry.company} onChange={(e) => setInquiry({...inquiry, company: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors" /></div>
              <div className="md:col-span-2"><label className="block text-sm font-semibold mb-2 text-zinc-300">Email Address *</label><input type="email" required value={inquiry.email} onChange={(e) => setInquiry({...inquiry, email: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white transition-colors" /></div>
            </div>
            <div className="w-full h-px bg-zinc-800 my-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-300">Service Needed</label>
                <select value={inquiry.service} onChange={(e) => setInquiry({...inquiry, service: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white text-white appearance-none cursor-pointer">
                  <option>Full Stack Web Application</option><option>Frontend Architecture</option><option>Backend API Development</option><option>Database Design & Optimization</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-zinc-300">Budget</label>
                <select value={inquiry.budget} onChange={(e) => setInquiry({...inquiry, budget: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white text-white appearance-none cursor-pointer">
                  <option value="" disabled>Select a range</option><option>Less than $1,000</option><option>$1,000 - $3,000</option><option>$3,000 - $10,000</option>
                </select>
              </div>
              <div className="md:col-span-2"><label className="block text-sm font-semibold mb-2 text-zinc-300">Project Overview *</label><textarea required rows="5" value={inquiry.details} onChange={(e) => setInquiry({...inquiry, details: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:outline-none focus:border-white resize-none transition-colors"></textarea></div>
            </div>
            <button type="submit" style={{ backgroundColor: activeTheme }} className="text-white py-4 px-10 rounded-xl font-bold w-full md:w-auto mt-4 transition-all">Submit Inquiry</button>
            {status && <p style={{ color: activeTheme }} className="text-sm font-bold mt-3 text-right">{status}</p>}
          </motion.form>
        </motion.div>
      </div>

      {/* NEW SCROLL SECTION: FAQs */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ perspective: 1000 }} className="max-w-4xl mx-auto w-full pt-20 border-t border-zinc-800">
        <motion.h3 variants={scrollReveal3D} className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</motion.h3>
        <div className="flex flex-col gap-6">
          {portfolioData.faqs.map((faq, index) => (
            <motion.div 
              key={index} variants={scrollReveal3D} 
              whileHover={{ scale: 1.02, z: 20, borderColor: activeTheme }} 
              whileTap={{ scale: 0.98, z: -10 }}
              className="bg-black border border-zinc-800 p-6 rounded-2xl transform-gpu cursor-pointer"
            >
              <h4 className="text-lg font-bold mb-2 text-white">{faq.q}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

const Footer = () => (
  <footer className="bg-black py-8 text-center text-zinc-500 border-t border-zinc-900">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Noor ul Hassan. All rights reserved.
    </p>
  </footer>
);

// --- MAIN APP COMPONENT ---
// --- FULLSCREEN IMAGE MODAL ---
const ImageModal = ({ selectedImage, setSelectedImage }) => (
  <AnimatePresence>
    {selectedImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedImage(null)}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
      >
        <motion.img
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }}
          exit={{ scale: 0.8, opacity: 0 }}
          src={selectedImage}
          alt="Expanded view"
          className="max-w-full max-h-full rounded-2xl shadow-2xl border-2 border-white/10"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || '#6e6363';
  });

  const [selectedImage, setSelectedImage] = useState(null);
  
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

      <Footer />
    </div>
  );
}