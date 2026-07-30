# Rupesh Kumar - Personal Portfolio

This is my personal portfolio website, meticulously crafted to showcase my skills, projects, and professional journey as a Full Stack MERN Developer. It's a modern, single-page application built with React, Vite, and Tailwind CSS, designed to be both visually appealing and highly performant.

## Live Demo

**(Link to the deployed portfolio will be here)**

## Features

- **Dynamic Profile:** Fetches my GitHub profile information in real-time.
- **Featured Projects:** Displays a curated list of my projects from GitHub, tagged with "featured".
- **Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktop computers.
- **Interactive UI:** Smooth animations and transitions using `motion`.
- **Skills Showcase:** A dedicated section to highlight my technical skills.
- **Professional Journey:** A timeline of my career and learning experiences.
- **Contact Form:** A functional contact form for visitors to get in touch.
- **Fallback Data:** Implemented fallback for profile image, so the site will still look great even if the GitHub API is down.

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
- **Development:**
  - ESLint for code linting

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

## License

This project is for personal portfolio use. Feel free to fork it and adapt it for your own purposes.
