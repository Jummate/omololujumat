import "./About.css";
import { images } from "../../assets/images";
import { RxTriangleRight } from "react-icons/rx";
import { BigHeading } from "../../components";

export const About = () => {
  return (
    <section
      className="About__container"
      id="about"
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
            Hello! My name is Omololu. I'm a self-taught frontend developer. I
            specialize in building well-tailored and performant web apps.
          </p>

          <p>
            I'm a big fan of Data Structure and Algorithm, and I enjoy solving
            coding problems in my leisure.
          </p>

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

          <p>
            Here are some of the technologies and tools that I work with
            currently:
          </p>
          <div className="About__technologies">
            <ul>
              <li>
                <RxTriangleRight className="arrow-icon" />
                HTML5/CSS3
              </li>
              <li>
                {" "}
                <RxTriangleRight className="arrow-icon" />
                JavaScript (ES6+)
              </li>
              <li>
                {" "}
                <RxTriangleRight className="arrow-icon" />
                React
              </li>
              <li>
                {" "}
                <RxTriangleRight className="arrow-icon" />
                API
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <RxTriangleRight className="arrow-icon" />
                Bootstrap
              </li>
              <li>
                {" "}
                <RxTriangleRight className="arrow-icon" />
                JQuery
              </li>
              <li>
                {" "}
                <RxTriangleRight className="arrow-icon" />
                Git/GitHub
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};
