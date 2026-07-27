# Rupesh Kumar Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS. The site presents profile information, skills, selected GitHub projects, professional journey, and a contact section in a single-page layout.

## Features

- Responsive single-page portfolio layout
- GitHub profile data loaded from the GitHub API
- Featured projects loaded from GitHub repositories tagged with the `featured` topic
- Reusable UI components for buttons, cards, and section titles
- Sections for hero, about, skills, projects, journey, contact, and footer
- Tailwind CSS styling with Vite for fast local development

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint
- GitHub REST API

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

On Windows PowerShell, if `npm` is blocked by script execution policy, use `npm.cmd` instead:

```bash
npm.cmd run lint
```

## GitHub Project Data

Project cards are fetched from the GitHub API in `src/services/github.js`.

The current GitHub username is:

```js
const USERNAME = "krrupesh2000";
```

Only repositories with the `featured` topic are shown in the Projects section. To feature a repository, add `featured` to its GitHub repository topics.

## Project Structure

```text
src/
  assets/
  components/
    layout/
    sections/
    ui/
  services/
  App.jsx
  main.jsx
```

## Main Sections

- `Navbar` - site navigation and resume link
- `Hero` - GitHub-powered profile introduction
- `About` - personal summary and contact details
- `Skills` - technology list
- `Projects` - featured GitHub repositories
- `Journey` - career or learning timeline
- `Contact` - contact form UI
- `Footer` - navigation and social links

## Customization

- Update profile text in `src/components/sections/About.jsx`
- Update skills in `src/components/sections/Skills.jsx`
- Update journey entries in `src/components/sections/Journey.jsx`
- Update footer links in `src/components/layout/Footer.jsx`
- Change the GitHub username in `src/services/github.js`

## License

This project is for personal portfolio use.
