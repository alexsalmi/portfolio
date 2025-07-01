import costars from "../assets/costars.png";
import oval from "../assets/o-val.png";

export const PROJECTS = [
  {
    name: "Costars",
    description:
      "Costars is a movie trivia game, challenging players to connect two actors by the movies they've starred in and the costars they've worked with. New pairings available every day at midnight EST.",
    image: costars,
    skills: ["Typescript", "Next.js", "PostgreSQL"],
    link: "https://costarsgame.com",
    github: "https://github.com/alexsalmi/costars",
  },
  {
    name: "O-Val",
    description:
      "O-Val is a validation library for Javascript and Typescript. It can be used for any type of object validation, whether it be input validation in an Express.js app, or form validation in vanilla JS.",
    image: oval,
    skills: ["Typescript", "Javascript", "Node.js"],
    link: "https://www.npmjs.com/package/@asalmi/o-val",
    github: "https://github.com/alexsalmi/o-val",
  },
];
