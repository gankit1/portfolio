// import { Project } from "../types/project.types";

// export const projects: Project[] = [
//   {
//     id: "project1",
//     title: "E-Commerce Platform",
//     description:
//       "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and payment integration.",
//     image: "/images/projects/project1.jpg",
//     technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
//     liveUrl: "https://ecommerce-platform.example.com",
//     githubUrl: "https://github.com/ShankarCourseraPersonal/ecommerce-platform",
//     featured: true,
//     category: "",
//     completedDate: "",
//   },
//   {
//     id: "project2",
//     title: "Task Management App",
//     description:
//       "A Kanban-style task management application with drag-and-drop functionality, task filtering, and user collaboration features.",
//     image: "/images/projects/project2.jpg",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Firebase",
//       "Material-UI",
//       "React DnD",
//     ],
//     liveUrl: "https://task-management.example.com",
//     githubUrl: "https://github.com/ShankarCourseraPersonal/task-management",
//     featured: true,
//     category: "",
//     completedDate: "",
//   },
//   {
//     id: "project3",
//     title: "Weather Dashboard",
//     description:
//       "An interactive weather dashboard that displays current and forecasted weather data with beautiful visualizations and location-based services.",
//     image: "/images/projects/project3.jpg",
//     technologies: [
//       "React",
//       "Redux",
//       "ChartJS",
//       "OpenWeather API",
//       "Styled Components",
//     ],
//     liveUrl: "https://weather-dashboard.example.com",
//     githubUrl: "https://github.com/ShankarCourseraPersonal/weather-dashboard",
//     featured: false,
//     category: "",
//     completedDate: "",
//   },
// ];

/**
 * Project data for portfolio showcase
 * Last updated by ShankarCoursera: 2025-03-09 05:48:42
 */

import { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: "wizcart",
    title: "Wizcart",
    description:
      "Wizcart is your one-stop destination for trusted professionals near you for all your needs, including home services and electronic repairs. The platform connects users with verified service providers, simplifying the process of finding reliable help for various tasks.",
    image: "/images/projects/wizcart.jpg",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
    ],
    githubUrl: null, // Assuming this is a private company project
    liveUrl: "https://wizcart.com",
    featured: true,
    category: "fullstack",
    completedDate: "2024-01-15",
    duration: "3 months",
    role: "Frontend Developer",
    client: "Consenko",
    features: [
      "Service provider search and filtering",
      "Real-time booking system",
      "Service provider profiles and reviews",
      "Secure payment processing",
      "User authentication and profile management",
    ],
    challenges: [
      "Implementing real-time updates for service availability",
      "Optimizing search performance for large databases",
      "Creating a responsive design that works across all devices",
    ],
    solutions: [
      "Utilized WebSockets for real-time updates",
      "Implemented efficient search algorithms with caching",
      "Adopted a mobile-first approach with responsive design patterns",
    ],
  },
  {
    id: "crm-system",
    title: "Customer Relationship Management (CRM)",
    description:
      "A comprehensive CRM system that handles multiple business verticals in a single application, including Home Diagnostics, Radiology, Genomics, and Inventory. The system manages a team of call center agents with live calling and messaging capabilities integrated directly into the platform.",
    image: "/images/projects/crm.jpg",
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Pusher",
    ],
    githubUrl: null, // Assuming this is a private company project
    liveUrl: null,
    featured: true,
    category: "fullstack",
    completedDate: "2023-10-01",
    duration: "2 years",
    role: "Software Developer",
    client: "Redcliffe Life Diagnostics",
    features: [
      "Multi-business vertical support in a single platform",
      "Real-time messaging using Pusher socket",
      "MapMyIndia integration for location services",
      "Ozentell dialer integration",
      "Single sign-in call module using webhook",
      "ChatGPT integration for automated assistance",
    ],
    challenges: [
      "Managing complex relationships between different business verticals",
      "Supporting 52+ user groups with different permission levels",
      "Ensuring scalability for growing data and user base",
    ],
    solutions: [
      "Designed a flexible database schema that accommodates all business verticals",
      "Implemented a role-based access control system",
      "Adopted a modular architecture for better scalability",
    ],
  },
  {
    id: "disney-clone",
    title: "Disney+ Clone",
    description:
      "A Disney+ clone built with React, Redux, and Firebase that uses redux-thunk to asynchronously fetch movie data of over 30,000 movies from the TMDB API. The application features a responsive UI that closely resembles the official Disney+ streaming platform.",
    image: "/images/projects/disney-clone.jpg",
    technologies: [
      "React",
      "Redux",
      "Redux-Thunk",
      "Firebase",
      "CSS3",
      "TMDB API",
    ],
    githubUrl: "https://github.com/gankit1/disney-clone",
    liveUrl: "https://disney-clone-gankit1.vercel.app/",
    featured: false,
    category: "frontend",
    completedDate: "2021-07-15",
    duration: "2 months",
    role: "Frontend Developer",
    // client: null,
    features: [
      "User authentication via Firebase",
      "Movie categorization by genre",
      "Movie search functionality",
      "Detailed movie information pages",
      "Responsive design across devices",
    ],
    challenges: [
      "Managing state for large amounts of data",
      "Optimizing performance with many images and videos",
      "Creating smooth animations and transitions",
    ],
    solutions: [
      "Implemented efficient Redux state management",
      "Used lazy loading for images and content",
      "Utilized CSS transitions and React motion libraries",
    ],
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, TypeScript, and Material UI to showcase my projects, skills, and experience. The site features a clean, professional design with dark/light mode support, animations, and contact form functionality.",
    image: "/images/projects/portfolio.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "React Router",
      "EmailJS",
    ],
    githubUrl: "https://github.com/gankit1/portfolio",
    liveUrl: "https://ankitkumargupta.com",
    featured: false,
    category: "frontend",
    completedDate: "2023-12-01",
    duration: "3 weeks",
    role: "Developer",
    // client: null,
    features: [
      "Responsive design using Material UI",
      "Dark/light theme toggle",
      "Animated page transitions",
      "Project showcase with filtering",
      "Contact form with EmailJS integration",
    ],
  },
];
