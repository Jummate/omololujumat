import { Github, Linkedin } from 'lucide-react';

export const SideSocial = () => {
   return (
      <aside className="hidden lg:block w-14 h-56 fixed left-0 bottom-0">
         <div className="flex flex-col items-center justify-end gap-3 h-full">
            <a
               href="https://github.com/Jummate"
               aria-label="GitHub"
               title="GitHub"
               className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
            >
               <Github size={20} />
            </a>

            <a
               href="https://www.linkedin.com/in/omololu-jumat-1405"
               aria-label="LinkedIn"
               title="LinkedIn"
               className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
               //    className="text-muted-foreground hover:text-primary"
            >
               <Linkedin size={20} />
            </a>
            <div className="flex-1 w-0.5 bg-muted-foreground"></div>
         </div>
      </aside>
   );
};
