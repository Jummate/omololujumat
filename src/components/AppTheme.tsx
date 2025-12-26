import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../hooks/useThemeContext';

const AppTheme = () => {
   const { theme, setTheme } = useThemeContext();
   return (
      <>
         {theme == 'dark' ? (
            <Sun className="cursor-pointer" onClick={() => setTheme('light')} />
         ) : (
            <Moon className="cursor-pointer" onClick={() => setTheme('dark')} />
         )}
      </>
   );
};

export default AppTheme;
