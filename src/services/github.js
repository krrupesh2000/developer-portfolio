const USERNAME = 'krrupesh2000';

const BASE_URL = 'https://api.github.com/users';
const FEATURED_TOPIC = 'featured';

const githubHeaders = {
  Accept: 'application/vnd.github+json',
};

function assertOkResponse(response, message) {
  if (!response.ok) {
    throw new Error(message);
  }
}

function normalizeRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage?.trim() || '',
    language: repo.language,
    topics: Array.isArray(repo.topics) ? repo.topics : [],
    updated_at: repo.updated_at,
  };
}

function isFeaturedRepo(repo) {
  return repo.topics.some(
    (topic) => topic.toLowerCase() === FEATURED_TOPIC,
  );
}

export async function getProfile() {
  const response = await fetch(`${BASE_URL}/${USERNAME}`, {
    headers: githubHeaders,
  });

  assertOkResponse(response, 'Failed to fetch profile');

  const data = await response.json();

  return data;
}

export async function getRepositories() {
  const response = await fetch(
    `${BASE_URL}/${USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: githubHeaders,
    },
  );

  assertOkResponse(response, 'Failed to fetch repositories.');

  const data = await response.json();

  return data
    .map(normalizeRepo)
    .filter(isFeaturedRepo)
    .sort((repoA, repoB) => new Date(repoB.updated_at) - new Date(repoA.updated_at));
}
