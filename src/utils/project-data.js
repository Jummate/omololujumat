import { images } from "../assets/images";
export const projects = [
  {
    projectName: "Guess Ninja",
    image: {
      src: images.GuessNinja,
      alt: "Screenshot of the home page of the Guess Ninja game.",
    },
    description:
      "A web-based multi-player guess game built with React and hosted on Netlify. It improves on the popular basic console guess game, offering something more advanced and out of the ordinary. It can be played by at most 5 players at a time.",
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
    projectName: "Child Abuse Management System",
    image: {
      src: images.CAMS,
      alt: "Screenshot of the home page of Child Abuse Management System.",
    },
    description:
      "A dynamic web application built with JavaScript and PHP, and temporarily hosted on InfinityFree. It facilitates the reporting of child abuse cases.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apex Charts"],
    view: {
      live: {
        href: "http://cams.infinityfreeapp.com",
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
      alt: "Screenshot of the home page of the Marketeer E-commerce app",
    },
    description:
      "An e-commerce site built with jQuery and Bootstrap, and hosted on GitHub Pages. It implements complete input validation and user authentication, captures customers' reviews, and leverages inline Paystack API for checkout.",
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
      "Paystack API",
      "GitHub Pages",
    ],
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
      "A JavaScript-powered single page currency converter app hosted on GitHub Pages. It wires into public currency API, which offers data of countries and their corresponding currency info.",
    tools: ["HTML", "CSS", "JavaScript", "Currency API", "GitHub Pages"],
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
      "A Javascript-powered quiz app hosted on GitHub Pages. It offers a number of multi-choice questions based on users' chosen subject. It  features a timer, and enables users to keep track of tests written and also review a just-concluded test.",
    tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
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
