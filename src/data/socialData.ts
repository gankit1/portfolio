export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    icon: "GitHub",
    url: "https://github.com/gankit1",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "LinkedIn",
    url: "https://www.linkedin.com/in/ankit-kumar-gupta-ba8076162",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "Twitter",
    url: "https://x.com/ankitgupta12214",
  },
  {
    id: "email",
    name: "Email",
    icon: "Email",
    url: "mailto:ankit.gupta.sde@gmail.com",
  },
  {
    id: "medium",
    name: "Medium",
    icon: "Article",
    url: "https://medium.com/@ankitguptait0",
  },
  {
    id: "codepen",
    name: "CodePen",
    icon: "Code",
    url: "https://codepen.io/zamlxzwy-the-encoder",
  },
];
