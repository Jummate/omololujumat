import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects, type Category } from '../data/projects';

function Projects() {
   const [active, setActive] = useState<Category | 'All'>('All');

   const existingCategories = Array.from(
      new Set(projects.flatMap((p) => p.category))
   );
   //   const test = Array(12).fill("My All")
   //   const categories = ['All', ...test, ...existingCategories];
   const categories: (Category | 'All')[] = ['All', ...existingCategories];

   const data =
      active === 'All'
         ? projects
         : projects.filter((project) =>
              project.category
                 .toString()
                 .toLowerCase()
                 .includes(active.toLowerCase())
           );
   return (
      <section className="">
         <PageHeader label="Projects" />
         <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4 overflow-x auto hide-scrollbar">
               {categories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setActive(category)}
                     className={`rounded-sm shadow-md p-2 py-0.5 ${active === category ? 'bg-primary text-white' : 'bg-background text-foreground'} whitespace-nowrap cursor-pointer hover:bg-primary hover:text-white`}
                     aria-pressed={active === category}
                  >
                     {category}
                  </button>
               ))}
            </div>

            <p className="text-sm text-gray-500 mt-2">
               Showing projects for:{' '}
               <span className="font-semibold">{active}</span>
            </p>
         </div>

         {/* <div className="flex flex-col sm:flex-row flex-1 justify-center items-center gap-6"> */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((project) => (
               <ProjectCard key={project.id} project={project} />
            ))}
         </div>
      </section>
   );
}

export default Projects;
