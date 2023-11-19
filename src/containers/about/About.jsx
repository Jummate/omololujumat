import "./About.css";
import { images } from "../../assets/images";
import { RxTriangleRight } from "react-icons/rx";
import { BigHeading, SubHeading } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  let aboutRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        aboutRef.current,
        { autoAlpha: 0, y: 70 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: aboutRef.current,
        animation: anim,
        toggleActions: "restart none none none",
        once: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="About__container"
      id="about"
      ref={aboutRef}
    >
      <BigHeading text="About Me" />

      <article className="About__wrapper">
        {" "}
        <div className="About__image-container">
          <p>
            <img
              className="About__image"
              src={images.MyPhoto}
              alt="A photo of me"
            />
          </p>
        </div>
        <div className="About__content-container">
          <p>
            Hello! My name is Omololu. I'm a frontend developer focused on
            building well-tailored and performant web apps.
          </p>

          {/* <p>
            I'm a big fan of Data Structure and Algorithm, and I enjoy solving
            coding problems in my leisure.
          </p> */}

          <p>
            After my internship with{" "}
            <a
              href="https://internship.zuri.team/"
              target="_blank"
              title="Zuri Internship"
            >
              Zuri Internship
            </a>
            , I've had the opportunity to work at{" "}
            <a
              href="https://nubiaville.com"
              target="_blank"
              title="Nubiaville Limited"
            >
              Nubiaville
            </a>
            , a start-up which offers a variety of IT solutions. At Nubiaville,
            I handled wide varieties of web app projects including{" "}
            <em>Asset Management System</em>,{" "}
            <em>Transport Management System</em>,{" "}
            <em>Engineering Job Request System</em>, just to mention a few.
          </p>

          <section className="About__technologies">
            <h2 className="About__technologies-heading">My Stack</h2>
            <p className="About__technologies-text">
              Some of the technologies and tools that I have used
            </p>

            <div className="About__technologies-items-wrapper">
              <article>
                <h4>Frontend</h4>
                <div className="About__technologies-items">
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    HTML
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    CSS
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    JavaScript
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    TypeScript
                  </span>
                </div>
              </article>
              <article>
                <h4>Backend</h4>
                <div className="About__technologies-items">
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Node.js
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    PHP
                  </span>
                </div>
              </article>
              <article>
                <h4>Databases</h4>
                <div className="About__technologies-items">
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    MySQL
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    MongoDB
                  </span>
                </div>
              </article>
              <article>
                <h4>Libraries & Frameworks</h4>
                <div className="About__technologies-items">
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    React
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Express
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    TailwindCSS
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    jQuery
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Bootstrap
                  </span>
                </div>
              </article>
              <article>
                <h4>Testing</h4>
                <div className="About__technologies-items">
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Jest
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Vitest
                  </span>
                </div>
              </article>
              <article>
                <h4>Data Structure & Algorithm</h4>
                <div className="About__technologies-items">
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Python
                  </span>
                  <span>
                    <RxTriangleRight className="arrow-icon" />
                    Java
                  </span>
                </div>
              </article>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
};
