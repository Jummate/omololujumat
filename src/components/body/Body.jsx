import "./Body.css";
import { Home, About, Project } from "../../containers";

export const Body = () => {
  return (
    <main className="Body__container">
      <Home />
      <About />
      <Project />
    </main>
  );
};
