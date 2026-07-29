
// PROJECT IMAGES

import portfolioImage from "../assets/projects/portfolio.png";
import NotesImage from "../assets/projects/notes-app.png";
import ecommerceImage from "../assets/projects/ecommerceImage.jpeg";



const portfolioMetadata = {
  image: portfolioImage,

  technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
};

const ecommerceMetadata = {
  image: ecommerceImage,

  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
};

const notesMetadata = {
  image: NotesImage,

  technologies: ["React", "Tailwind CSS", "Chart.js", "REST API", "Firebase"],
};

export const projectMetadata = {
  "developer-portfolio": portfolioMetadata,
  portfolio: portfolioMetadata,

  ecommerce: ecommerceMetadata,
  "e-commerce": ecommerceMetadata,

  notes: notesMetadata,
  "notes-app": notesMetadata,
  Notes: notesMetadata,
};
