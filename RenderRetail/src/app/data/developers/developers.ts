export interface Developer {
  name: string;
  role: string;
  description: string;
  technologies: string[];
  photo: string;
  github: string;
  linkedin: string;
  twitter: string;
  cv: string;
}

export const DEVELOPERS: Developer[] = [
  {
    name: "Mateo",
    role: "Frontend Developer",
    description: "Apasionado por crear interfaces atractivas y responsivas usando Angular.",
    technologies: ["Angular", "HTML", "CSS", "TypeScript"],
    photo: "assets/mateo.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
    cv: "#"
  },
  {
    name: "Eduardo",
    role: "Full Stack Developer",
    description: "Combina experiencia backend y frontend para construir soluciones completas.",
    technologies: ["Node.js", "Angular", "MongoDB", "Express"],
    photo: "assets/eduardo.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
    cv: "#"
  },
  {
    name: "Gabriel",
    role: "Backend Developer",
    description: "Optimiza rendimiento y estructura del servidor con tecnologías modernas.",
    technologies: ["Java", "SQL", "NestJS"],
    photo: "assets/gabriel.jpg",
    github: "#",
    linkedin: "#",
    twitter: "#",
    cv: "#"
  }
];
