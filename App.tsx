import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Terminal, Code2, Database, Cpu, Languages,
  ArrowRight, ChevronRight, ExternalLink, Globe, Monitor, Calculator,
  Layout, Send, Zap, Server, Utensils, Car, CreditCard, BookOpen,
  Cpu as OSIcon, Menu, X, ChevronDown, Star, Sparkles, Layers, GitBranch,
  ArrowUpRight, Play, Eye
} from 'lucide-react';
import { translations } from './translations';
import { Language, Project } from './types';

// ==================== PROJECTS DATA (HARDCODED) ====================
const projectsList = {
  featured: [
    {
      title: { ar: 'نظام إدارة المشاريع', en: 'Project Management System', pt: 'Sistema de Gestão de Projetos' },
      description: {
        ar: 'نظام Full Stack متكامل لإدارة المشاريع مع React، Node.js، Prisma، وPostgreSQL. يشمل لوحة تحكم، لوحة كانبان، إدارة فرق، وتتبع وقت.',
        en: 'Full-stack project management system with React, Node.js, Prisma & PostgreSQL. Includes dashboard, Kanban board, team management & time tracking.',
        pt: 'Sistema full-stack de gestão de projetos com React, Node.js, Prisma e PostgreSQL. Inclui dashboard, Kanban, gestão de equipes e rastreamento de tempo.'
      },
      tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      link: 'https://github.com/MamdouhAlsaodi/management-system',
      icon: <Layers className="h-7 w-7" />,
      color: '#6366f1',
      gradient: 'from-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: { ar: 'نظام إدارة المطاعم', en: 'Restaurant Management System', pt: 'Sistema de Gestão de Restaurantes' },
      description: {
        ar: 'نظام شامل لإدارة المطاعم العربية يدعم 3 لغات. يشمل إدارة القوائم، الطلبات، المبيعات، الخصومات، التقارير اليومية، والنسخ الاحتياطي.',
        en: 'Complete Arabic restaurant management system with 3-language support. Menu management, orders, sales, discounts, daily reports & backup.',
        pt: 'Sistema completo para restaurante árabe com suporte a 3 idiomas. Gestão de cardápio, pedidos, vendas, descontos, relatórios e backup.'
      },
      tags: ['React', 'HTML/JS', 'Node.js', 'Multilingual', 'Full Stack'],
      link: 'https://github.com/MamdouhAlsaodi/restaurant-management-system',
      icon: <Utensils className="h-7 w-7" />,
      color: '#f97316',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: { ar: 'نظام رخص القيادة DVLD', en: 'DVLD - Driver License System', pt: 'DVLD - Sistema de Carteiras de Motorista' },
      description: {
        ar: 'نظام متكامل لإدارة تسجيل وإصدار وتجديد رخص القيادة. بنية 3-طبقات كاملة مع Windows Forms، .NET Backend، وقاعدة بيانات SQL Server شاملة.',
        en: 'Complete driver license management system with registration, issuance & renewal. Full 3-tier architecture with Windows Forms, .NET & SQL Server.',
        pt: 'Sistema completo de gestão de carteiras de motorista com registro, emissão e renovação. Arquitetura 3-tier com Windows Forms, .NET e SQL Server.'
      },
      tags: ['C#', '.NET', 'SQL Server', 'ADO.NET', '3-Tier Architecture'],
      link: 'https://github.com/MamdouhAlsaodi/DVLD-Full-Stack-Database',
      icon: <CreditCard className="h-7 w-7" />,
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: { ar: 'محرك التحليل المالي', en: 'Finance Engine', pt: 'Motor de Análise Financeira' },
      description: {
        ar: 'محرك تحليل مالي ذكي مدعوم بالذكاء الاصطناعي (Gemini AI). يحلل البيانات المالية ويقدم رؤى متقدمة عبر واجهة حديثة.',
        en: 'AI-powered financial analysis engine using Gemini AI. Analyzes financial data and provides advanced insights through a modern interface.',
        pt: 'Motor de análise financeira com IA usando Gemini AI. Analisa dados financeiros e fornece insights avançados através de interface moderna.'
      },
      tags: ['TypeScript', 'Gemini AI', 'React', 'Vite', 'Tailwind v4'],
      link: 'https://github.com/MamdouhAlsaodi/finance-engine',
      icon: <Zap className="h-7 w-7" />,
      color: '#eab308',
      gradient: 'from-yellow-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    },
  ],
  more: [
    {
      title: { ar: 'LifeOS - نظام الحياة', en: 'LifeOS - Life Management', pt: 'LifeOS - Gestão de Vida' },
      description: {
        ar: 'نظام إنتاجية مرن لإدارة العمل والحياة والأهداف بدون جداول صارمة. خطط بذكاء وركز بشكل أفضل.',
        en: 'Flexible productivity system for managing work, life & goals without rigid schedules. Plan smarter, focus better.',
        pt: 'Sistema flexível de produtividade para gerenciar trabalho, vida e objetivos sem horários rígidos.'
      },
      tags: ['TypeScript', 'Productivity', 'Systems Design'],
      link: 'https://github.com/MamdouhAlsaodi/LifeOS',
      icon: <Sparkles className="h-6 w-6" />,
      color: '#06b6d4',
    },
    {
      title: { ar: 'نظام قطع الغيار الموزع', en: 'AutoPart Distributed System', pt: 'Sistema Distribuído de Autopeças' },
      description: {
        ar: 'نظام موزع لإدارة قطع الغيار ببنية Client-Server. API RESTful بـ PHP (Slim Framework) وقاعدة بيانات SQL Server مع دعم التزامن.',
        en: 'Distributed auto parts management with Client-Server architecture. RESTful API with PHP Slim & SQL Server with concurrency support.',
        pt: 'Sistema distribuído de autopeças com arquitetura Cliente-Servidor. API RESTful com PHP Slim e SQL Server.'
      },
      tags: ['PHP', 'SQL Server', 'REST API', 'Distributed Systems', 'Slim'],
      link: 'https://github.com/MamdouhAlsaodi/AutoPart-SyncDistributed',
      icon: <Car className="h-6 w-6" />,
      color: '#8b5cf6',
    },
    {
      title: { ar: 'محلل التعبيرات الرياضية', en: 'Math Expression Parser', pt: 'Analisador de Expressões Matemáticas' },
      description: {
        ar: 'محلل رياضي متقدم يحلل ويحسب تعبيرات معقدة مع مراعاة أولويات العمليات وبناء شجرة بناء الجملة المجردة (AST). ليس آلة حاسبة بسيطة.',
        en: 'Advanced math parser that evaluates complex expressions with operator precedence and AST construction. Not a basic calculator.',
        pt: 'Analisador matemático avançado que avalia expressões complexas com precedência de operadores e construção de AST.'
      },
      tags: ['C++', 'Algorithms', 'AST', 'Data Structures', 'Math'],
      link: 'https://github.com/MamdouhAlsaodi/CalculateSimbelExpression',
      icon: <Calculator className="h-6 w-6" />,
      color: '#ec4899',
    },
    {
      title: { ar: 'نظام البنك - مفاهيم OOP متقدمة', en: 'Bank System - Advanced OOP', pt: 'Sistema Bancário - OOP Avançado' },
      description: {
        ar: 'نظام بنكي متكامل يطبق مفاهيم OOP المتقدمة: وراثة، تعدد أشكال، تجريد، تغليف، لإدارة الحسابات والعمليات المالية.',
        en: 'Complete banking system applying advanced OOP concepts: inheritance, polymorphism, abstraction, encapsulation for accounts & transactions.',
        pt: 'Sistema bancário completo aplicando conceitos avançados de OOP: herança, polimorfismo, abstração e encapsulamento.'
      },
      tags: ['C++', 'OOP', 'Design Patterns', 'Algorithms'],
      link: 'https://github.com/MamdouhAlsaodi/BANK_oop',
      icon: <CreditCard className="h-6 w-6" />,
      color: '#14b8a6',
    },
    {
      title: { ar: 'محاكي نظام التشغيل', en: 'OS Simulator', pt: 'Simulador de SO' },
      description: {
        ar: 'محاكي أكاديمي لنظام التشغيل بـ C++ يشمل إدارة العمليات (FIFO)، الذاكرة، أجهزة الإدخال/الإخراج، نظام الملفات، ومحاكاة Deadlock.',
        en: 'Academic OS simulator in C++ with process management (FIFO), memory, I/O devices, file system & deadlock simulation.',
        pt: 'Simulador acadêmico de SO em C++ com gerenciamento de processos (FIFO), memória, E/S, sistema de arquivos e deadlock.'
      },
      tags: ['C++', 'OS Concepts', 'Multithreading', 'Systems Programming'],
      link: 'https://github.com/MamdouhAlsaodi/SO_Simulator_FINAL',
      icon: <OSIcon className="h-6 w-6" />,
      color: '#f43f5e',
    },
    {
      title: { ar: 'مشكلة الفلاسفة المتعشين', en: 'Dining Philosophers', pt: 'Jantar dos Filósofos' },
      description: {
        ar: 'تطبيق كلاسيكي لمشكلة التزامن الشهيرة - مشكلة الفلاسفة المتعشين - مع حلول مختلفة لتجنب Deadlock.',
        en: 'Classic implementation of the famous concurrency problem - Dining Philosophers - with various deadlock avoidance solutions.',
        pt: 'Implementação clássica do famoso problema de concorrência - Jantar dos Filósofos - com soluções para evitar deadlock.'
      },
      tags: ['C++', 'Concurrency', 'Synchronization', 'OS'],
      link: 'https://github.com/MamdouhAlsaodi/FilsofeJantar',
      icon: <Server className="h-6 w-6" />,
      color: '#a855f7',
    },
    {
      title: { ar: 'نظام المكتبة', en: 'Library System', pt: 'Sistema de Biblioteca' },
      description: {
        ar: 'نظام ويب لإدارة المكتبة يشمل إدارة الكتب، المستعيرين، والإعارات.',
        en: 'Web-based library management system with book management, borrowers & lending.',
        pt: 'Sistema web de gestão de biblioteca com gerenciamento de livros, usuários e empréstimos.'
      },
      tags: ['Web', 'HTML/CSS/JS', 'Database'],
      link: 'https://github.com/MamdouhAlsaodi/library_project_Web',
      icon: <BookOpen className="h-6 w-6" />,
      color: '#0ea5e9',
    },
  ],
};

// ==================== MAIN APP ====================
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang] || translations['en'];
  const isRtl = lang === 'ar';
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const getLocalText = (obj: Record<string, string>) => obj[lang] || obj['en'];

  const linkedInUrl = "https://www.linkedin.com/in/mamdouh-alsaudi-188693381/";
  const githubUrl = "https://github.com/MamdouhAlsaodi";
  const emailAddress = "mamdouhalsaudi@gmail.com";
  const profilePhotoUrl = "https://github.com/MamdouhAlsaodi.png";

  const skillsData = {
    languages: ['TypeScript', 'JavaScript', 'C++', 'C#', 'Java', 'Python', 'T-SQL', 'SQL'],
    concepts: ['Windows Forms', 'Backend .NET', 'Web Development', '3-Tier Architecture', 'OOP', 'Data Structures'],
    tools: ['Visual Studio', 'Git/GitHub', 'Android Studio', 'Linux (Ubuntu)', 'Node.js'],
    databases: ['SQL Server', 'PostgreSQL', 'MongoDB']
  };

  return (
    <div className={`min-h-screen bg-[#030712] text-white ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">Mamdouh.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['about', 'skills', 'projects', 'contact'].map(id => (
              <a key={id} href={`#${id}`} className="text-sm text-gray-400 hover:text-white transition-colors capitalize">
                {id === 'about' ? t.nav.about : id === 'skills' ? t.nav.skills : id === 'projects' ? t.nav.projects : t.nav.contact}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
              {(['ar', 'pt', 'en'] as Language[]).map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === l ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-white/10 text-gray-500'}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-3">
            {['about', 'skills', 'projects', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenu(false)}
                className="block text-gray-400 hover:text-white py-2 capitalize">
                {id === 'about' ? t.nav.about : id === 'skills' ? t.nav.skills : id === 'projects' ? t.nav.projects : t.nav.contact}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center md:text-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-blue-400 font-medium text-sm">{t.hero.role}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">{t.hero.greeting.split(' ').slice(0, -1).join(' ')}</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.greeting.split(' ').slice(-1)}
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">{t.hero.description}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="group bg-white text-gray-900 px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2 hover:bg-gray-100 shadow-2xl shadow-white/10">
                {t.hero.cv_button} <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
              <div className="flex gap-2">
                {[
                  { href: githubUrl, icon: <Github className="h-5 w-5" /> },
                  { href: linkedInUrl, icon: <Linkedin className="h-5 w-5" /> },
                  { href: `mailto:${emailAddress}`, icon: <Mail className="h-5 w-5" /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="p-3.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 text-gray-400 hover:text-white">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-cyan-400/30 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-700" />
              <img src={profilePhotoUrl} alt="Mamdouh Al-Saudi"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#030712] shadow-2xl transition-transform group-hover:scale-[1.02]"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Mamdouh+Al-Saudi&background=0D8ABC&color=fff&size=400'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold flex items-center gap-3">
                <Terminal className="text-blue-400 h-8 w-8" />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t.about.title}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">{t.about.text}</p>
              <div className="p-8 bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-blue-400 flex items-center gap-2">
                  <Monitor className="h-5 w-5" /> {t.about.offer_title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{t.about.offer_text}</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">{t.about.interests_title}</h3>
              <div className="grid gap-3">
                {t.about.interests.map((interest: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <ChevronRight className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
                    </div>
                    <span className="text-gray-300 font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
          </div>
          <h2 className="text-4xl font-bold mb-16">{t.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title={t.skills.categories.languages} skills={skillsData.languages} icon={<Code2 />} />
            <SkillCard title={t.skills.categories.concepts} skills={skillsData.concepts} icon={<Cpu />} />
            <SkillCard title={t.skills.categories.tools} skills={skillsData.tools} icon={<Terminal />} />
            <SkillCard title={t.skills.categories.databases} skills={skillsData.databases} icon={<Database />} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <GitBranch className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Portfolio</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A selection of projects that showcase my skills in software engineering, systems design, and problem-solving.</p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projectsList.featured.map((project, i) => (
              <FeaturedProjectCard key={i} project={project} lang={lang} isRtl={isRtl} />
            ))}
          </div>

          {/* More Projects */}
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
            {lang === 'ar' ? 'مشاريع أخرى' : lang === 'pt' ? 'Mais Projetos' : 'More Projects'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsList.more.map((project, i) => (
              <MiniProjectCard key={i} project={project} lang={lang} isRtl={isRtl} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-16 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:rotate-12 transition-transform duration-500">
              <Send className="h-32 w-32" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">{t.nav.contact}</h2>
            <p className="text-blue-100 mb-10 text-xl relative z-10">{emailAddress}</p>
            <a href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10">
              <Mail className="h-6 w-6" />
              {isRtl ? 'أرسل رسالة الآن' : lang === 'pt' ? 'Enviar Mensagem' : 'Send a Message'}
            </a>
          </div>
        </div>
      </section>

      {/* Languages + Goal */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Languages className="text-blue-400 w-8 h-8" /> {t.languages.title}
            </h2>
            <div className="space-y-6">
              {[
                { label: t.languages.ar, p: 100 },
                { label: t.languages.pt, p: 95 },
                { label: t.languages.en, p: 65 }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="font-medium text-gray-300">{item.label}</span>
                    <span className="text-blue-400">{item.p}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${item.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white/[0.02] p-10 rounded-3xl border border-white/5 relative">
            <div className="absolute top-8 right-8 text-blue-500/10">
              <Globe className="h-24 w-24" />
            </div>
            <h2 className="text-3xl font-bold mb-8 text-blue-400">{t.goal.title}</h2>
            <p className="text-gray-300 text-2xl italic leading-relaxed font-light">"{t.goal.text}"</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Mamdouh Al-Saudi</h3>
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">{t.hero.role}</p>
              <div className="flex gap-3 mt-4">
                {[
                  { href: githubUrl, icon: <Github className="h-5 w-5" /> },
                  { href: linkedInUrl, icon: <Linkedin className="h-5 w-5" /> },
                  { href: `mailto:${emailAddress}`, icon: <Mail className="h-5 w-5" /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-all bg-white/5 p-2.5 rounded-lg border border-white/5">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">{t.footer.links}</h4>
              <div className="flex flex-col gap-3">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-all flex items-center gap-2 group">
                  <span>LinkedIn</span><ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-all flex items-center gap-2 group">
                  <span>GitHub</span><ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

// ==================== SUB COMPONENTS ====================
const SkillCard: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="p-8 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group hover:-translate-y-1 flex flex-col items-center text-center">
    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { className: 'h-7 w-7' }) : icon}
    </div>
    <h3 className="text-lg font-bold mb-5">{title}</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map(skill => (
        <span key={skill} className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

interface ProjectData {
  title: Record<string, string>;
  description: Record<string, string>;
  tags: string[];
  link: string;
  icon: React.ReactNode;
  color: string;
  gradient?: string;
  image?: string;
}

const FeaturedProjectCard: React.FC<{ project: ProjectData; lang: string; isRtl: boolean }> = ({ project, lang, isRtl }) => {
  const getLocalText = (obj: Record<string, string>) => obj[lang] || obj['en'];
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer"
      className="group bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all flex flex-col relative">
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity" style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }} />
        <img src={project.image} alt={getLocalText(project.title)}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="p-3 rounded-xl text-white shadow-lg" style={{ background: project.color }}>
            {project.icon}
          </div>
        </div>
        <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg text-white/50 group-hover:text-white/80 transition-all">
          <Github className="h-5 w-5" />
        </div>
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{getLocalText(project.title)}</h3>
        <p className="text-gray-500 mb-6 flex-1 leading-relaxed text-sm line-clamp-3">{getLocalText(project.description)}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-[11px] font-medium rounded-full border" style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}10` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const MiniProjectCard: React.FC<{ project: ProjectData; lang: string; isRtl: boolean }> = ({ project, lang, isRtl }) => {
  const getLocalText = (obj: Record<string, string>) => obj[lang] || obj['en'];
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer"
      className="group bg-white/[0.02] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl" style={{ background: `${project.color}15` }}>
          <div style={{ color: project.color }}>{project.icon}</div>
        </div>
        <Github className="h-5 w-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{getLocalText(project.title)}</h3>
      <p className="text-gray-500 text-sm mb-5 flex-1 leading-relaxed line-clamp-2">{getLocalText(project.description)}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag: string) => (
          <span key={tag} className="text-[10px] font-medium text-gray-500 bg-white/5 px-2 py-1 rounded">{tag}</span>
        ))}
        {project.tags.length > 3 && <span className="text-[10px] text-gray-600 px-2 py-1">+{project.tags.length - 3}</span>}
      </div>
    </a>
  );
};

export default App;
