import {
   createContext,
   type Dispatch,
   type PropsWithChildren,
   type SetStateAction,
} from 'react';
import useTheme, { type ColorThemeType } from '../hooks/useTheme';

type ThemeContextType = {
   theme: string;
   setTheme: Dispatch<SetStateAction<ColorThemeType>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
   const [theme, setTheme] = useTheme();
   return (
      <ThemeContext.Provider
         value={{
            theme,
            setTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};
