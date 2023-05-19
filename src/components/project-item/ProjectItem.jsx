import "./ProjectItem.css";
import { SubHeading } from "../subheading/SubHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export const ProjectItem = ({ project }) => {
  const {
    projectName,
    image: { src, alt },
    description,
    tools,
    view: { live, repo },
  } = project;

  gsap.registerPlugin(ScrollTrigger);
  let projectRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        ".to-animate",
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: ".to-animate",
        animation: anim,
        toggleActions: "restart none none none",
        once: true,
      });
    }, projectRef.current);
    return () => ctx.revert();
  }, []);
  return (
    <article
      className="Project__item-container"
      ref={projectRef}
    >
      <SubHeading
        text={projectName}
        className="to-animate"
      />
      <div className="Project__item to-animate">
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
