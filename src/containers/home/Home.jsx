import "./Home.css";
import { Button } from "../../components";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import MyCV from "../../assets/Omololu-Jumat-CV.pdf";

export const Home = () => {
  let homeRef = useRef([]);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(homeRef.current, {
        delay: 1.2,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
        x: 30,
      });
    });
    return () => ctx.revert();
  });
  return (
    <section
      className="Home__container"
      id="home"
    >
      <article>
        <h5
          className="Home__salutation"
          ref={(elem) => (homeRef.current[0] = elem)}
        >
          Hello, I'm{" "}
        </h5>

        <p
          className="Home__name"
          ref={(elem) => (homeRef.current[1] = elem)}
        >
          Omololu Jumat.
        </p>

        <p
          className="Home__interest"
          ref={(elem) => (homeRef.current[2] = elem)}
        >
          I enjoy building stuff for the web.
        </p>

        <p
          className="Home__content"
          ref={(elem) => (homeRef.current[3] = elem)}
        >
          I'm a front-end developer passionate about transforming ideas into
          valuable products. I specialize in building well-tailored, responsive
          and performant web apps to deliver seamless experience to end users.
        </p>
        <p ref={(elem) => (homeRef.current[4] = elem)}>
          <a
            href={MyCV}
            target="_blank"
          >
            {" "}
            <Button
              text="Download CV"
              extraStyle="pt-15"
            />
          </a>
        </p>
      </article>
    </section>
  );
};
