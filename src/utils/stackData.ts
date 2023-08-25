import { TbBrandNextjs } from "react-icons/tb";
import {
  SiDjango,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  { title: "Tailwind", img: BiLogoTailwindCss },
  { title: "Styled-components", img: SiStyledcomponents },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Next.js", img: TbBrandNextjs },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "Nest.js", img: SiNestjs },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "MySQL", img: SiMysql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Django", img: SiDjango },
  { title: "Express.js", img: SiExpress },
];
