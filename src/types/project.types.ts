export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  category: string;
  completedDate: string;
  duration?: string;
  role?: string;
  client?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}
