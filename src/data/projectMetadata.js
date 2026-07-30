// PROJECT IMAGES

import portfolioImage from '../assets/projects/portfolio-optimized.jpg';
import NotesImage from '../assets/projects/notes-app-optimized.jpg';
import ecommerceImage from '../assets/projects/ecommerce-optimized.jpg';

const portfolioMetadata = {
  image: portfolioImage,
  homepage: 'https://krrupesh-portfolio-v2.vercel.app/',
  technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
};

const ecommerceMetadata = {
  image: ecommerceImage,
  homepage: 'https://krrupesh-ecommerce-v2.vercel.app/',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
};

const notesMetadata = {
  image: NotesImage,
  homepage: 'https://krrupesh-notes-v2.vercel.app/',
  technologies: ['React', 'Tailwind CSS', 'Chart.js', 'REST API', 'Firebase'],
};

export const projectMetadata = {
  'developer-portfolio': portfolioMetadata,
  portfolio: portfolioMetadata,

  ecommerce: ecommerceMetadata,
  'e-commerce': ecommerceMetadata,

  notes: notesMetadata,
  'notes-app': notesMetadata,
  Notes: notesMetadata,
};
