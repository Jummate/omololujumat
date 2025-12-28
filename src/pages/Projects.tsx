import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function Projects() {
   const existingCategories = Array.from(
      new Set(projects.flatMap((p) => p.category))
   );
   //   const test = Array(12).fill("My All")
   //   const categories = ['All', ...test, ...existingCategories];
   const categories = ['All', ...existingCategories];
   return (
      //   <section className='flex-1'>
      //   <section className="flex flex-col min-h-screen">
      <section className="">
         <PageHeader label="Projects" />
         <div className="flex gap-2 mb-4 overflow-auto hide-scrollbar">
            {categories.map((category) => (
               <span
                  key={category}
                  className="rounded-sm shadow-md p-2 py-0.5 bg-background text-foreground whitespace-nowrap cursor-pointer hover:bg-primary hover:text-white"
               >
                  {category}
               </span>
            ))}
         </div>

         {/* <div className="flex flex-col sm:flex-row flex-1 justify-center items-center gap-6"> */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
               <ProjectCard key={project.title} project={project} />
            ))}
         </div>
      </section>
   );
}

export default Projects;
