<<<<<<< HEAD

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

=======
#Frontend Daily Training 🚀

This repository contains my daily frontend training tasks as part of a self-learning roadmap to improve my skills in JavaScript, React.js, and problem solving.
The repo is organized week by week, day by day, with small projects and coding challenges.

📅 Plan Overview

Week 1: JavaScript Basics & React Fundamentals

Week 2: Mini React Projects (Todo, Calculator, Notes App)

Week 3: Working with APIs (fetch, axios, search, pagination)

Week 4: Interview Simulation & Best Practices

📂 Structure
frontend-daily-tasks
┣ 📂 week1
┃ ┣ 📂 day1
┃ ┃ ┣ counter-app
┃ ┃ ┗ js-problems.js
┃ ┣ 📂 day2
┃ ┗ ...
┣ 📂 week2
┣ 📂 week3
┣ 📂 week4
┗ README.md

Each day includes:

2–3 JavaScript problems (problem-solving)

1 React small task or project

🛠️ Technologies Used

JavaScript (ES6+)

React.js

HTML5 / CSS3 / TailwindCSS

Git & GitHub

🎯 Goal

The goal of this repo is to:

Improve my problem solving skills.

Practice React.js daily with small projects.

Build a portfolio of projects that can be shared with employers.

Prepare for frontend interviews.

🔥 Stay tuned — I will update this repository daily with new tasks and solutions.

> > > > > > > 91a58b61de69652f9f5a70043375cf3d9182713d
