import React from 'react';

import { type Project } from '../data/projects';
import { Code, Globe } from 'lucide-react';

type ColorMap = {
   solid: string;
   faded: string;
};

const colorClasses = {
   orange: { solid: 'text-orange-500', faded: 'bg-orange-500/10' },
   green: { solid: 'text-green-500', faded: 'bg-green-500/10' },
   blue: { solid: 'text-blue-500', faded: 'bg-blue-500/10' },
   purple: { solid: 'text-purple-500', faded: 'bg-purple-500/10' },
   cyan: { solid: 'text-cyan-500', faded: 'bg-cyan-500/10' },
};

const colors = Object.values(colorClasses);

function ProjectCard({ project }: { project: Project }) {
   return (
      <article className="flex flex-col rounded-lg bg-card overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-scale duration-500">
         <div className="h-1/2 relative">
            {/* <div className='absolute top-0 left-0 w-full h-full bg-radial from-black/5 from-90% to-black'></div> */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            <span className="absolute bottom-1 left-1 text-xs rounded-md p-1 py-0.5 bg-background text-foreground">
               {project.category}
            </span>
            <img
               src={project.image}
               alt={`Screenshot of ${project.title}`}
               className="h-full w-full"
               //    className="h-full"
            />
         </div>
         <div className="p-4 flex-1">
            <h1 className="font-bold text-foreground mb-2">{project.title}</h1>
            <p className="text-xs text-foreground/75 mb-3 leading-5">
               {project.summary}
            </p>

            <div className="flex flex-wrap gap-2">
               {project.tech.map((tool) => {
                  const random =
                     colors[Math.floor(Math.random() * colors.length)];
                  return (
                     <span
                        key={tool}
                        className={`${random.faded} ${random.solid} text-xs rounded-md p-1 py-0.5 font-semibold`}
                     >
                        {tool}
                     </span>
                  );
               })}
            </div>

            <div className="mt-12 w-full max-w-xl text-xs flex gap-2 shadow-primary/40 shadow-2xl/50 whitespace-nowrap">
               <a
                  target="_blank"
                  href={project.link}
                  className="bg-primary text-primary-foreground p-2 py-1.5 rounded-lg flex gap-2 cursor-pointer items-center justify-center hover:bg-primary-dark transition-colors duration-500"
               >
                  <Globe size={15} /> Live Demo
               </a>
               <a
                  target="_blank"
                  href={project.repo}
                  className="p-2 py-1.5 gap-2 rounded-lg border border-primary flex text-primary items-center justify-center hover:bg-primary-dark hover:text-primary-foreground cursor-pointer transition-colors duration-500"
               >
                  <Code size={15} /> Source
               </a>
            </div>
         </div>
      </article>
   );
}

export default ProjectCard;
