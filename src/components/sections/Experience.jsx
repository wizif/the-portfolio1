import { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExp, setActiveExp] = useState(0);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 0,
      role: "Full-Stack Developer Intern",
      company: "Omnimise",
      companyUrl: "https://omnimise.com/",
      period: "Jan 2026 -- Jun 2026",
      location: "Bangalore, India (Remote)",
      badge: "Sole Developer",
      subtitle: "Web (Next.js) + Mobile (React Native/Expo)",
      highlights: [
        "Owned end-to-end delivery of a production document-vault and collaboration platform, including a shareable Business Card system and an OAuth-based Portfolio Hub with claim verification.",
        "Published the mobile app to the Google Play Store, completing the Play Data Safety filing and release process end-to-end.",
        "Built DigiLocker integration via API Setu: OAuth callback flow, encrypted XML parsing, document field mapping, and resync/restore logic.",
        "Designed a real-time vault messaging system on Socket.io with document/image/PDF delivery and mobile-optimized rendering via expo-file-system.",
        "Implemented multi-provider OAuth (DigiLocker, GitHub, Dribbble) with deep linking and biometric vault authentication using expo-local-authentication.",
        "Integrated Mixpanel analytics across web and mobile platforms to track user event streams, retention metrics, and feature-usage funnels.",
        "Designed RBAC for an HR/recruitment module and a vault credentials manager with categorized storage and 3-way sharing; set up Jest test suites and a staging CI/CD pipeline."
      ],
      tech: ["Next.js", "React Native", "Expo", "Socket.io", "DigiLocker API", "OAuth 2.0", "Biometric Auth", "RBAC", "Mixpanel", "Jest", "CI/CD"]
    },
    {
      id: 1,
      role: "Trainee -- Frontend Developer",
      company: "ThinkNEXT Technologies Pvt. Ltd.",
      companyUrl: "https://www.thinknext.co.in/",
      period: "Jun 2024 -- Jul 2024",
      location: "Chandigarh, India",
      badge: "Training",
      subtitle: "Frontend Core Training",
      highlights: [
        "Completed structured React.js training covering JSX, component architecture, routing, and reusable stateful patterns.",
        "Built responsive user interface prototypes with modern JavaScript (ES6+), React Hooks, and CSS frameworks."
      ],
      tech: ["React.js", "JavaScript (ES6+)", "JSX", "React Router", "CSS3", "HTML5"]
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
    <section id="experience" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Career History</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Work
            </span>
            {' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hands-on professional experience building scalable web apps, cross-platform mobile solutions, 
            and enterprise API integrations.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Experience Navigation Tabs */}
          <div className={`lg:col-span-4 space-y-4 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            {experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  activeExp === idx
                    ? 'bg-gray-900/80 border-blue-500/50 shadow-xl shadow-blue-500/10'
                    : 'bg-gray-900/30 border-gray-800/60 hover:border-gray-700 hover:bg-gray-900/50'
                }`}
              >
                {activeExp === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-full" />
                )}
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {exp.badge}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <h3 className={`text-lg font-bold transition-colors ${
                  activeExp === idx ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {exp.role}
                </h3>
                
                <p className="text-sm font-medium text-gray-400 flex items-center gap-1 mt-1">
                  <span>{exp.company}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 text-xs">{exp.location}</span>
                </p>
              </button>
            ))}
          </div>

          {/* Active Experience Details */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-800/80 p-8 relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800/80 gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">
                        {experiences[activeExp].role}
                      </h3>
                      <a
                        href={experiences[activeExp].companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-cyan-400 transition-colors"
                      >
                        <span>{experiences[activeExp].company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                      <span className="text-cyan-400">{experiences[activeExp].subtitle}</span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right flex sm:flex-col justify-between items-start sm:items-end">
                    <span className="text-sm font-mono text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      {experiences[activeExp].period}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {experiences[activeExp].location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    Key Responsibilities & Deliverables
                  </h4>
                  {experiences[activeExp].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed group">
                      <div className="p-1 rounded-full bg-blue-500/10 text-blue-400 mt-0.5 flex-shrink-0 group-hover:bg-blue-500/20 group-hover:text-cyan-400 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                      <p className="flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-gray-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeExp].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 rounded-lg border border-gray-700/50 hover:border-blue-500/40 hover:text-blue-400 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
