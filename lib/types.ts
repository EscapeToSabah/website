export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string; // ISO string, e.g. 2026-03-14
  tags: string[];
  content: string; // markdown
  featured: boolean;
};

export type Tip = {
  slug: string;
  title: string;
  category: string; // e.g. "Before You Go", "Getting Around", "Money & Safety"
  icon: string; // lucide icon name, e.g. "Backpack"
  summary: string;
  content: string; // markdown
  order: number;
};

export type Experience = {
  slug: string;
  title: string;
  category: string; // e.g. "Mountains", "Islands & Diving", "Wildlife", "Culture"
  location: string;
  elevationM: number; // metres above sea level; negative = underwater depth
  difficulty: string; // e.g. "Easy", "Moderate", "Challenging"
  duration: string; // e.g. "Half day", "3 days"
  image: string;
  summary: string;
  content: string; // markdown
  featured: boolean;
};
