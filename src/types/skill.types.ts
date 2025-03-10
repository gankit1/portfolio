export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}
