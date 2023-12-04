import { CVDataType } from "../interfaces/data.interface";

export const DATA_CV: CVDataType = {
  workplaces: [
    {
      name: "FLYR for Hospitality",
      position: "Senior Full-Stack Engineer",
      startedAt: "2023-05-01",
      projects: [
        {
          name: "App",
          description:
            "Working in a cross-functional team to develop beautiful and performant user interfaces for revenue managers as a front-end engineer. Remote pair programming, providing guidance about performance optimizations and debugging in React, contributing to more efficient PR review processes and testing new features as a part of the review process to ensure no regressions are introduced.",
          stack: [
            "React",
            "Typescript",
            "GraphQL",
            "Vitest",
            "React Testing Library",
            "Playwright",
            "OpenAI API",
            "Mixpanel",
            "LaunchDarkly",
            "SendGrid",
          ],
        },
      ],
    },
    {
      name: "Teleport.xyz",
      position: "Internal Tools / Front-end Lead",
      startedAt: "2022-10-01",
      endedAt: "2023-05-01",
      projects: [
        {
          name: "Admin Tools",
          description:
            "Responsible for creating and maintaining an internal SPA, which serves as an admin interface for managing driver and rider operations and includes maps that display drivers, riders, their routes and service areas. Working closely with product managers to collect requirements and organize work for the internal tools team.",
          stack: [
            "React",
            "Typescript",
            "Vite",
            "NestJS",
            "Tailwind",
            "Map GL",
            "Prisma",
            "Vitest",
            "Vercel",
          ],
        },
        {
          name: "Website",
          description:
            "Creation and maintaining the teleport.xyz website, implementing requirements from product. Ownership of scheduled automated tests to ensure consistent website functionality.",
          stack: ["React", "Typescript", "NextJS", "HubSpot", "Cypress"],
        },
      ],
    },
    {
      name: "Maze",
      position: "Senior Full-Stack Engineer",
      startedAt: "2022-03-01",
      endedAt: "2022-09-01",
      projects: [
        {
          name: "Core Team",
          description: `- Working in a remote team made of engineers and designers
- Overseeing the scope delivery for various data visualizations
- Engineering and writing challenging algorithms for data visualizations
- Implementing render and performance improvements for smoother user interactions
- Participating in bug-fixing rotations`,
          stack: [
            "React",
            "Typescript",
            "Node.js",
            "Figma",
            "Styled Components",
            "jest",
            "Split.io",
          ],
        },
      ],
    },
    {
      name: "MoonPay",
      position: "Senior Front-end Engineer",
      startedAt: "2021-09-01",
      endedAt: "2022-02-01",
      projects: [
        {
          name: "Core Team",
          description: `- Maintaing and implementing new features for the MoonPay Buy & Sell widget
- Working on an internal Storybook component library
- Driving unit testing and code coverage increase efforts in the codebase`,
          stack: [
            "React",
            "Typescript",
            "GraphQL",
            "Node.js",
            "Enzyme",
            "jest",
            "Express",
            "Storybook",
            "Figma",
          ],
        },
      ],
    },
    {
      name: "Microsoft Prague",
      position: "Senior Software Engineer, Internal Tool FE lead",
      startedAt: "2020-06-01",
      endedAt: "2021-09-01",
      projects: [
        {
          name: "Performance Team",
          description: `- Leading the front-end architecture and visual design of an internal application that provides insight into various performance metrics for PRs for the MS Teams codebase
- Implementing performance monitoring tools inside Microsoft Teams`,
          stack: [
            "React",
            "Typescript",
            "Mobx-state-tree",
            "ApexCharts",
            "SCSS",
            "Azure DevOps",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Foodie: meals around you",
      url: "https://apps.apple.com/cz/app/foodie-meals-around-you/id6448660115",
      subtitle: "iOS mobile & tablet app",
      technologies:
        "- React Native, RN CLI, TypeScript, Apple Maps API, Supabase, PostgreSQL",
      summary:
        "Foodie is an application that allows you to rate meals around you, explore restaurants and cafés nearby and find out who makes your favorite meal best!",
    },
    {
      title: "blokep.netlify.app",
      url: "https://blokep.netlify.app",
      subtitle: "a designing tool for front-end engineers",
      technologies: "- React.js, TypeScript, vuex-but-for-react, Netlify",
      summary:
        "An app that lets you create Blocks of HTML & CSS, nest them, extend them, reuse them, pass children inside and change your layout extremely fast with dragging your blocks around and leveraging the option to use your defined CSS color variables",
    },
    {
      title: "react-handbook.danajanoskova.sk",
      url: "https://react-handbook.danajanoskova.sk",
      subtitle: "a SPA interactive code editor guide",
      technologies: "- React.js, JavaScript, Babel, SCSS, Heroku",
      summary:
        "An interactive code snippet guide to teach you how to use React in real world applications.\nWe start with basic knowledge and examples and get deeper into discovering hooks, routing, common use cases, component nesting, API calls - everything you could possibly encounter when coding an app of your own!",
    },
    {
      title: "playbanggame.online",
      url: "https://playbanggame.online",
      subtitle: "a PWA multiplayer online game",
      technologies:
        "- Vue.js, JavaScript, Adonis.js (Node.js), MySQL, Websocket, Netlify, Heroku",
      summary:
        "A non-monetized internet version of the popular BANG! card game, which allows people from all around the world to play together on any device with internet connection.",
    },
  ],
  links: [
    {
      title: "GitHub",
      url: "https://github.com/DJanoskova",
      icon: "github",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/dana-janoskova/",
      icon: "linkedin",
    },
    {
      title: "Medium",
      url: "https://medium.com/@danajanoskova",
      icon: "medium",
    },
    {
      title: "NPM",
      url: "https://www.npmjs.com/~djanoskova",
      icon: "codeSquare",
    },
    {
      title: "Web",
      url: "http://danajanoskova.com/",
      icon: "globe",
    },
  ],
  skills: [
    "React",
    "React Native",
    "TypeScript",
    "NodeJS",
    "NestJS",
    "NextJs",
    "GraphQL",
    "TailwindCSS",
    "Prisma",
    "Supabase",
    "PostgreSQL",
    "git",
    "GitHub workflows",
    "Cypress",
    "React Testing Library",
    "Jest",
    "Vitest",
    "React hooks",
    "React Context",
    "WebSocket",
    "Front-end data architecture & performance",
    "Photoshop",
  ],
};
