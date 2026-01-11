import { ChevronRight, Code, Home, Mail, User, X } from 'lucide-react';
import Connect from './Connect';
import AppTheme from './AppTheme';
import { useSlidingMenu } from '../hooks/useSlidingMenu';
import { Link } from 'react-router-dom';

type MenuBoxProps = {
   openMenu: boolean;
   setOpenMenu: (open: boolean) => void;
};

function MenuBox({ openMenu, setOpenMenu }: MenuBoxProps) {
   const { showOverlay, animateIn } = useSlidingMenu(openMenu, setOpenMenu);

   if (!showOverlay) return null;

   return (
      <article
         className={`fixed inset-0 bg-black/80 transition-opacity duration-300 ${
            animateIn ? 'opacity-100' : 'opacity-0'
         }`}
         onClick={() => setOpenMenu(false)}
      >
         <div
            className={`fixed top-0 right-0 w-3/4 h-full bg-background p-8 px-4
          transition-transform duration-300
          ${animateIn ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
         >
            <div className="flex items-center justify-between gap-2 text-foreground mb-24">
               <AppTheme />
               <X
                  className="cursor-pointer"
                  onClick={() => setOpenMenu(false)}
               />
            </div>

            <ul className="flex flex-col items-center justify-center gap-4 font-semibold text-foreground text-sm">
               {[
                  { label: 'Home', icon: <Home size={15} />, url: '/' },
                  {
                     label: 'About Me',
                     icon: <User size={15} />,
                     url: '/about',
                  },
                  {
                     label: 'Projects',
                     icon: <Code size={15} />,
                     url: '/projects',
                  },
                  // { label: 'Skills', icon: <Zap size={15} />, url:"/skills"},
                  {
                     label: 'Contact',
                     icon: <Mail size={15} />,
                     url: '/contact',
                  },
               ].map((item) => (
                  <li
                     key={item.label}
                     onClick={() => setOpenMenu(false)}
                     className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500"
                  >
                     <Link
                        to={item.url}
                        className="flex items-center justify-between w-full"
                     >
                        <span className="flex items-center gap-2">
                           <span className="bg-background/25 p-1 rounded-md">
                              {item.icon}
                           </span>
                           {item.label}
                        </span>
                        <ChevronRight
                           size={12}
                           className="text-muted-foreground"
                        />
                     </Link>
                  </li>
               ))}
            </ul>

            <Connect />
         </div>
      </article>
   );
}

export default MenuBox;
