import Navbar from './components/Navbar';
import { SideEmail } from './components/SideEmail';
import { SideSocial } from './components/SideSocial';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeProvider';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
   const Layout = () => (
      <main className="bg-background min-h-screen pb-8">
         <ThemeProvider>
            <Navbar />
         </ThemeProvider>

         <SideSocial />
         <SideEmail />

         <div className="bg-background w-full pt-8 px-8 sm:px-16 lg:px-24 max-w-7xl sm:mx-auto">
            <Outlet />
         </div>
      </main>
   );
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
               </Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
