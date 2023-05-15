import "./Body.css";
import { Footer, Home, About, Project, Contact } from "../../containers";

export const Body = () => {
  return (
    <main className="Body__container">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
};
