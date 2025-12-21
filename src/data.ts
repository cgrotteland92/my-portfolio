import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiUniversalAccess } from "react-icons/bi";
import type { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  summary: string;
  details: string;
  image: string;
  githubLink: string;
  liveLink: string;
  stack: string[];
  features: string[];
}

export interface Tool {
  id: number;
  name: string;
  icon: IconType;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Holidaze",
    summary: "Project Exam 2 - React with TypeScript and Tailwind CSS.",
    details: `Holidaze is a modern front-end accommodation booking application built for the final exam project at Noroff. The core of the application is for a user to register and log in as a customer or a venue manager. The customer can search for venues and book accommodations, while the venue manager can create, update, and delete venues.
     A key technical highlight is for the user to book a venue using react day picker. There is logic to parse existing booking data from the API and display available dates and to disable unavailable dates.`,
    image: "/images/Holidaze/venue.webp",
    githubLink: "https://github.com/cgrotteland92/project-exam2",
    liveLink: "https://lotusholidaze.netlify.app/",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "REST API"],
    features: [
      "- Dual Role System: Seamlessly switch between Customer and Venue Manager views.",
      "- Smart Search: Filter venues by continent, price, and guest capacity.",
      "- Interactive Calendar: React Day Picker integration for booking management.",
      "- Manager Dashboard: Create, update, and delete venues with ease.",
    ],
  },
  {
    id: 2,
    title: "BlackBox",
    summary: "Noroff Project - React with TypeScript and Tailwind CSS. ",
    details: `An e-commerce style application built with modern React patterns to mimic a real-world e-commerce website with a dynamic product catalog, individual product details and a functional checkout flow. 
    I used a Global Cart State in the navigation bar that updates instantly and shows across different routes and utilizing localStorage to ensure the user's cart remaines saved.
      My first project with React and TypeScript.`,
    image: "/images/BlackBox/Blackboxhome.webp",
    githubLink:
      "https://github.com/NoroffFEU/jsfw-2025-v1-christian-jsframeworks",
    liveLink: "https://reactblackbox.netlify.app/",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "REST API",
    ],
    features: [
      "- Client-Side Cart: custom hook (useCart) for managing state and item badges.",
      "- Responsive UI: Mobile-first design with sticky headers and brand styling.",
      "- Routing: Seamless navigation between Home, Products, Contact, and Checkout.",
      "- Accessibility: Keyboard-friendly navigation and proper ARIA labels.",
      "- SEO Optimized: configured with meta tags, favicons, and manifest.",
    ],
  },
  {
    id: 3,
    title: "SnapShop Auction House",
    summary:
      "Noroff Semester Project 2 - HTML, Tailwind CSS and Vanilla JavaScript.",
    details: `An auction platform allowing users to list items, bid on products, and manage their credits. This project is built with vanilla JavaScript and so it demonstrates how to build a Single Page Application (SPA), handling routing and state changes manually.
    For the bidding system I implemented a custom bid history that updates in real-time so the users can see the latest bids and time remaining before deadline. The creator of a listing has full CRUD control over their listings.`,
    image: "/images/SnapShop/screenshot1.webp",
    githubLink:
      "https://github.com/cgrotteland92/Semester-project-2?tab=readme-ov-file",
    liveLink: "https://snapshopp.netlify.app/",
    stack: ["HTML", "Tailwind CSS", "Vanilla JavaScript", "REST API"],
    features: [
      "- User Authentication: Secure login/register (restricted to Noroff email domains).",
      "- Listing Management: Create, edit, and delete auction listings with media.",
      "- Bidding System: Place bids and view dynamic bid history updates.",
      "- Masonry Layout: Custom responsive grid for displaying auction items.",
      "- Credit System: Manage virtual credits for bidding on items.",
    ],
  },
];

export const tools: Tool[] = [
  { id: 1, name: "React", icon: FaReact },
  { id: 2, name: "TypeScript", icon: SiTypescript },
  { id: 3, name: "Tailwind CSS", icon: SiTailwindcss },
  { id: 4, name: "JavaScript", icon: FaJs },
  { id: 5, name: "CSS", icon: FaCss3Alt },
  { id: 6, name: "HTML", icon: FaHtml5 },
  { id: 7, name: "Accessibility", icon: BiUniversalAccess },
];
