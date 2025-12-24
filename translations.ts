
import { Content } from './types';

export const translations: Record<string, Content> = {
  ar: {
    nav: { about: 'نبذة عني', skills: 'المهارات', projects: 'المشاريع', contact: 'تواصل معي' },
    hero: {
      greeting: 'أنا ممدوح السعودي',
      role: 'طالب هندسة برمجيات',
      description: 'أمتلك شغفًا حقيقيًا بتطوير البرمجيات وبناء الأنظمة العملية التي تعتمد على منطق قوي وتصميم نظيف وقابل للتوسع.',
      cv_button: 'مشاهدة الأعمال'
    },
    about: {
      title: 'نبذة عني',
      text: 'أنا ممدوح السعودي، طالب هندسة برمجيات في Centro Universitário UniFacvest – البرازيل، في السنة الثالثة من الدراسة.',
      offer_title: 'ماذا أقدّم؟',
      offer_text: 'أعمل على تطوير حلول برمجية باستخدام مفاهيم البرمجة الكائنية (OOP)، هندسة البرمجيات، وهياكل البيانات، مع التركيز على كتابة كود منظم وقابل للصيانة.',
      interests_title: 'مجالات اهتمامي:',
      interests: [
        'تطوير تطبيقات سطح المكتب',
        'بناء أنظمة إدارية',
        'العمل مع قواعد البيانات',
        'تعلم وتطبيق مفاهيم أنظمة التشغيل',
        'تطوير مشاريع أكاديمية وعملية'
      ]
    },
    skills: {
      title: 'المهارات التقنية',
      categories: {
        languages: 'لغات البرمجة',
        concepts: 'التقنيات والإطارات',
        tools: 'الأدوات',
        databases: 'قواعد البيانات'
      }
    },
    projects: {
      title: 'أبرز المشاريع',
      list: [
        {
          title: 'LifeOS Public',
          description: 'نظام إنتاجية مرن مصمم لإدارة العمل والحياة والأهداف دون جداول صارمة. خطط بذكاء، ركز بشكل أفضل، وتابع تقدمك.',
          tags: ['TypeScript', 'Productivity', 'Systems Design'],
          link: 'https://github.com/MamdouhAlsaodi/LifeOS.git'
        },
        {
          title: 'CalculateSimpleExpression',
          description: 'محلل منطقي رياضي يقوم بحساب التعبيرات المعقدة مع مراعاة الأولويات الحسابية، تم تطويره بلغة C++.',
          tags: ['C++', 'Algorithms', 'Logic', 'Data Structure'],
          link: 'https://github.com/MamdouhAlsaodi/CalculateSimbelExpression.git'
        },
        {
          title: 'نظام إدارة رخص القيادة (DVLD)',
          description: 'نظام متكامل لإدارة تسجيل وإصدار وتجديد الرخص باستخدام بنية ثلاثية الطبقات وقاعدة بيانات شاملة.',
          tags: ['C#', 'SQL Server', '3-Tier', 'Full Stack'],
          link: 'https://github.com/MamdouhAlsaodi/DVLD-Full-Stack-Database.git'
        },
        {
          title: 'نظام إدارة البنك (BANK_oop)',
          description: 'مشروع يعتمد على البرمجة الكائنية (OOP) لمحاكاة نظام بنكي متكامل لإدارة الحسابات والعملاء والعمليات المالية.',
          tags: ['C++', 'OOP', 'Algorithms', 'Logic', 'Data Structure'],
          link: 'https://github.com/MamdouhAlsaodi/BANK_oop.git'
        }
      ]
    },
    languages: {
      title: 'اللغات',
      ar: 'العربية: بطلاقة',
      pt: 'البرتغالية: لغة أساسية',
      en: 'الإنجليزية: مستوى متوسط'
    },
    goal: {
      title: 'هدفي',
      text: 'أسعى للحصول على فرصة تدريب (Estágio) في مجال هندسة البرمجيات لتطبيق ما تعلمته عمليًا، واكتساب خبرة حقيقية داخل بيئة احترافية، مع الاستمرار في تطوير مهاراتي التقنية والفكرية.'
    },
    footer: {
      links: 'روابط مهمة',
      rights: 'جميع الحقوق محفوظة لممدوح السعودي © ٢٠٢٤'
    }
  },
  pt: {
    nav: { about: 'Sobre Mim', skills: 'Habilidades', projects: 'Projetos', contact: 'Contato' },
    hero: {
      greeting: 'Sou Mamdouh Al-Saudi',
      role: 'Estudante de Engenharia de Software',
      description: 'Tenho uma verdadeira paixão pelo desenvolvimento de software e pela construção de sistemas práticos baseados em lógica sólida e design limpo e escalável.',
      cv_button: 'Ver Projetos'
    },
    about: {
      title: 'Sobre Mim',
      text: 'Sou Mamdouh Al-Saudi, estudante de Engenharia de Software no Centro Universitário UniFacvest – Brasil, no terceiro ano de curso.',
      offer_title: 'O que eu ofereço?',
      offer_text: 'Desenvolvo soluções de software utilizando conceitos de Programação Orientada a Objetos (OOP), engenharia de software e estruturas de dados, com foco na escrita de código organizado e manutenível.',
      interests_title: 'Áreas de interesse:',
      interests: [
        'Desenvolvimento de aplicações desktop',
        'Construção de sistemas administrativos',
        'Trabalho com bancos de dados',
        'Aprendizado e aplicação de conceitos de sistemas operacionais',
        'Desenvolvimento de projetos acadêmicos e práticos'
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      categories: {
        languages: 'Linguagens de Programação',
        concepts: 'Tecnologias & Frameworks',
        tools: 'Ferramentas',
        databases: 'Bancos de Dados'
      }
    },
    projects: {
      title: 'Projetos de Destaque',
      list: [
        {
          title: 'LifeOS Public',
          description: 'Sistema de produtividade flexível projetado para gerenciar trabalho, vida e objetivos. Planeje com mais inteligência e foco.',
          tags: ['TypeScript', 'Produtividade', 'Design de Sistemas'],
          link: 'https://github.com/MamdouhAlsaodi/LifeOS.git'
        },
        {
          title: 'CalculateSimpleExpression',
          description: 'Analisador lógico matemático que calcula expressões complexas respeitando as prioridades aritméticas, implementado em C++.',
          tags: ['C++', 'Algoritmos', 'Lógica', 'Data Structure'],
          link: 'https://github.com/MamdouhAlsaodi/CalculateSimbelExpression.git'
        },
        {
          title: 'Sistema de Gestão DVLD',
          description: 'Sistema integrado para gerenciar emissão e renovação de licenças usando arquitetura de 3 camadas e banco de dados Full Stack.',
          tags: ['C#', 'SQL Server', '3-Tier', 'Database'],
          link: 'https://github.com/MamdouhAlsaodi/DVLD-Full-Stack-Database.git'
        },
        {
          title: 'Sistema Bancário (BANK_oop)',
          description: 'Projeto baseado em OOP para simular um sistema bancário completo de gerenciamento de contas e transações.',
          tags: ['C++', 'OOP', 'Algorithms', 'Logic', 'Data Structure'],
          link: 'https://github.com/MamdouhAlsaodi/BANK_oop.git'
        }
      ]
    },
    languages: {
      title: 'Idiomas',
      ar: 'Árabe: Fluente',
      pt: 'Português: Língua principal',
      en: 'Inglês: Nível intermediário'
    },
    goal: {
      title: 'Meu Objetivo',
      text: 'Busco uma oportunidade de estágio na área de engenharia de software para aplicar meus conhecimentos na prática e adquirir experiência real em ambiente profissional.'
    },
    footer: {
      links: 'Links Importantes',
      rights: 'Todos os direitos reservados a Mamdouh Al-Saudi © 2024'
    }
  },
  en: {
    nav: { about: 'About Me', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: "I'm Mamdouh Al-Saudi",
      role: 'Software Engineering Student',
      description: 'I have a genuine passion for software development and building practical systems based on strong logic and clean, scalable design.',
      cv_button: 'View Projects'
    },
    about: {
      title: 'About Me',
      text: 'I am Mamdouh Al-Saudi, a software engineering student at Centro Universitário UniFacvest – Brazil, currently in my third year.',
      offer_title: 'What I Offer?',
      offer_text: 'I develop software solutions using Object-Oriented Programming (OOP) concepts, software engineering, and data structures, focusing on writing organized and maintainable code.',
      interests_title: 'Areas of Interest:',
      interests: [
        'Desktop application development',
        'Administrative systems building',
        'Database management',
        'Operating systems concepts application',
        'Academic and practical project development'
      ]
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        languages: 'Programming Languages',
        concepts: 'Technologies & Frameworks',
        tools: 'Tools',
        databases: 'Databases'
      }
    },
    projects: {
      title: 'Featured Projects',
      list: [
        {
          title: 'LifeOS Public',
          description: 'A flexible productivity system designed to manage work, life, and goals without rigid schedules. Plan smarter and track progress.',
          tags: ['TypeScript', 'Productivity', 'Systems Design'],
          link: 'https://github.com/MamdouhAlsaodi/LifeOS.git'
        },
        {
          title: 'CalculateSimpleExpression',
          description: 'Mathematical logic parser that calculates complex expressions honoring precedence, implemented in C++.',
          tags: ['C++', 'Algorithms', 'Logic', 'Data Structure'],
          link: 'https://github.com/MamdouhAlsaodi/CalculateSimbelExpression.git'
        },
        {
          title: 'DVLD (Full Stack Database)',
          description: 'Integrated system for managing license registration and renewals using a 3-tier architecture and relational database.',
          tags: ['C#', 'SQL Server', '3-Tier', 'Backend'],
          link: 'https://github.com/MamdouhAlsaodi/DVLD-Full-Stack-Database.git'
        },
        {
          title: 'Bank Management (BANK_oop)',
          description: 'A complete banking simulation system built with C++ using OOP principles, robust logic, and efficient algorithms.',
          tags: ['C++', 'OOP', 'Algorithms', 'Logic', 'Data Structure'],
          link: 'https://github.com/MamdouhAlsaodi/BANK_oop.git'
        }
      ]
    },
    languages: {
      title: 'Languages',
      ar: 'Arabic: Native',
      pt: 'Portuguese: Primary language',
      en: 'English: Intermediate level'
    },
    goal: {
      title: 'My Goal',
      text: 'I am seeking an internship opportunity in software engineering to apply my knowledge in practice and gain real experience within a professional environment.'
    },
    footer: {
      links: 'Important Links',
      rights: 'All rights reserved to Mamdouh Al-Saudi © 2024'
    }
  }
};
