import Connect from './components/Connect';
import Navbar from './components/Navbar';
import { SideEmail } from './components/SideEmail';
import { SideSocial } from './components/SideSocial';
import Home from './pages/Home';

function App() {
   return (
      <>
         <main className="bg-background min-h-screen">
            <Navbar />

            <SideSocial />
            <SideEmail />

            <div className="bg-background w-full pt-12 px-8 sm:px-16 lg:px-24 max-w-7xl sm:mx-auto">
               <Home />
            </div>

            {/* <Connect /> */}
         </main>
      </>
   );
}

export default App;
