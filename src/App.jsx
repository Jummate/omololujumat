import { Nav, Body, SideSocial, SideEmail } from "./components";
import { Footer, Contact } from "./containers";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ProjectDetails from "./components/project-details/ProjectDetails";
import "./App.css";

function App() {
  const Layout = () => (
    <>
      <Nav />
      <SideSocial />
      <SideEmail />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
  return (
    <div className="App__container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Body />}
            />
            <Route
              path="/project/:id"
              element={<ProjectDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
