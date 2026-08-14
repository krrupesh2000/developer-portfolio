// PROJECT IMAGES

import portfolioImage from '../assets/projects/portfolio-optimized.jpg';
import NotesImage from '../assets/projects/notes-app-optimized.jpg';
import ecommerceImage from '../assets/projects/ecommerce-optimized.jpg';
import DevBoardImage from '../assets/projects/DevBoard.png';

// PROJECT METADATA

const portfolioMetadata = {
  image: portfolioImage,
  homepage: 'https://krrupesh-portfolio-v2.vercel.app/',
  technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Motion', 'Vite'],
};

const ecommerceMetadata = {
  image: ecommerceImage,
  homepage: 'https://krrupesh-ecommerce-v2.vercel.app/',
  technologies: ['React', 'JWT', 'Razorpay', 'Tailwind CSS'],
};

const notesMetadata = {
  image: NotesImage,
  homepage: 'https://krrupesh-notes-v2.vercel.app/',
  technologies: ['React', 'Tailwind CSS'],
};

const devboardMetadata = {
  image: DevBoardImage,
  homepage: 'https://dev-board-sooty.vercel.app/',
  technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Motion', 'Vite'],
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
  {
    metadata: devboardMetadata,
    keys: ['devboard', 'dev-board', 'krrupesh-dev-board'],
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
  'dev-board': devboardMetadata,
  'dev-board-v2': devboardMetadata,
};
