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

const normalizeProjectKey = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const projectMetadataEntries = [
  {
    metadata: portfolioMetadata,
    keys: [
      'developer-portfolio',
      'developer-portfolio-v2',
      'krrupesh-portfolio-v2',
      'portfolio',
      'portfolio-v2',
      'portfolio-website',
    ],
  },
  {
    metadata: ecommerceMetadata,
    keys: ['ecommerce', 'e-commerce', 'ecommerce-v2', 'krrupesh-ecommerce-v2'],
  },
  {
    metadata: notesMetadata,
    keys: ['notes', 'notes-app', 'notes-v2', 'krrupesh-notes-v2'],
  },
];

export function getProjectMetadata(repoName = '') {
  const normalizedRepoName = normalizeProjectKey(repoName);

  return (
    projectMetadataEntries.find(({ keys }) =>
      keys
        .map(normalizeProjectKey)
        .some(
          (key) =>
            normalizedRepoName === key ||
            normalizedRepoName.includes(key) ||
            key.includes(normalizedRepoName),
        ),
    )?.metadata || {}
  );
}

export const projectMetadata = {
  'developer-portfolio': portfolioMetadata,
  portfolio: portfolioMetadata,
  ecommerce: ecommerceMetadata,
  'e-commerce': ecommerceMetadata,
  notes: notesMetadata,
  'notes-app': notesMetadata,
};
