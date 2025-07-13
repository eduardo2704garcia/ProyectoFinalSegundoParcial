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
    role: "Frontend and Backend Developer",
    description: "Combina experiencia backend y frontend para construir soluciones completas.",
    technologies: ["Node.js", "Angular", "MongoDB", "Express"],
    photo: "images/Eduardo.jpg",
    github: "https://github.com/eduardo2704garcia",
    facebook: "https://www.facebook.com/profile.php?id=100089441550065",
    instagram: "https://www.instagram.com/edudgr.047/",
    linkedin: "https://www.linkedin.com/in/eduardo-garc%C3%ADa-6ba271179/",
    cv: "#",
    titles: ["Developer", "Designer", "Youtuber"]
  },
  {
    name: "Gabriel",
    role: "Web Designer",
    description: "Optimiza rendimiento y estructura del servidor con tecnologías modernas.",
    technologies: ["Java", "SQL", "NestJS"],
    photo: "images/Gabriel.jpg",
    github: "https://github.com/Teo344",
    facebook: "https://www.facebook.com/share/19a4zZLrqo/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/gabriellcriollo?igsh=MWp2M2pwemRveDd6YQ%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/mateo-criollo-a0485626a",
    cv: "#",
    titles: ["Developer", "Designer", "Youtuber"]
  }
];
