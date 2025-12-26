import Navbar from './components/Navbar';
import { SideEmail } from './components/SideEmail';
import { SideSocial } from './components/SideSocial';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeProvider';
import About from './pages/About';

function App() {
   return (
      <>
         <main className="bg-background min-h-screen">
            <ThemeProvider>
               <Navbar />
            </ThemeProvider>

            <SideSocial />
            <SideEmail />

            <div className="bg-background w-full pt-8 px-8 sm:px-16 lg:px-24 max-w-7xl sm:mx-auto">
               {/* <Home /> */}
               <About />
            </div>
         </main>
      </>
   );
}

export default App;
