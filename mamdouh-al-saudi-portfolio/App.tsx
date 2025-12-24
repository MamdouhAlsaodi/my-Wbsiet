
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  Database, 
  Cpu, 
  Languages, 
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Globe,
  Monitor,
  Calculator,
  Layout,
  Send
} from 'lucide-react';
import { translations } from './translations';
import { Language, Project } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const t = translations[lang] || translations['en'];
  const isRtl = lang === 'ar';

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const skillsData = {
    languages: ['TypeScript', 'JavaScript', 'C++', 'C#', 'Java', 'Python', 'T-SQL', 'SQL'],
    concepts: ['Windows Forms', 'Backend .NET', 'Web Basics', '3-Tier Architecture', 'OOP', 'Data Structures'],
    tools: ['Visual Studio', 'Git/GitHub', 'Android Studio', 'Linux (Ubuntu)'],
    databases: ['SQL Server']
  };

  const linkedInUrl = "https://www.linkedin.com/in/mamdouh-alsaudi-188693381/";
  const githubUrl = "https://github.com/MamdouhAlsaodi";
  const emailAddress = "mamdouhalsaudi@gmail.com";
  const profilePhotoUrl = "https://github.com/MamdouhAlsaodi.png";

  return (
    <div className={`min-h-screen bg-[#0f172a] transition-all duration-300 ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className={`font-bold text-xl tracking-tight hidden sm:block ${isRtl ? 'mr-2' : 'ml-2'} text-white`}>
                Mamdouh.dev
              </span>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-8">
              <div className="flex items-center bg-slate-800 rounded-full p-1 border border-slate-700 ml-4">
                {(['ar', 'pt', 'en'] as Language[]).map((l) => (
                  <button 
                    key={l}
                    onClick={() => toggleLang(l)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === l ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-700 text-slate-400'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-start z-10">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-500 font-semibold text-sm">{t.hero.role}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
              {t.hero.greeting}
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 group shadow-xl shadow-blue-900/20">
                {t.hero.cv_button} <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
              <div className="flex gap-3">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 text-slate-300" title="GitHub">
                  <Github className="h-6 w-6" />
                </a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 text-slate-300" title="LinkedIn: Mamdouh Al-Saudi">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={`mailto:${emailAddress}`} className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 text-slate-300" title={`Email: ${emailAddress}`}>
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="relative group mx-auto w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
              <img 
                src={profilePhotoUrl} 
                alt="Mamdouh Al-Saudi" 
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-slate-900 shadow-2xl transition-transform group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Mamdouh+Al-Saudi&background=0D8ABC&color=fff&size=400`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-800/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold flex items-center gap-3 mb-6 text-white">
                  <Terminal className="text-blue-500 h-8 w-8" /> {t.about.title}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {t.about.text}
                </p>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                  <Monitor className="h-5 w-5" /> {t.about.offer_title}
                </h3>
                <p className="text-slate-400 leading-relaxed italic">
                  {t.about.offer_text}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 px-2">{t.about.interests_title}</h3>
              <div className="grid gap-4">
                {t.about.interests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/80 p-5 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <ChevronRight className={`h-6 w-6 ${isRtl ? 'rotate-180' : ''}`} />
                    </div>
                    <span className="text-slate-200 font-medium text-lg">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
          </div>
          <h2 className="text-4xl font-bold mb-16 text-white">{t.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard title={t.skills.categories.languages} skills={skillsData.languages} icon={<Code2 />} />
            <SkillCard title={t.skills.categories.concepts} skills={skillsData.concepts} icon={<Cpu />} />
            <SkillCard title={t.skills.categories.tools} skills={skillsData.tools} icon={<Terminal />} />
            <SkillCard title={t.skills.categories.databases} skills={skillsData.databases} icon={<Database />} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-800/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {t.projects.list.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:rotate-12 transition-transform duration-500">
              <span className="h-32 w-32 flex items-center justify-center">
                <Send className="h-full w-full" />
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">{t.nav.contact}</h2>
            <p className="text-blue-50 mb-10 text-xl font-light relative z-10">{emailAddress}</p>
            
            <a 
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10"
            >
              <Mail className="h-6 w-6" />
              {isRtl ? 'أرسل رسالة الآن' : lang === 'pt' ? 'Enviar Mensagem' : 'Send a Message'}
            </a>
          </div>
        </div>
      </section>

      {/* Goal & Languages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-10 rounded-3xl border border-white/5 shadow-2xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <Languages className="text-blue-500 w-8 h-8" /> {t.languages.title}
            </h2>
            <div className="space-y-6">
              {[
                { label: t.languages.ar, p: 100 },
                { label: t.languages.pt, p: 95 },
                { label: t.languages.en, p: 65 }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-slate-200">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-blue-400 text-sm">{item.p}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000" 
                      style={{ width: `${item.p}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center bg-slate-900/60 p-10 rounded-3xl border border-slate-800 relative">
            <div className="absolute top-8 right-8 text-blue-500/20">
              <Globe className="h-24 w-24" />
            </div>
            <h2 className="text-3xl font-bold mb-8 text-blue-400">{t.goal.title}</h2>
            <p className="text-slate-200 text-2xl italic leading-relaxed font-light">
              "{t.goal.text}"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Mamdouh Al-Saudi</h3>
              <p className="text-blue-500 font-medium tracking-wide uppercase text-sm">{t.hero.role}</p>
              <div className="flex gap-4 mt-6">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <Github className="h-5 w-5" />
                </a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`mailto:${emailAddress}`} className="text-slate-400 hover:text-white transition-all bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <h4 className="font-bold text-slate-200 uppercase tracking-widest text-xs mb-2">{t.footer.links}</h4>
              <div className="flex flex-col gap-3">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all flex items-center gap-2 group">
                  <span className="font-semibold">Mamdouh Al-Saudi on LinkedIn</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all flex items-center gap-2 group">
                  <span className="font-semibold">Mamdouh Al-Saudi on GitHub</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

const SkillCard: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all group hover:-translate-y-2 flex flex-col items-center text-center shadow-lg">
    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: 'h-8 w-8' }) : icon}
    </div>
    <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
    <div className="flex flex-wrap gap-2.5 justify-center">
      {skills.map(skill => (
        <span key={skill} className="text-xs font-bold text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50 transition-colors hover:border-blue-500/50">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const icons = [
    <Monitor className="h-6 w-6" />,
    <Calculator className="h-6 w-6" />,
    <Database className="h-6 w-6" />,
    <Layout className="h-6 w-6" />
  ];

  // Specific high-quality stock photos matching the projects' themes
  const stockPhotos = [
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800", // LifeOS (Notebook/Planner)
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800", // Calculate (Math/Algebra)
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800", // DVLD (Driving/Dashboard - Matches user request)
    "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800"  // Bank (Finance)
  ];

  return (
    <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col shadow-2xl relative">
      <div className="h-56 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <img 
          src={stockPhotos[index % stockPhotos.length]} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-600/20">
            {icons[index % icons.length]}
          </div>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all border border-slate-700"
              title="View Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="text-slate-400 mb-8 flex-1 leading-relaxed text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
