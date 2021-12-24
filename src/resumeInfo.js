import hexlabs from "./images/hexlabs_logo.jpg";
import gtri from "./images/gtri_logo.jpeg";
import tbd from "./images/tbd.png";
import discord from "./images/discord.jpeg";
import excessible from "./images/excessible.png";

export default {
  workExperience: [
    {
      image: tbd,
      company: "To Be Announced",
      role: "Software Engineer Intern",
      timeline: "Summer 2022",
      description: "...",
    },
    {
      image: hexlabs,
      company: "Hexlabs Inc.",
      role: "Software Engineer",
      timeline: "December 2020 - Present",
      description:
        "Developing web based projects for the largest hackathon in the Southeast used by over 2000 attendees. Built with React, Express, MongoDB, Node, and GraphQL.",
    },
    {
      image: gtri,
      company: "Georgia Tech Research Institute",
      role: "Software Engineer Intern",
      timeline: "May 2020 - Present",
      description:
        "Create dashboards and visualizations in Python with Pandas, NumPy, Plotly, and Dash. Developed desktop application in C# to test radar systems and validate attenuator inputs for Electronic Warfare.",
    },
  ],
  projects: [
    {
      image: hexlabs,
      link: "https://github.com/HackGT/timber",
      title: "Timber",
      tags: "Hexlabs",
      description:
        "Web app to facilitate virtual project submission and judging for over 50 judges and 2000 participants at HackGT. Built using TypeScript, ReactJS, PostgreSQL, Prisma, and Ant Design",
    },
    {
      image: discord,
      link: "https://github.com/HackGT/beardell2/tree/discord-bot",
      title: "Beardell Bot",
      tags: "Hexlabs",
      description:
        "Discord bot with a mentor facing dashboard to help streamline participant experience at HackGT by pairing participants with mentors. Built using Discord.js, TypeScript, ReactJS, and MongoDB",
    },
    {
      image: excessible,
      link: "https://devpost.com/software/excessible",
      title: "Excessible",
      tags: "Most Impactful @ HackGT 7",
      description:
        "Website that connects food banks and grocery stores to lower waste and ensure underserved food banks are adequately stocked. Built using ReactJS, Google Firebase, and Google Maps API",
    },
  ],
};
