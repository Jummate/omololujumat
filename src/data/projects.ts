import { images } from '../assets/images';

export type Category =
   | 'AI/ML'
   | 'Full stack'
   | 'Serverless'
   | 'Headless'
   | 'Frontend';
type Platform = 'Web' | 'Mobile' | 'Desktop';

export type Project = {
   id: string;
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
      id: '68822db5-6acb-4f3a-9239-3d44b1225ea9',
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
      id: '4ebbad54-1278-45f1-b7c0-6882f2e8de1a',
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
      id: 'cc2fa198-e13d-4317-b002-ef60bd707071',
      title: 'Guess Ninja',
      image: images.GuessNinja,
      category: ['Frontend'],
      platform: 'Web',
      summary:
         'A web-based multi-player guess game that improves on the popular basic console guess game. However, it offers something more advanced and out of the ordinary. The game can be played by at most 5 players at a time.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://guess-ninja.netlify.app',
      repo: '"https://github.com/Jummate/guess-ninja',
      description: 'Lorem ipsum',
      collaborators: [],
      releaseYear: 2023,
      challengesFaced: '***Content to be included later***',
      solution: '***Content to be included later***',
      rolePlayed: ['Frontend Development'],
   },

   {
      id: 'b8e82448-d810-411a-a865-d0f01705e0e3',
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
      id: 'e1284ef9-adff-4f0d-a63f-e88363d44cce',
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
      id: '71cc3048-6054-417a-8e54-b83c3d5d403c',
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
