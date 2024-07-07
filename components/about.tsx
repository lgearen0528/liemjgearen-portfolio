"use client";

import SectionHeading from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated from <span className="font-medium">Augustana College</span> with a B.A. degree in{" "}
        <span className="font-medium">Computer Science</span> with minors in <span className="font-medium">Mathematics and Entreprenurial Skills</span>.
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span>
        </p>
        <ul className="list-inside list-disc">
        I am also familiar with the following:{" "}
          <li>Python</li>
          <li>Typescript</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>SQL</li>
          <li>Docker</li>
          <li>SaaS Tooling Administration (i.e. Jira, Mural, TeamRetro, SharePoint)</li>
          <li>
            Cloud: <span className="font-medium">AWS Services (Lambda, ECS, S3, DynamoDB, IAM)</span><br/>
            Deployed with: <span className="font-medium">Terraform / Terragrunt and CloudFormation</span>
          </li>
        </ul>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, roasting my own coffee, and tending to my chickens with my family. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and continuously improving my skills.
      </p>
      <p>I have also spent over 10 years with the Boy Scouts of America where I have earned my Eagle Scout award and have served in several leadership roles within my troop and within an official Scout Camp staff.</p>
    </motion.section>
  );
}
