import { Github, Linkedin } from 'lucide-react';

function Connect() {
   return (
      <section className="w-full p-4 inset-shadow-sm bg-background mt-12">
         <h1 className="mb-6 font-semibold text-foreground text-sm">
            CONNECT WITH ME
         </h1>
         <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4">
               <a
                  href="https://github.com/Jummate"
                  aria-label="GitHub"
                  title="GitHub"
                  className="rounded-full p-2 bg-muted-foreground text-white  hover:bg-primary"
               >
                  <Github size={20} />
               </a>

               <a
                  href="https://www.linkedin.com/in/omololu-jumat-1405"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
               >
                  <Linkedin size={20} />
               </a>
            </div>

            {/* <div>fg g</div> */}
         </div>
      </section>
   );
}

export default Connect;
