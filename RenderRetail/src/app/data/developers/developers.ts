export interface Developer {
  name: string;
  role: string;
  description: string;
  technologies: string[];
  photo: string;
  github: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  cv: string;
  titles: string[];
}

export const DEVELOPERS: Developer[] = [
  {
    name: "Mateo",
    role: "Frontend Developer",
    description: "Apasionado por crear interfaces atractivas y responsivas usando Angular.",
    technologies: ["Angular", "HTML", "CSS", "TypeScript"],
    photo: "images/Eduardo.jpg",
    github: "#",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    cv: "#",
    titles: ["Desarrollador", "Estudiante", "GymRat"]
  },
  {
    name: "Eduardo",
    role: "Full Stack Developer",
    description: "Combina experiencia backend y frontend para construir soluciones completas.",
    technologies: ["Node.js", "Angular", "MongoDB", "Express"],
    photo: "images/Eduardo.jpg",
    github: "#",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    cv: "#",
    titles: ["Developer", "Designer", "Youtuber"]
  },
  {
    name: "Gabriel",
    role: "Backend Developer",
    description: "Optimiza rendimiento y estructura del servidor con tecnologías modernas.",
    technologies: ["Java", "SQL", "NestJS"],
    photo: "images/Eduardo.jpg",
    github: "#",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    cv: "#",
    titles: ["Developer", "Designer", "Youtuber"]
  }
];
