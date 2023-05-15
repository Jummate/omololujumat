import "./Home.css";
import { Button } from "../../components";

export const Home = () => {
  return (
    <section
      className="Home__container"
      id="home"
    >
      <article>
        <h5 className="Home__salutation">Hello, my name is </h5>

        <p className="Home__name">Omololu Jumat.</p>

        <p className="Home__interest">I enjoy building stuff for the web.</p>

        <p className="Home__content">
          I'm a frontend developer, passionate about transforming ideas into
          valuable products. I specialize in building well-tailored and
          performant web apps to deliver seamless experience to end users.
        </p>
        <p>
          <Button
            text="Download CV"
            // onClick={() => console.log("Youuuuuu")}
            extraStyle="pt-15"
          />
        </p>
      </article>
    </section>
  );
};
