import Navbar from './components/Navbar';
import { SideEmail } from './components/SideEmail';
import { SideSocial } from './components/SideSocial';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeProvider';

function App() {
   return (
      <>
         <main className="bg-background min-h-screen">
            <ThemeProvider>
               <Navbar />
            </ThemeProvider>

            <SideSocial />
            <SideEmail />

            <div className="bg-background w-full pt-12 px-8 sm:px-16 lg:px-24 max-w-7xl sm:mx-auto">
               <Home />
            </div>
         </main>
      </>
   );
}

export default App;
