import "./Body.css";
import { Footer, Home, About } from "../../containers";

export const Body = () => {
  return (
    <main className="Body__container">
      <Home />
      <About />
      <Footer />
    </main>
  );
};
