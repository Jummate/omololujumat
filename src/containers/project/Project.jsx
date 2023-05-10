import "./Project.css";
import GuessNinja from "../../assets/guess-ninja2.png";
import { BigHeading, SubHeading } from "../../components";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const Project = () => {
  return (
    <section
      className="Project__container"
      id="projects"
    >
      <BigHeading text="Things I've built" />

      <div className="Project__item-container">
        <SubHeading text="guess ninja" />
        <div className="Project__item">
          <div className="Project__image-wrapper">
            <img
              className="Project__image"
              src={GuessNinja}
              alt="Screenshot of the home page of the Guess Ninja game"
            />
          </div>
          <div className="Project__about">
            <div className="Project__description">
              <p>
                ddddh dh dhdd hd dhh dhdhz bbb xx bx bx vxvx cc a sth the bi dd
                dgttg sbsb sjs hfhhffss dhh asdw ayyr sdgg fkgutu ddgg ddjfh vbc
                asweq dft htyty fe yuiy ndtrg asder adsfwt ader pyiu afer agrty
              </p>
            </div>
            <div className="Project__tools">
              <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
            </div>
            <div className="Project__link">
              <a
                href="https://github.com/Jummate/guess-ninja"
                aria-label="Guess Ninja Repo"
                title="Guess Ninja Repo"
              >
                <span>
                  <FiGithub />
                </span>
              </a>
              <a
                href="https://guess-ninja.netlify.app"
                aria-label="Guess Ninja"
                title="Guess Ninja"
              >
                <span>
                  <FiExternalLink />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
