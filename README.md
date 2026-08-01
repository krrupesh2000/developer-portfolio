# Rupesh Kumar - Personal Portfolio

[![Build Status](https://img.shields.io/vercel/build/krrupesh2000/Portfolio-2?token=YOUR_VERCEL_BUILD_TOKEN&style=for-the-badge)](https://vercel.com/krrupesh2000/Portfolio-2)
[![Code Quality](https://img.shields.io/lgtm/grade/javascript/g/krrupesh2000/Portfolio-2.svg?style=for-the-badge)](https://lgtm.com/projects/g/krrupesh2000/Portfolio-2/context:javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This is my personal portfolio website, meticulously crafted to showcase my skills, projects, and professional journey as a Full Stack MERN Developer. It's a modern, single-page application built with React, Vite, and Tailwind CSS, designed to be both visually appealing and highly performant.

## Live Demo

**[Live Demo](https://developer-portfolio-rho-livid.vercel.app/)**

## Features

- **Dynamic Profile:** Fetches my GitHub profile information in real-time.
- **Featured Projects:** Displays a curated list of my projects from GitHub, tagged with "featured".
- **Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktop computers.
- **Interactive UI:** Smooth animations and transitions using `motion`.
- **Skills Showcase:** A dedicated section to highlight my technical skills.
- **Professional Journey:** A timeline of my career and learning experiences.
- **Contact Form:** A functional contact form for visitors to get in touch.
- **Fallback Data:** Implemented fallback for profile image, so the site will still look great even if the GitHub API is down.
- **AbortController:** Asynchronous requests can be cancelled to prevent memory leaks.

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - `motion` for animations
  - `clsx` for conditional class names
  - `react-icons` for icons
- **Backend (for data fetching):**
  - GitHub REST API
- **Development & Testing:**
  - ESLint for code linting
  - Prettier for code formatting
  - Vitest for unit testing
  - Knip for detecting unused files and dependencies

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/krrupesh2000/Portfolio-2.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the code using ESLint.
- `npm run test`: Runs the tests using Vitest.
- `npm run format`: Formats the code using Prettier.
- `npm run format:check`: Checks the formatting of the code using Prettier.
- `npm run knip`: Detects unused files and dependencies.
- `npm run preview`: Serves the production build locally.

## Environment Variables

This project does not require any environment variables.

## Testing

This project uses Vitest for unit testing. To run the tests, use the following command:

```sh
npm run test
```

## Deployment

This project is deployed on Vercel. To deploy your own version, you can use the Vercel CLI or connect your Git repository to Vercel.

### Vercel CLI

1.  Install the Vercel CLI
    ```sh
    npm install -g vercel
    ```
2.  Deploy the app
    ```sh
    vercel
    ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Project Structure

The `src` directory contains the main application code, organized as follows:

```
src/
├── animations/      # Animation variants for motion
├── assets/          # Static assets like images and resume
├── components/      # Reusable React components
│   ├── about/
│   ├── contact/
│   ├── hero/
│   ├── journey/
│   ├── layout/
│   ├── navbar/
│   ├── projects/
│   ├── skills/
│   └── ui/          # Basic UI components (Button, Card, etc.)
├── data/            # Fallback data and static content
├── services/        # Services for fetching data from external APIs
├── styles/          # CSS files and stylesheets
├── utils/           # Utility functions
├── App.jsx          # Main application component
└── main.jsx         # Entry point of the application
```

## Customization

To customize this portfolio for your own use, you'll need to make changes in a few key places:

- **GitHub Username:** Change the `USERNAME` constant in `src/services/github.js` to your GitHub username.
- **Profile Information:** Update your personal information in `src/data/profile.js` (this is used as a fallback).
- **Projects:**
  - To feature your own projects, add the `featured` topic to your GitHub repositories.
  - You can also add fallback project data in `src/data/fallbackProjects.js` and `src/data/projectMetadata.js`.
- **Skills:** Update the `skills.js` file in the `src/data` directory with your own skills.
- **Journey:** Modify the `JourneyData.jsx` file in `src/components/journey` to reflect your career path.
- **Resume:** Replace the `resume.pdf` file in the `public` directory with your own resume.

