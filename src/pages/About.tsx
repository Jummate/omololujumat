import MyPhoto from '../components/MyPhoto';
import { BriefcaseBusiness, Code, Terminal, User } from 'lucide-react';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiJquery, SiMongoose, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import {
   FaBootstrap,
   FaDocker,
   FaGit,
   FaNodeJs,
   FaPython,
   FaReact,
} from 'react-icons/fa6';
import { DiJava, DiMysql, DiPostgresql } from 'react-icons/di';
import PageHeader from '../components/PageHeader';

function About() {
   return (
      <section className="flex flex-col gap-6">
         <PageHeader label="About Me" />
         <section className="flex flex-col gap-1 items-center">
            <MyPhoto />
            <p className="font-bold text-foreground">Omololu Jumat</p>
            <p className="font-bold text-primary text-sm">Software Developer</p>
         </section>

         <section className="text-foreground max-w-3xl">
            <h2 className="inline-flex gap-2 mb-2 font-bold">
               <User size={20} className="text-primary" /> Introduction
            </h2>

            <p className="text-muted/90 text-sm leading-7 mb-2">
               Hi, I’m Omololu — a software developer dedicated to building
               clean, responsive, and high-performance web applications.
            </p>
            <p className="text-muted/90 text-sm leading-7 mb-2">
               At Nubiaville, I work on business-critical systems including the{' '}
               <span className="text-primary font-bold">
                  Asset Management System
               </span>
               ,{' '}
               <span className="text-primary font-bold">
                  Transport Management System
               </span>
               ,{' '}
               <span className="text-primary font-bold">
                  Engineering Job Request System
               </span>
               ,{' '}
               <span className="text-primary font-bold">
                  Performance Management System
               </span>
               .
            </p>
            <p className="text-muted/90 text-sm leading-7">
               I'm continually learning, refining my software development
               skills, and contributing to digital products that make a real
               impact.
            </p>
         </section>

         <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-50/5"></div>

         <section className="text-foreground max-w-3xl">
            <h2 className="inline-flex gap-2 mb-5 font-bold">
               <BriefcaseBusiness size={20} className="text-primary" /> My
               Journey
            </h2>

            <div className="relative pl-18 pb-10">
               <div className="absolute left-0 top-0 flex flex-col items-center justify-end h-full pl-4">
                  <span className="rounded-full p-2 bg-primary text-white">
                     <Code size={12} />
                  </span>
                  <div className="flex-1 w-0.5 bg-muted-foreground"></div>
               </div>
               <h4 className="font-bold text-foreground">Software Developer</h4>
               <p className="text-sm text-primary font-semibold">
                  Nubiaville Limited
               </p>
               <p className="text-sm text-muted/55 mb-3">2021 - Present</p>
               <p className="text-xs leading-6 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
               </p>
            </div>
            <div className="relative pl-18">
               <div className="absolute left-0 top-0 flex flex-col items-center justify-end h-full pl-4">
                  <span className="rounded-full p-2 bg-muted-foreground text-white">
                     <Code size={12} />
                  </span>
                  <div className="flex-1 w-0.5 bg-muted-foreground"></div>
               </div>
               <h4 className="font-bold text-foreground">
                  Freelance Tech Writer
               </h4>
               <p className="text-sm text-primary font-semibold">
                  DevBytes Technologies Inc.
               </p>
               <p className="text-sm text-muted/55 mb-3">Feb 2022 - May 2023</p>
               <p className="text-xs leading-6 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
               </p>
            </div>
         </section>

         <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-50/5"></div>

         <section className="text-foreground max-w-3xl">
            <h2 className="inline-flex gap-2 mb-2 font-bold">
               <Terminal size={20} className="text-primary" /> Tech Stack
            </h2>

            <article className="w-full p-4">
               <h3 className="mb-3">Languages</h3>

               <div className="flex flex-wrap gap-2 text-sm">
                  {[
                     {
                        label: 'JavaScript',
                        icon: (
                           <RiJavascriptFill
                              size={20}
                              className="text-yellow-600"
                           />
                        ),
                     },
                     {
                        label: 'TypeScript',
                        icon: <BiLogoTypescript size={20} />,
                     },
                     { label: 'Python', icon: <FaPython size={20} /> },
                     {
                        label: 'Java',
                        icon: <DiJava size={20} className="text-red-600" />,
                     },
                  ].map(({ label, icon }) => (
                     <div
                        key={label}
                        className="shadow-sm shadow-gray-200/80 rounded-lg items-center p-4 py-2 flex flex-1 max-w-32 justify-center gap-2"
                     >
                        <span className="rounded-full p-2 bg-white">
                           {icon}
                        </span>
                        <span className="text-xs">{label}</span>
                     </div>
                  ))}
               </div>
            </article>

            <article className="w-full p-4">
               <h3 className="mb-3">Frameworks & Libraries</h3>

               <div className="flex flex-wrap gap-2 text-sm">
                  {[
                     {
                        label: 'React',
                        icon: <FaReact size={20} />,
                     },
                     {
                        label: 'jQuery',
                        icon: <SiJquery size={20} />,
                     },
                     {
                        label: 'Tailwind',
                        icon: (
                           <SiTailwindcss size={20} className="text-blue-600" />
                        ),
                     },
                     {
                        label: 'Node.js',
                        icon: <FaNodeJs size={20} className="text-green-600" />,
                     },
                     {
                        label: 'Bootstrap',
                        icon: (
                           <FaBootstrap size={20} className="text-purple-600" />
                        ),
                     },
                  ].map(({ label, icon }) => (
                     <div
                        key={label}
                        className="shadow-sm shadow-gray-200/80 rounded-lg items-center p-4 py-2 flex flex-1 max-w-32 justify-center gap-2"
                     >
                        <span className="rounded-full p-2 bg-white">
                           {icon}
                        </span>
                        <span className="text-xs">{label}</span>
                     </div>
                  ))}
               </div>
            </article>

            <article className="w-full p-4">
               <h3 className="mb-3">Databases & ORMs</h3>

               <div className="flex flex-wrap gap-2 text-sm">
                  {[
                     {
                        label: 'MySQL',
                        icon: <DiMysql size={20} />,
                     },
                     {
                        label: 'PostgreSQL',
                        icon: <DiPostgresql size={20} />,
                     },
                     {
                        label: 'Mongoose',
                        icon: <SiMongoose size={20} className="" />,
                     },
                     { label: 'Prisma', icon: <SiPrisma size={20} /> },
                  ].map(({ label, icon }) => (
                     <div
                        key={label}
                        className="shadow-sm shadow-gray-200/80 rounded-lg items-center p-4 py-2 flex flex-1 max-w-32 justify-center gap-2"
                     >
                        <span className="rounded-full p-2 bg-white">
                           {icon}
                        </span>
                        <span className="text-xs">{label}</span>
                     </div>
                  ))}
               </div>
            </article>

            <article className="w-full p-4">
               <h3 className="mb-3">Tools & DevOps</h3>

               <div className="flex flex-wrap gap-2 text-sm">
                  {[
                     {
                        label: 'Git',
                        icon: <FaGit size={20} className="text-orange-600" />,
                     },
                     {
                        label: 'Docker',
                        icon: <FaDocker size={20} className="text-blue-900" />,
                     },
                  ].map(({ label, icon }) => (
                     <div
                        key={label}
                        className="shadow-sm shadow-gray-200/80 rounded-lg items-center p-4 py-2 flex flex-1 max-w-32 justify-center gap-2"
                     >
                        <span className="rounded-full p-2 bg-white">
                           {icon}
                        </span>
                        <span>{label}</span>
                     </div>
                  ))}
               </div>
            </article>
         </section>
      </section>
   );
}

export default About;
