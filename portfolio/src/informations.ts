import competreeLogo from "./assets/images/projects/competree.png";
import dailybreadLogo from "./assets/images/projects/dailybread.png";
import introcamLogo from "./assets/images/projects/introcam.png";
import iwemapLogo from "./assets/images/projects/iwemap.png";
import justapplyLogo from "./assets/images/projects/justapply.png"
import edemiLogo from "./assets/images/projects/edemi.png"
import { Article } from "./types/Article";
import { Project } from "./types/Project";
import { Work } from "./types/Work";

export const aboutme: {
  username: string;
  profile: string;
  interests: string;
  workStatus: string;
} = {
  username: "Roph PAD",
  profile:
    "I'm Rophen PADONOU. I enjoy solving everyday problems using my tech skills.",
  interests:
    "When I'm not hitting my keyboard, you'll usually find me playing BasketBall, or discovering new places and experiences.",
  workStatus:
    "Currently I'm building competree, a tool to create, manage and share any competition effortlessly. Previously, I have worked as a developer and designer.",
};

export const projects: Project[] = [
  {
    name: "competree",
    logo: competreeLogo,
    link: "https://competree.vercel.app/",
    description: "Create, manage and share any competition effortlessly.",
  },
  {
    name: "introcam",
    logo: introcamLogo,
    link: "https://introcam.pagy.site",
    description: "Record presentation video while reading script.",
  },
  {
    name: "iwemap",
    logo: iwemapLogo,
    link: "https://iwemap.vercel.app/",
    description: "A simple online books explorer for a local library.",
  },
  {
    name: "dailybread",
    logo: dailybreadLogo,
    link: "https://dailybread-store.vercel.app/",
    description: "Order breads and accompaniments online.",
  },
  {
    name: "justapply",
    logo: justapplyLogo,
    link: "https://justapply.vercel.app/",
    description: "Apply for jobs online.",
  },
  {
    name: "edemi",
    logo: edemiLogo,
    link: "https://edemi.vercel.app/",
    description: "Learn african languages one word at the time.",
  },
];

export const designs: { name: string; link: string }[] = [
  {
    name: "My design works",
    link: "https://www.notion.so/my-design-works-2494347db4b380ae80b6d493b08e8e49",
  },
];

export const works: Work[] = [
  {
    company: "BLOCKSOLUT",
    role: "Frontend Engineer",
    description: "Worked on financial web applications",
    projects: [
      {
        description: "Bitcoin payment platform",
        link: "https://beta.bitcoinflash.xyz",
      },
    ],
    startDate: "Oct 2025",
    endDate: "Now",
  },
  {
    company: "AEIG",
    role: "FullStack dev",
    description:
      "Worked on various web development projects, focusing on both frontend and backend tasks to deliver comprehensive solutions.",
    projects: [
      { description: "Job matching and recruitment platform", link: "" },
      { description: "Pollution signalement platform", link: "" },
    ],
    startDate: "Jan 2025",
    endDate: "Jul 2025",
  },
  {
    company: "Freelance",
    role: "Developer",
    description:
      "Worked on various web development projects, focusing on both frontend and backend tasks to deliver comprehensive solutions.",
    projects: [
      {
        description: "Polling platform",
        link: "https://pollapp-zeta.vercel.app/",
      },
      {
        description: "Video creation web app",
        link: "https://easyvideo.vercel.app/",
      },
    ],
    startDate: "2024",
    endDate: "now",
  },
  {
    company: "Freelance",
    role: "Designer",
    description: "Worked on various web design projects.",
    projects: [
      {
        description: "Notion page of my design works",
        link: "https://www.notion.so/my-design-works-2494347db4b380ae80b6d493b08e8e49",
      },
    ],
    startDate: "2020",
    endDate: "now",
  },
];

export const articles: Article[] = [
  {
    title: "What happens when typing www.google.com ?",
    field: "Web",
    platform: "Medium",
    date: "21 June 2022",
    link: "https://www.medium.com",
  },
];

export const socialNetworks: { name: string; link: string }[] = [
  { name: "github", link: "https://github.com/Rophpad" },
  { name: "x", link: "https://x.com/rophpad" },
  // { name: "telegram", link: "https://github.com/Rophpad" },
  { name: "linkedIn", link: "https://www.linkedin.com/in/rophpad/" },
  // { name: "mail", link: "mailto:rophen.padonou@epitech.eu.com" },
  { name: "discord", link: "https://discordapp.com/users/903280263763726376" },
];
