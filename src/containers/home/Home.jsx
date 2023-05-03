import "./Home.css";
import { Button } from "../../components";

export const Home = () => {
  return (
    <section className="Home__container">
      <article>
        <h5 className="Home__salutation">Hello, my name is </h5>

        <p className="Home__name">Omololu Jumat.</p>

        <p className="Home__interest">I enjoy building stuff for the web.</p>

        <p className="Home__content">
          I'm a frontend developer with full focus on full stacj development but
          for now Ia m still trying to master the art tfton t end dve,pmrnt
          befpr{" "}
        </p>
        <p>
          <Button
            text="Download CV"
            onClick={() => console.log("Youuuuuu")}
            extraStyle="pt-15"
          />
        </p>
      </article>
    </section>
  );
};
