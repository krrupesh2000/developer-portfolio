const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const USERNAME = 'krrupesh2000';

const BASE_URL = 'https://api.github.com/users';

export async function getProfile() {
  const headers = {
    Accept: 'application/vnd.github+json',
  };

  if (GITHUB_API_KEY) {
    headers.Authorization = `Bearer ${GITHUB_API_KEY}`;
  }
  const response = await fetch(`${BASE_URL}/${USERNAME}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }

  const data = await response.json();

  return data;
}

export async function getRepositories() {
  const headers = {
    Accept: 'application/vnd.github+json',
  };

  if (GITHUB_API_KEY) {
    headers.Authorization = `Bearer ${GITHUB_API_KEY}`;
  }
  const response = await fetch(
    `${BASE_URL}/${USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers,
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch repositories.');
  }

  const data = await response.json();

  return data.filter((repo) => repo.topics.includes('featured'));
}
