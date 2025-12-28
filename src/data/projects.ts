import { images } from '../assets/images';

export type Category =
   | 'AI/ML'
   | 'Full stack'
   | 'Serverless'
   | 'Headless'
   | 'Frontend';
type Platform = 'Web' | 'Mobile' | 'Desktop';

export type Project = {
   title: string;
   description: string;
   tech: string[];
   link: string;
   repo?: string;
   image: string;
   category: Category[];
   platform: Platform;
   summary: string;
   collaborators: string[];
   releaseYear: number;
   challengesFaced: string;
   solution: string;
   rolePlayed: string[];
};

export const projects: Project[] = [
   {
      title: 'Macro Blog',
      image: images.MacroBlog,
      category: ['Full stack'],
      platform: 'Web',
      summary:
         'A powerful blog site that allows users to create, read, update, and delete blog posts. The site features a dark mode and light mode, and is designed for use by a single user.',
      tech: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Tailwind',
         'NodeJs',
         'Express',
         'MongoDB',
         'Mongoose',
      ],
      link: 'https://macroblog.onrender.com',
      repo: 'https://github.com/Jummate/blog-site',
      description:
         "Macro Blog is a powerful blog site that allows users to create, read, update, and delete blog posts. The site features a dark mode and light mode, and is designed for use by a single user. With its simple and intuitive interface, the site makes it easy to manage and share blog content. Whether you're a seasoned blogger or just getting started, the blog site is a great tool for anyone who wants to share their thoughts and ideas",
      collaborators: [],
      releaseYear: 2023,
      challengesFaced: '***Content to be included later***',
      solution: '***Content to be included later***',
      rolePlayed: ['Frontend Development, Backend development'],
   },
   {
      title: 'Child Abuse Management System',
      image: images.CAMS,
      category: ['Full stack'],
      platform: 'Web',
      summary:
         'A dynamic full-stack web application built and aimed at facilitating the reporting of child abuse cases.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: 'https://child-abuse-management-system.000webhostapp.com/',
      repo: 'https://github.com/Jummate/child-abuse-management-system',
      description: 'Lorem ipsum',
      collaborators: [],
      releaseYear: 2023,
      challengesFaced: '***Content to be included later***',
      solution: '***Content to be included later***',
      rolePlayed: ['Frontend Development, Backend development'],
   },
   {
      title: 'Marketeer',
      image: images.Marketeer,
      category: ['Frontend'],
      platform: 'Web',
      summary:
         'A static e-commerce site that leverages inline Paystack API for checkout. It implements input validation and user authentication, and offers verified customers the chance to air their reviews on any product.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Paystack'],
      link: 'https://jummate.github.io/marketeer',
      repo: 'https://github.com/Jummate/marketeer',
      description: 'Lorem ipsum',
      collaborators: [],
      releaseYear: 2020,
      challengesFaced: '***Content to be included later***',
      solution: '***Content to be included later***',
      rolePlayed: ['Frontend Development, Backend development'],
   },
   {
      title: 'Currency Converter',
      image: images.Converter,
      category: ['Frontend'],
      platform: 'Web',
      summary:
         'A JavaScript-powered single page that wires into public currency API. The API offers diverse data of countries and their corresponding currency info.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Currency API'],
      link: 'https://jummate.github.io/currency-converter',
      repo: 'https://github.com/Jummate/currency-converter',
      description: 'Lorem ipsum',
      collaborators: [],
      releaseYear: 2021,
      challengesFaced: '***Content to be included later***',
      solution: '***Content to be included later***',
      rolePlayed: ['Frontend Development'],
   },
   {
      title: 'Bricademia',
      image: images.Bricademia,
      category: ['Frontend'],
      platform: 'Web',
      summary:
         "A very user-friendly JavaScript-powered quiz app. It offers a number of multi-choice questions based on users' chosen subject.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://jummate.github.io/bricademia',
      repo: 'https://github.com/Jummate/bricademia',
      description: 'Lorem ipsum',
      collaborators: [],
      releaseYear: 2020,
      challengesFaced: '***Content to be included later***',
      solution: '***Content to be included later***',
      rolePlayed: ['Frontend Development'],
   },
];
