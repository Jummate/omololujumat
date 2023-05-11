import "./ProjectItem.css";
import { SubHeading } from "../subheading/SubHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const ProjectItem = ({ project }) => {
  const {
    projectName,
    image: { src, alt },
    description,
    tools,
    view: { live, repo },
  } = project;
  return (
    <article className="Project__item-container">
      <SubHeading text={projectName} />
      <div className="Project__item">
        <div className="Project__image-wrapper">
          <img
            className="Project__image"
            src={src}
            alt={alt}
          />
        </div>
        <div className="Project__about">
          <div className="Project__description">
            <p>{description}</p>
          </div>
          <div className="Project__tools">
            {tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
          <div className="Project__link">
            <a
              href={live.href}
              aria-label={live.title}
              title={live.title}
            >
              <span>
                <FiExternalLink />
              </span>
            </a>

            <a
              href={repo.href}
              aria-label={repo.title}
              title={repo.title}
            >
              <span>
                <FiGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
