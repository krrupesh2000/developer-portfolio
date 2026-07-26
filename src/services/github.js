const USERNAME = "krrupesh2000";

const BASE_URL = "https://api.github.com/users";

export async function getProfile() {
  const response = await fetch(`${BASE_URL}/${USERNAME}`);

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  const data = await response.json();

  return data;
}

export async function getRepositories() {
  const response = await fetch(
    `${BASE_URL}/${USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  const data = await response.json();

  return data.filter((repo) => repo.topics.includes("featured"));
}