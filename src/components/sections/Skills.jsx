import { useState, useEffect, useRef } from "react";
import { Code, Database, Globe, Smartphone, Server, Shield, Brain, Zap, Cpu, Cloud } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: 0,
      title: "Frontend",
      icon: Globe,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React.js", proficiency: "Advanced", description: "Component architecture, custom hooks, Context API, Router, state management & performance optimization" },
        { name: "Next.js", proficiency: "Advanced", description: "App router, SSR, SSG, API routes, server components, SEO & optimization" },
        { name: "JavaScript (ES6+)", proficiency: "Advanced", description: "Async/await, promises, closures, functional programming, DOM manipulation & ES Next features" },
        { name: "Tailwind CSS", proficiency: "Advanced", description: "Utility-first styling, responsive layouts, custom design tokens, dark mode" },
        { name: "HTML5 & CSS3", proficiency: "Expert", description: "Semantic markup, flexbox, grid layouts, animations, accessibility (a11y) & responsive design" },
        { name: "React Router", proficiency: "Advanced", description: "Nested routing, dynamic route parameters, protected routes & navigation guards" },
      ]
    },
    {
      id: 1,
      title: "Backend & DB",
      icon: Server,
      color: "from-slate-400 to-blue-500",
      skills: [
        { name: "Node.js & Express.js", proficiency: "Advanced", description: "RESTful APIs, middleware architecture, route authorization & microservices" },
        { name: "MongoDB & Mongoose", proficiency: "Advanced", description: "Document data modeling, schema validation, aggregation pipelines & indexing" },
        { name: "Socket.io", proficiency: "Advanced", description: "Real-time bi-directional messaging, web-mobile sync, presence tracking & event handling" },
        { name: "JWT & RBAC", proficiency: "Advanced", description: "Token authentication, refresh tokens, role-based access control & secure session handling" },
        { name: "MySQL", proficiency: "Intermediate", description: "Relational database schema design, SQL queries, indexing & joins" },
        { name: "REST APIs", proficiency: "Expert", description: "Clean API design, status codes, payload validation & error handling standards" },
      ]
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-sky-400 to-blue-600",
      skills: [
        { name: "React Native & Expo", proficiency: "Advanced", description: "Cross-platform mobile engineering, Play Store releases, native module integrations" },
        { name: "expo-local-authentication", proficiency: "Advanced", description: "Biometric authentication (Fingerprint, Face ID, Passcode) for secure mobile vaults" },
        { name: "expo-file-system", proficiency: "Advanced", description: "Mobile document & media rendering, offline file caching & file management" },
        { name: "React Navigation", proficiency: "Advanced", description: "Stack, tab, drawer navigators, deep linking & mobile state persistence" },
        { name: "Android Studio", proficiency: "Intermediate", description: "Emulators, APK release builds, Play Data Safety filings & debugging" },
        { name: "Mobile API Integration", proficiency: "Advanced", description: "Axios/Fetch, token refresh handlers, offline queuing & error recovery" },
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-cyan-400 to-teal-500",
      skills: [
        { name: "AWS (EC2, SES)", proficiency: "Advanced", description: "Virtual servers, Nginx reverse proxy, automated email services & cloud hosting" },
        { name: "Vercel & Render", proficiency: "Advanced", description: "Serverless deployments, continuous deployment, custom domain setup & env variables" },
        { name: "Nginx & PM2", proficiency: "Advanced", description: "Reverse proxy, SSL setup, process management, log rotation & production uptime" },
        { name: "Git & GitHub Actions", proficiency: "Advanced", description: "Branching strategies, automated CI/CD pipelines, Jest test runners & staging deploys" },
      ]
    },
    {
      id: 4,
      title: "Languages & Tools",
      icon: Cpu,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "JavaScript & Python", proficiency: "Advanced", description: "Core algorithms, scripting, web development & automation tools" },
        { name: "C++", proficiency: "Proficient", description: "Data structures, object-oriented programming & algorithmic problem solving" },
        { name: "VS Code, Cursor & AI Tools", proficiency: "Expert", description: "Antigravity, Claude, prompt engineering & rapid development workflows" },
        { name: "Postman & MongoDB Compass", proficiency: "Advanced", description: "API testing collections, mock servers, database queries & profiling" },
        { name: "Mixpanel", proficiency: "Intermediate", description: "Product analytics, event tracking & user engagement funnels" },
      ]
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

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-gray-500 tracking-wider">TECHNICAL EXPERTISE</span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Full-stack software engineering toolkit across modern web frameworks, mobile ecosystems, 
            cloud infrastructure, and API integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="space-y-4 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Skill Categories</h3>
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left group ${
                    selectedCategory === category.id
                      ? 'bg-blue-500/10 border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'bg-gray-900/30 border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        selectedCategory === category.id ? 'text-blue-400' : 'text-white'
                      }`}>
                        {category.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            {(() => {
              const IconComponent = skillCategories[selectedCategory].icon;
              return (
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${skillCategories[selectedCategory].color} bg-opacity-10`}>
                      <IconComponent className={`w-8 h-8 bg-gradient-to-r ${skillCategories[selectedCategory].color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {skillCategories[selectedCategory].title}
                      </h3>
                      <p className="text-gray-400">
                        {skillCategories[selectedCategory].skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {skillCategories[selectedCategory].skills.map((skill, idx) => (
                      <div
                        key={skill.name}
                        className={`p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 transition-all duration-500 group ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${600 + idx * 100}ms` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                {skill.name}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Learning Path */}
            <div className={`mt-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Core Pillars</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">Production Apps</h5>
                    <p className="text-xs text-gray-400">Play Store & Web Deployments</p>
                  </div>
                  <div className="text-center p-4">
                    <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">API Integrations</h5>
                    <p className="text-xs text-gray-400">DigiLocker, OAuth, Socket.io</p>
                  </div>
                  <div className="text-center p-4">
                    <Code className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">Hackathons</h5>
                    <p className="text-xs text-gray-400">BuildFest & Quantum 2.0 Finalist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
