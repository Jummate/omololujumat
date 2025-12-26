import { Menu } from 'lucide-react';
import MenuBox from './MenuBox';
import { useState } from 'react';
import AppTheme from './AppTheme';

function Navbar() {
   const [openMenu, setOpenMenu] = useState<boolean>(false);
   return (
      <header className="sticky bg-background top-0 left-0 z-50 ">
         <nav className="flex items-center justify-between p-4 sm:px-8 md:px-16 shadow-sm">
            <a href="/" title="Logo" className="flex items-center gap-2">
               <span className="font-bold text-sm sm:text-xl text-white bg-primary rounded-2xl p-1 py-2">
                  {'<OJ>'}
               </span>
               <span className="font-bold text-md sm:text-xl text-foreground">
                  Omololu Jumat
               </span>
            </a>

            <div className="hidden text-primary md:block">
               <ul className="flex items-center justify-center gap-10 font-semibold">
                  {[
                     { label: 'Home', href: '/' },
                     { label: 'About Me', href: '/' },
                     { label: 'Projects', href: '/' },
                     { label: 'Skills', href: '/' },
                     { label: 'Contact', href: '/' },
                  ].map((item) => (
                     <li
                        key={item.label}
                        className="hover:text-white w-full rounded-lg hover:bg-primary p-2 transition-colors duration-500"
                     >
                        <a
                           href={item.href}
                           className="hover:text-primary-dark whitespace-nowrap"
                        >
                           {item.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="flex items-center justify-center gap-2 text-foreground">
               <AppTheme />
               <Menu
                  className="block cursor-pointer md:hidden"
                  onClick={() => setOpenMenu(true)}
               />
            </div>
         </nav>
         <MenuBox openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
   );
}

export default Navbar;
