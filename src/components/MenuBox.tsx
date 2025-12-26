import {
   ChevronRight,
   Code,
   Home,
   Mail,
   Moon,
   Sun,
   User,
   X,
   Zap,
} from 'lucide-react';
import useTheme from '../hooks/useTheme';
import Connect from './Connect';

type MenuBoxProps = {
   openMenu: boolean;
   setOpenMenu: () => void;
};

function MenuBox({ openMenu, setOpenMenu }: MenuBoxProps) {
   const [theme, setTheme] = useTheme();
   if (!openMenu) return null;
   return (
      <article className="fixed top-0 right-0 w-full h-full bg-black/80">
         <div className="fixed top-0 right-0 w-3/4 h-full bg-background p-8 px-4">
            <div className="flex items-center justify-between gap-2 text-foreground mb-24">
               {theme == 'dark' ? (
                  <Sun
                     className="cursor-pointer"
                     onClick={() => setTheme('light')}
                  />
               ) : (
                  <Moon
                     className="cursor-pointer"
                     onClick={() => setTheme('dark')}
                  />
               )}
               <X className="cursor-pointer" onClick={setOpenMenu} />
            </div>
            <ul className="flex flex-col items-center justify-center gap-4 font-semibold text-foreground text-sm">
               <li className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500">
                  <a
                     href="/"
                     className="flex items-center justify-between w-full"
                  >
                     <span className="flex items-center gap-2">
                        <span className="bg-background/25 p-1 rounded-md">
                           <Home size={15} />
                        </span>{' '}
                        Home
                     </span>
                     <ChevronRight
                        size={12}
                        className="text-muted-foreground"
                     />
                  </a>
               </li>
               <li className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500">
                  <a
                     href="/"
                     className="flex items-center justify-between w-full"
                  >
                     <span className="flex items-center gap-2">
                        <span className="bg-background/25 p-1 rounded-md">
                           <User size={15} />
                        </span>{' '}
                        About Me
                     </span>
                     <ChevronRight
                        size={12}
                        className="text-muted-foreground"
                     />
                  </a>
               </li>
               <li className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500">
                  <a
                     href="/"
                     className="flex items-center justify-between w-full"
                  >
                     <span className="flex items-center gap-2">
                        <span className="bg-background/25 p-1 rounded-md">
                           <Code size={15} />
                        </span>{' '}
                        Projects
                     </span>
                     <ChevronRight
                        size={12}
                        className="text-muted-foreground"
                     />
                  </a>
               </li>
               <li className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500">
                  <a
                     href="/"
                     className="flex items-center justify-between w-full"
                  >
                     <span className="flex items-center gap-2">
                        <span className="bg-background/25 p-1 rounded-md">
                           <Zap size={15} />
                        </span>{' '}
                        Skills
                     </span>
                     <ChevronRight
                        size={12}
                        className="text-muted-foreground"
                     />
                  </a>
               </li>
               <li className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500">
                  <a
                     href="/"
                     className="flex items-center justify-between w-full"
                  >
                     <span className="flex items-center gap-2">
                        <span className="bg-background/25 p-1 rounded-md">
                           <Mail size={15} />
                        </span>{' '}
                        Contact
                     </span>
                     <ChevronRight
                        size={12}
                        className="text-muted-foreground"
                     />
                  </a>
               </li>
            </ul>

            <Connect />
         </div>
      </article>
   );
}

export default MenuBox;
