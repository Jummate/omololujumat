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
   platform: Platform[];
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
      platform: ['Web'],
      summary:
         'A full-stack blogging platform that enables seamless creation, editing, and management of posts. Designed for single-user publishing, with a clean interface and built-in light and dark mode support.',
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
         'Macro Blog is a full-stack blogging platform built to support seamless content creation and management for individual publishers. It allows users to create, edit, publish, and delete blog posts through a clean and intuitive interface. The application includes light and dark mode support to enhance readability and user experience. Designed with simplicity in mind, Macro Blog focuses on efficient content management without unnecessary complexity.',
      collaborators: [],
      releaseYear: 2023,
      challengesFaced:
         'Designing a scalable CRUD architecture while maintaining a clean user interface. Managing application state effectively and ensuring smooth interaction between frontend and backend components.',
      solution:
         'Implemented a RESTful backend with clear data models and integrated it with a React-based frontend. Used MongoDB and Mongoose for flexible data handling and applied Tailwind CSS for consistent styling and theming.',
      rolePlayed: ['Frontend Development', 'Backend development'],
   },
   {
      id: '4ebbad54-1278-45f1-b7c0-6882f2e8de1a',
      title: 'Child Abuse Management System',
      image: images.CAMS,
      category: ['Full stack'],
      platform: ['Web'],
      summary:
         'A full-stack web application designed to streamline the reporting and management of child abuse cases, providing a structured and accessible platform for submitting and tracking reports',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: 'https://child-abuse-management-system.000webhostapp.com/',
      repo: 'https://github.com/Jummate/child-abuse-management-system',
      description:
         'The Child Abuse Management System is a full-stack web application developed to support the reporting and management of child abuse cases. The platform provides a structured way for users to submit reports and for administrators to review and manage submissions securely. The goal of the system is to improve accessibility, organization, and record-keeping for sensitive case data.',
      collaborators: [],
      releaseYear: 2023,
      challengesFaced:
         'Handling sensitive information securely while maintaining a simple and accessible user experience. Designing a system that balances ease of reporting with administrative oversight.',
      solution:
         'Implemented role-based access and structured data storage using PHP and MySQL. Focused on clear form validation, controlled data flow, and a straightforward UI to reduce friction during report submission.',
      rolePlayed: ['Frontend Development', 'Backend development'],
   },
   {
      id: 'cc2fa198-e13d-4317-b002-ef60bd707071',
      title: 'Guess Ninja',
      image: images.GuessNinja,
      category: ['Frontend'],
      platform: ['Web'],
      summary:
         'A web-based multiplayer guessing game that expands on the classic console experience, supporting up to five players in a single session with an interactive and engaging interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://guess-ninja.netlify.app',
      repo: '"https://github.com/Jummate/guess-ninja',
      description:
         'Guess Ninja is a browser-based multiplayer guessing game that enhances the traditional console guessing experience. It supports up to five players per session and introduces interactive UI elements to make gameplay more engaging. The game focuses on real-time interaction, turn-based logic, and user-friendly controls.',
      collaborators: [],
      releaseYear: 2023,
      challengesFaced:
         'Managing multiplayer game logic and ensuring smooth turn progression without overcomplicating the user interface.',
      solution:
         'Built modular game logic using React and JavaScript, ensuring predictable state transitions and clear feedback for players during gameplay.',
      rolePlayed: ['Frontend Development'],
   },

   {
      id: 'b8e82448-d810-411a-a865-d0f01705e0e3',
      title: 'Marketeer',
      image: images.Marketeer,
      category: ['Frontend'],
      platform: ['Web'],
      summary:
         'A frontend e-commerce application featuring Paystack checkout integration, form validation, user authentication, and a customer review system for verified buyers.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Paystack'],
      link: 'https://jummate.github.io/marketeer',
      repo: 'https://github.com/Jummate/marketeer',
      description:
         'Marketeer is a frontend e-commerce application that simulates a real-world shopping experience. It integrates Paystack for checkout processing, includes client-side input validation, and supports user authentication. Verified customers can leave reviews on products, adding credibility and social proof to the platform.',
      collaborators: [],
      releaseYear: 2020,
      challengesFaced:
         'Integrating payment processing while maintaining form security and validation. Managing user flow across authentication, checkout, and review submission.',
      solution:
         'Integrated Paystack’s inline payment API and implemented validation logic using JavaScript and jQuery. Ensured a smooth checkout flow and restricted reviews to authenticated users.',
      rolePlayed: ['Frontend Development', 'Backend development'],
   },
   {
      id: 'e1284ef9-adff-4f0d-a63f-e88363d44cce',
      title: 'Currency Converter',
      image: images.Converter,
      category: ['Frontend'],
      platform: ['Web'],
      summary:
         'A lightweight single-page application that consumes a public currency API to display real-time exchange data across multiple countries and currencies.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Currency API'],
      link: 'https://jummate.github.io/currency-converter',
      repo: 'https://github.com/Jummate/currency-converter',
      description:
         'Currency Converter is a lightweight single-page application that connects to a public currency API to retrieve real-time exchange rate data. The app allows users to view currency conversions across multiple countries, presenting accurate and up-to-date information in a simple interface.',
      collaborators: [],
      releaseYear: 2021,
      challengesFaced:
         'Handling asynchronous API calls and ensuring data accuracy while keeping the UI responsive.',
      solution:
         'Used JavaScript’s async handling to manage API responses efficiently and implemented basic error handling to improve reliability and user feedback.',
      rolePlayed: ['Frontend Development'],
   },
   {
      id: '71cc3048-6054-417a-8e54-b83c3d5d403c',
      title: 'Bricademia',
      image: images.Bricademia,
      category: ['Frontend'],
      platform: ['Web'],
      summary:
         'A user-friendly quiz application that presents multiple-choice questions based on selected subjects, offering an interactive learning experience powered entirely by JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://jummate.github.io/bricademia',
      repo: 'https://github.com/Jummate/bricademia',
      description:
         'Bricademia is a JavaScript-powered quiz application designed to provide an interactive learning experience. Users can select subjects and answer multiple-choice questions in a simple, distraction-free interface. The app focuses on usability and clarity, making it accessible to a wide range of users.',
      collaborators: [],
      releaseYear: 2020,
      challengesFaced:
         'Maintaining user engagement while keeping the application logic simple and easy to understand.',
      solution:
         'Structured quiz data clearly and implemented straightforward question navigation and scoring logic using vanilla JavaScript.',
      rolePlayed: ['Frontend Development'],
   },
];
