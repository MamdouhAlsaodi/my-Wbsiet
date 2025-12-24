
export type Language = 'ar' | 'pt' | 'en';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Content {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cv_button: string;
  };
  about: {
    title: string;
    text: string;
    offer_title: string;
    offer_text: string;
    interests_title: string;
    interests: string[];
  };
  skills: {
    title: string;
    categories: {
      languages: string;
      concepts: string;
      tools: string;
      databases: string;
    };
  };
  projects: {
    title: string;
    list: Project[];
  };
  languages: {
    title: string;
    ar: string;
    pt: string;
    en: string;
  };
  goal: {
    title: string;
    text: string;
  };
  footer: {
    links: string;
    rights: string;
  };
}
