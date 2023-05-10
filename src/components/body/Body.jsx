import "./Body.css";
import { Footer, Home, About, Project } from "../../containers";

export const Body = () => {
  return (
    <main className="Body__container">
      <Home />
      <About />
      <Project />
      <Footer />
    </main>
  );
};
