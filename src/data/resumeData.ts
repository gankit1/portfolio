/**
 * Resume data for portfolio website
 * Last updated by gankit1: 2025-03-09 05:44:07
 */

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  field?: string;
}

export interface WorkExperience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  dateOfBirth: string;
  linkedIn: string;
  github: string;
  summary: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Ankit Kumar Gupta",
  email: "ankit.gupta.sde@gmail.com",
  phone: "+91 9650960634",
  location: "Noida, India",
  dateOfBirth: "23 November, 1998",
  linkedIn: "https://www.linkedin.com/in/ankit-kumar-gupta-ba8076162",
  github: "https://github.com/gankit1",
  summary:
    "Passionate and innovative front-end developer with 3 years of experience in crafting dynamic and responsive web applications. Adept at utilizing the latest web technologies and frameworks to deliver high-quality, user-centric solutions. Seeking a challenging role to leverage my technical skills and creativity, while contributing to a forward-thinking team committed to excellence in web development.",
};

export const workExperience: WorkExperience[] = [
  {
    position: "SOFTWARE DEVELOPER",
    company: "Consenko",
    startDate: "01/2024",
    endDate: "Present",
    location: "Noida",
    highlights: [
      "Enhanced user experience through the development of responsive and accessible UI using advanced CSS techniques (e.g., Flexbox, Grid).",
      "Implemented a liveness detection feature in a React application using AWS services to enhance user authentication security.",
      "Engineered reusable React components, enhancing code maintainability and reducing development time.",
      "Implemented comprehensive internationalization (i18n) for a React-based and Utilized the react-i18next library, employing the useTranslation hook for efficient language switching.",
      "Spearheaded the creation and maintenance of a comprehensive in-house UI library (Custom UI Library Development).",
      "Implemented sophisticated form handling across multiple projects using react-hook-form library (Implemented real-time form validation, reducing form submission errors by 60%).",
      "Advocated for using SVGs as components for icons to enable dynamics updates.",
    ],
  },
  {
    position: "SOFTWARE DEVELOPER",
    company: "Redcliffe Life Diagnostics",
    startDate: "04/2022",
    endDate: "10/2023",
    location: "Noida, India",
    highlights: [
      "Associate Technical Project Coordinator for CRM Pathology, CRM Radiology, and CRM Corporate Team.",
      "Build Customer Relationship Management Web Application.",
      "Implemented Pusher socket for Real-time messaging.",
      "Implement MapMyIndia In All Project.",
      "Implemented 3rd party tools like Ozentell dialer and single singin call module using webhook.",
      "Implemented ChatGPT for CRM Application.",
    ],
  },
  {
    position: "FRONTEND DEVELOPER - INTERN",
    company: "Redcliffe Life Science Pvt Ltd",
    startDate: "11/2021",
    endDate: "04/2022",
    location: "Noida /India",
    highlights: [
      "Manage CRM Web Application.",
      "Utilised front-end frameworks like React to create dynamic and interactive user interfaces.",
      "Design components to manage leads, including adding new leads, tracking lead status, and assigning leads to team members.",
      "Collaborated with designers and backend developer to implement frontend components and integrate them seamlessly with backend system.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "BACHELOR OF TECHNOLOGY(IT)",
    institution: "Dr. A. P. J. Abdul Kalam Technical University (U.P)",
    startDate: "08/2016",
    endDate: "09/2020",
    location: "Uttar Pradesh/India",
    field: "Information Technology",
  },
  {
    degree: "INTERMEDIATE",
    institution: "JANTA INTER COLLEGE",
    startDate: "04/2014",
    endDate: "03/2015",
    location: "Ballia/Uttar Pradesh",
    field: "Courses",
  },
];

export const projects: Project[] = [
  {
    title: "Wizcart",
    period: "01/2024 - Present",
    description: [
      "Wizcart is your one-stop destination trusted professionals near you for all your need, including home services, as well as electronic repairs.",
    ],
  },
  {
    title: "CUSTOMER RELATIONSHIP MANAGEMENT (CRM)",
    period: "11/2021 - Present",
    description: [
      "Handle multiple business in a single Application like (Home Dx, Radiology, Genomics,Inventory)",
      "Designed a system that manages a team of call center and Live Calling and messaging system to CRM.",
      "52+ Types Usergroup created in a single project to manage Diagnostic business.",
    ],
  },
  {
    title: "DISNEY-CLONE",
    period: "05/2021 - 07/2021",
    description: [
      "Disney clone made with advanced react, redux & firebase which uses redux-thunk to asynchronously fetch movie data of over 30 thousand movies fromTmdb api.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Capgemini Tech Challenge",
    date: "03/2021",
    description: "Got 67th rank on the React JS board.",
  },
  {
    title: "Goldman Sachs Engineering Virtual Program 2020",
    date: "06/2020",
    description: "For open-source contribution",
  },
];

export const skills: Skills = {
  technical: [
    "React JS",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Next Js",
    "Tailwind CSS",
    "HTML",
    "CSS/SASS",
    "AJAX",
    "Git/GitHub",
    "Bootstrap",
    "Material UI",
    "Jira",
    "Confluence",
  ],
  soft: ["Teamwork & Collaboration Abilities", "Problem-Solving Abilities"],
};
