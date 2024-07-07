import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
  {
    name: "Skills",
    hash: "#skills",
  },
//   {
//     name: "Experience",
//     hash: "#experience",
//   },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Augustana College",
    location: "Rock Island, IL",
    description:
      "I graduated with a B.A. in Computer Science, minors in Mathematics and Entrepreneurial Skills",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "IT Early Development Program - John Deere Parts Order Management Modernization",
    location: "John Deere Parts Distribution Center, Milan, IL",
    description:
      "Immediately following graduation, I worked as a software engineer for the John Deere Parts Order Management Modernization team, where I supported the primary application that John Deere Dealers utilized to order parts from the global supply chain John Deere holds.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Software Engineer - John Deere Parts Order Management Modernization",
    location: "John Deere Parts Distribution Center, Milan, IL",
    description:
      "I worked on the primary application that John Deere Dealers utilized to order parts from the global supply chain John Deere holds.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Senior Software Engineer - John Deere Agile Tools Team",
    location: "John Deere Digital Strategy & Transformation, Moline, IL",
    description:
      "SaaS",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Senior Software Engineer - John Deere Developer Advocacy Team",
    location: "John Deere Digital Strategy & Transformation, Moline, IL",
    description:
      "Innovation and Coaching",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: '',
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: '',
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: '',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "AWS Lambda",
  "AWS ECS",
  "AWS S3",
  "AWS API Gateway",
  "Terraform",
  "Docker",
  "Drone",
  "GitHub Actions",
  "Jira Administration",
  "Automation Utilizing REST APIs",

] as const;