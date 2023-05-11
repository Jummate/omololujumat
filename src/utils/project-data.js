import { images } from "../assets/images";
export const projects = [
  {
    projectName: "Guess Ninja",
    image: {
      src: images.GuessNinja,
      alt: "Screenshot of the home page of the Guess Ninja game.",
    },
    description:
      "This is description. Why does this feel like it's not going to crash anytime from now. Wow, it can give you every it takes for you to be there",
    tools: ["HTML", "CSS", "React", "Netlify"],
    view: {
      live: { href: "https://guess-ninja.netlify.app", title: "Guess Ninja" },
      repo: {
        href: "https://github.com/Jummate/guess-ninja",
        title: "Guess Ninja Repo",
      },
    },
  },

  {
    projectName: "Bricademia",
    image: {
      src: images.Bricademia,
      alt: "Screenshot of the home page of the Bricademia quiz app",
    },
    description:
      "This is is Bricademia where things go down at the very speed of light. Now that everything is set, you can start distributing things just the way they are",
    tools: ["HTML", "CSS", "JavaScript"],
    view: {
      live: {
        href: "https://jummate.github.io/bricademia",
        title: "Bricademia Quiz App",
      },
      repo: {
        href: "https://github.com/Jummate/bricademia",
        title: "Bricademia GitHub Repo",
      },
    },
  },
];
