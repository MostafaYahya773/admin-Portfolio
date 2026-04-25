export interface Project {
  id?: string;
  name: string;
  title: string;
  description: string;
  tools: string;
  live_url: string;
  github_url: string;
  project_date: string;
  image_url: File | null;
}
export interface LinksPops {
  name: string;
  href: string;
}

export interface ProjectData {
  name: string;
  id: string;
}
