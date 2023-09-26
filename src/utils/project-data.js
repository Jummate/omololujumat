import { images } from "../assets/images";
export const projects = [
  {
    projectName: "Guess Ninja",
    image: {
      src: images.GuessNinja,
      alt: "Screenshot of the home page of the Guess Ninja game.",
    },
    description:
      "A web-based multi-player guess game that improves on the popular basic console guess game. However, it offers something more advanced and out of the ordinary. The game can be played by at most 5 players at a time.",
    tools: ["HTML", "CSS", "React"],
    view: {
      live: { href: "https://guess-ninja.netlify.app", title: "Guess Ninja" },
      repo: {
        href: "https://github.com/Jummate/guess-ninja",
        title: "Guess Ninja Repo",
      },
    },
  },

  {
    projectName: "Child Abuse Management System",
    image: {
      src: images.CAMS,
      alt: "Screenshot of the home page of Child Abuse Management System.",
    },
    description:
      "A dynamic full-stack web application built and aimed at facilitating the reporting of child abuse cases.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    view: {
      live: {
        href: "https://child-abuse-management-system.000webhostapp.com/",
        title: "Child Abuse Management System",
      },
      repo: {
        href: "https://github.com/Jummate/child-abuse-management-system",
        title: "Child Abuse Management System Repo",
      },
    },
  },

  {
    projectName: "Marketeer",
    image: {
      src: images.Marketeer,
      alt: "Screenshot of the home page of the Marketeer e-commerce app",
    },
    description:
      "A static e-commerce site that leverages inline Paystack API for checkout. It implements input validation and user authentication, and offers verified customers the chance to air their reviews on any product.",
    tools: ["HTML", "CSS", "Bootstrap", "jQuery"],
    view: {
      live: {
        href: "https://jummate.github.io/marketeer",
        title: "Marketeer E-commerce App",
      },
      repo: {
        href: "https://github.com/Jummate/marketeer",
        title: "Marketeer GiHub Repo",
      },
    },
  },

  {
    projectName: "Currency Converter",
    image: {
      src: images.Converter,
      alt: "Screenshot of the home page of the currency converter app",
    },
    description:
      "A JavaScript-powered single page that wires into public currency API. The API offers diverse data of countries and their corresponding currency info.",
    tools: ["HTML", "CSS", "JavaScript"],
    view: {
      live: {
        href: "https://jummate.github.io/currency-converter",
        title: "Currency Converter",
      },
      repo: {
        href: "https://github.com/Jummate/currency-converter",
        title: "Currency Converter GiHub Repo",
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
      "A very user-friendly Javascript-powered quiz app. It offers a number of multi-choice questions based on users' chosen subject. It features a timer, and offers functionalities that enable users to keep track of every tests written and to review a just-concluded test.",
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
