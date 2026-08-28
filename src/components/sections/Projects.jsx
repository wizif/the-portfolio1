import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code, Database, Globe, Smartphone, Chrome, Award, Zap } from "lucide-react";

// Import project images
import devconnectImg from '../../assets/Images/devconnect.png';
import devCollabImg from '../../assets/Images/dev-collab.png';
import spotifyImg from '../../assets/Images/Spotify.png';
import wiseImg from '../../assets/Images/wise.png';
import preplockImg from '../../assets/Images/preplock.png';
import mobileAppImg from '../../assets/Images/mobile-app-demo-project-image1.jpg';
import chatAppImg from '../../assets/Images/web-project-image.webp';
import foodAppImg from '../../assets/Images/web-demo-projectimage.jpg';
import streamYtImg from '../../assets/Images/web-project-another.png';
import netflixGptImg from '../../assets/Images/web-demo-2-project-last-image.jpeg';
import psb from '../../assets/Images/Psb1.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    // 1. DevConnect (From Resume)
    {
      id: 5,
      title: "DevConnect -- Developer Networking Platform",
      description: "Deployed live app on AWS with profile management, developer connections, real-time WebSocket chat, and background email notifications.",
      longDescription: "Full-stack developer networking platform built with MERN stack, deployed on AWS EC2 behind Nginx. Features real-time chat via WebSockets, profile matching algorithms, automated background notifications, JWT authentication, and responsive UI.",
      technologies: ["MERN", "AWS EC2", "Socket.io", "Nginx", "MongoDB", "Express", "React", "Node.js"],
      image: devconnectImg,
      platforms: ["Web"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/DevCollabify",
      liveUrl: "https://dev-collabifiy.vercel.app/",
      featured: true
    },

    // 2. WiseMate (From Resume)
    {
      id: 10,
      title: "WiseMate -- AI Learning Assistant",
      description: "AI learning platform featuring 5 core tools: diagram generator, study planner, code reviewer, career roadmaps, and chatbot.",
      longDescription: "Created an AI-powered educational platform featuring 5 distinct tools: smart diagram generator using Mermaid.js from text descriptions, AI study planner, context-aware code reviewer, career roadmaps, and academic query chatbot with Cloudinary media storage.",
      technologies: ["MERN", "Gemini API", "Mermaid.js", "Cloudinary", "React", "Node.js"],
      image: wiseImg,
      platforms: ["Web"],
      status: "Hackathon Top 10",
      githubUrl: "https://github.com/wizif/AI_STUDENT_ASSISTANT",
      liveUrl: "",
      featured: true,
      achievement: "Top 10 Finalist (Next Quantum 2.0)"
    },

    // 3. PrepLock (From Resume)
    {
      id: 2,
      title: "PrepLock -- Multi-Platform Productivity App",
      description: "Cross-platform study productivity suite (Chrome extension, website, mobile app) that blocks distractions until tasks are done.",
      longDescription: "BuildFest Hackathon Top 15 multi-platform productivity suite featuring a Chrome Extension, web portal, and React Native mobile app. Includes Gemini AI for flashcard generation, real-time cross-platform data sync with JWT authentication, and Pomodoro task blocking.",
      technologies: ["MERN", "React Native", "Gemini API", "Chrome Extension", "Firebase"],
      image: preplockImg,
      platforms: ["Web", "Mobile", "Chrome Extension"],
      status: "Hackathon Top 15",
      githubUrl: "https://github.com/wizif/ProductivityWithNoDistraction",
      liveUrl: "",
      featured: true,
      achievement: "Top 15 / 115 Teams (DevCreate BuildFest 1.0)"
    },

    // 4. Dev Collaboration & Workflow Automation
    {
      id: 1,
      title: "Dev Collaboration & Workflow Automation",
      description: "Enterprise automation platform with AWS services (EC2, S3, Lambda, RDS) and n8n workflow engine for scalable project management.",
      longDescription: "Production-grade MERN stack platform integrated with AWS cloud infrastructure. Implements microservices architecture with n8n automation, Cognito authentication, S3 object storage, Lambda serverless functions, and PostgreSQL RDS.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "n8n", "PostgreSQL", "Cognito", "Lambda"],
      image: devCollabImg,
      platforms: ["Web"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/Dev_Workflow_and_collaboration_platform",
      liveUrl: "https://devprojectflow-web-platform-devflow.vercel.app/",
      featured: true
    },

    // 5. Spotify Clone
    {
      id: 11,
      title: "Spotify Clone",
      description: "Full-stack music streaming platform with admin panel, Cloudinary media management, and complete CRUD operations.",
      longDescription: "Professional music streaming application featuring an admin dashboard for uploading albums and songs via Cloudinary, user authentication, playlist management, custom audio player with controls, and search functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "Express", "Tailwind CSS"],
      image: spotifyImg,
      platforms: ["Web"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/Spotify-FullStack",
      liveUrl: "https://musicon-arv1.vercel.app/",
      featured: true
    },

    // 6. PSB Financial Hub
    {
      id: 3,
      title: "PSB Financial Hub",
      description: "Financial literacy mobile app built for public sector banks with interactive lessons, quizzes, and fraud prevention scenarios.",
      longDescription: "Educational mobile platform built for public sector bank hackathons. Features multi-screen navigation, progress tracking with AsyncStorage, offline-first architecture, and gamified financial learning modules.",
      technologies: ["React Native", "CLI", "AsyncStorage", "JavaScript", "Node.js", "MongoDB"],
      image: psb,
      platforms: ["Mobile"],
      status: "Hackathon Project",
      githubUrl: "https://github.com/singhwarvind/SeCure",
      liveUrl: "",
      featured: true
    },

    // 7. Real-Time Chat
    {
      id: 6,
      title: "Real-Time Chat System",
      description: "Cross-platform messaging app with Socket.io, Firebase auth, and web-mobile sync.",
      longDescription: "Dual-platform real-time communication system using WebSocket protocol with Socket.io. Features presence indicators, typing feedback, read receipts, and encrypted storage.",
      technologies: ["React", "React Native", "Socket.io", "MongoDB", "Firebase"],
      image: chatAppImg,
      platforms: ["Web", "Mobile"],
      status: "In Development",
      githubUrl: "https://github.com/wizif/Chat-App",
      liveUrl: ""
    },

    // 8. TaskMaster
    {
      id: 4,
      title: "TaskMaster",
      description: "Offline-first mobile productivity app with task management, notes, and analytics charts.",
      longDescription: "Feature-rich React Native app utilizing AsyncStorage for offline persistence, custom task categorization, and trend analytics charts.",
      technologies: ["React Native", "AsyncStorage", "Charts"],
      image: mobileAppImg,
      platforms: ["Mobile"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/offline-productivity-app1",
      liveUrl: ""
    },

    // 9. FoodApp
    {
      id: 7,
      title: "FoodApp",
      description: "Performance-optimized restaurant discovery platform with shimmer UI and dynamic search filters.",
      longDescription: "React application implementing code splitting, React Router nested routes, API integration, dynamic debounced search, and responsive card layouts.",
      technologies: ["React", "React Router", "JavaScript", "CSS3"],
      image: foodAppImg,
      platforms: ["Web"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/food-app",
      liveUrl: ""
    },

    // 10. StreamYT
    {
      id: 8,
      title: "StreamYT",
      description: "YouTube-inspired video platform leveraging YouTube Data API with search debouncing and pagination.",
      longDescription: "Video streaming interface built with YouTube Data API featuring request debouncing, state management for watch history, responsive video grids, and caching.",
      technologies: ["React", "YouTube API", "JavaScript", "CSS3"],
      image: streamYtImg,
      platforms: ["Web"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/Youtube-clone",
      liveUrl: ""
    },

    // 11. NetflixGPT
    {
      id: 9,
      title: "NetflixGPT",
      description: "Movie browsing UI with Firebase authentication, TMDB API, and AI-powered content recommendations.",
      longDescription: "Netflix-inspired React application with Firebase authentication system, movie browsing using TMDB API, watchlist management, and AI-assisted content discovery.",
      technologies: ["React", "Firebase", "TMDB API", "AI Integration"],
      image: netflixGptImg,
      platforms: ["Web"],
      status: "Completed",
      githubUrl: "https://github.com/wizif/Netflix-GPT",
      liveUrl: ""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getStatusConfig = (status) => {
    const configs = {
      'Completed': {
        color: 'from-emerald-500/20 to-green-500/20',
        text: 'text-emerald-400',
        border: 'border-emerald-500/40',
        icon: Zap
      },
      'In Development': {
        color: 'from-orange-500/20 to-amber-500/20',
        text: 'text-orange-400',
        border: 'border-orange-500/40',
        icon: Code
      },
      'Hackathon Top 15': {
        color: 'from-yellow-500/20 to-amber-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/40',
        icon: Award
      },
      'Hackathon Top 10': {
        color: 'from-yellow-500/20 to-amber-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/40',
        icon: Award
      },
      'Hackathon Project': {
        color: 'from-blue-500/20 to-cyan-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        icon: Code
      }
    };
    return configs[status] || configs['Completed'];
  };

  const getPlatformConfig = (platform) => {
    const configs = {
      'Web': { icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
      'Mobile': { icon: Smartphone, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
      'Chrome Extension': { icon: Chrome, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' }
    };
    return configs[platform] || configs['Web'];
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Selected
            </span>
            {' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world applications demonstrating full-stack development, 
            cloud architecture, and mobile engineering expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {projects.map((project, idx) => {
            const statusConfig = getStatusConfig(project.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/60 overflow-hidden hover:border-gray-700/60 transition-all duration-500 h-full flex flex-col">
                  {/* Image Area */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
                    
                    {/* Project Image */}
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Platform Badges */}
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      {project.platforms.map((platform) => {
                        const config = getPlatformConfig(platform);
                        const PlatformIcon = config.icon;
                        return (
                          <div 
                            key={platform}
                            className={`${config.bg} ${config.border} border backdrop-blur-md rounded-lg px-2.5 py-1.5 flex items-center gap-1.5`}
                          >
                            <PlatformIcon className={`w-3.5 h-3.5 ${config.color}`} />
                            <span className={`text-xs font-medium ${config.color}`}>{platform}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`bg-gradient-to-r ${statusConfig.color} backdrop-blur-md rounded-lg px-3 py-1.5 border ${statusConfig.border} flex items-center gap-1.5`}>
                        <StatusIcon className={`w-3.5 h-3.5 ${statusConfig.text}`} />
                        <span className={`text-xs font-semibold ${statusConfig.text}`}>{project.status}</span>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    {project.achievement && (
                      <div className="absolute bottom-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-md rounded-lg px-3 py-1.5 border border-yellow-500/40">
                          <span className="text-xs font-bold text-yellow-400">{project.achievement}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 rounded-md border border-gray-700/50 hover:border-blue-500/40 hover:text-blue-400 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white rounded-lg transition-all border border-gray-700/50 hover:border-gray-600/50 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-400 mb-6">
            Explore more projects and contributions on GitHub
          </p>
          <a
            href="https://github.com/wizif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white rounded-lg transition-all border border-gray-700/50 hover:border-gray-600/50"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Repositories (@wizif)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
