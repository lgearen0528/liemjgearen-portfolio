import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import { MdDesignServices, MdOutlineRestartAlt } from "react-icons/md"

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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

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
    title:
      "IT Early Development Program - John Deere Parts Order Management Modernization",
    location: "John Deere Parts Distribution Center, Milan, IL",
    description:
      "Immediately following graduation, I worked as a software engineer for the John Deere Parts Order Management Modernization team, where I supported the primary application that John Deere Dealers utilized to order parts from the global supply chain John Deere holds.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title:
      "Software Engineer - John Deere Parts Order Management Modernization",
    location: "John Deere Parts Distribution Center, Milan, IL",
    description:
      "I worked on the primary application that John Deere Dealers utilized to order parts from the global supply chain John Deere holds.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Senior Software Engineer - John Deere Agile Tools Team",
    location: "John Deere Digital Strategy & Transformation, Moline, IL",
    description:
      "SaaS Tooling Administration with the following tools: Jira, Mural, TeamRetro, SharePoint. I also implemented several methods of automation using AWS Lambda and REST API calls that were made available by the SaaS products." +
      "These automations helped enabled John Deere's several hundred software delivery teams to quickly and efficiently use these tools for their project needs while also ensuring proper cost savings to the enterprise.",
    icon: React.createElement(MdDesignServices),
    date: "2022 - 2024",
  },
  {
    title: "Senior Software Engineer - John Deere Developer Advocacy Team",
    location: "John Deere Digital Strategy & Transformation, Moline, IL",
    description:
      "The Developer Advocacy team is responsible for shaping and enabling the future of the digital product teams within John Deere. I helped enable our digital ecosystem to collect data using GitHub APIs and visualize it so teams would be enabled to make data-driven decisions on their own software development lifecycle practices." +
      "I also coached several divisions of the enterprise on their own software engineering practices, and helped show data to prove where improvements could be made. This includes the team's Lead Time, Cycle Time, Deployment frequencies, Segregation of Duties, and other metrics.",
    icon: React.createElement(MdOutlineRestartAlt),
    date: "2024 - present",
  },
] as const

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
  },
] as const

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
] as const
