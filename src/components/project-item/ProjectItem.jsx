import "./ProjectItem.css";
import { SubHeading } from "../subheading/SubHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { Button } from "../button/Button";

export const ProjectItem = ({ project }) => {
  const {
    projectName,
    image: { src, alt },
    summary,
    tools,
    view: { live, repo },
  } = project;

  gsap.registerPlugin(ScrollTrigger);
  let projectRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        ".to-animate",
        { autoAlpha: 0, y: 70 },
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
          <div className="Project__summary">
            <p>{summary}</p>
            {/* <small className="Project__summary-details">Read more</small> */}
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
              <Button extraStyle="invert fs-responsive">
                <FiExternalLink /> Go to Site
              </Button>
            </a>

            <a
              href={repo.href}
              aria-label={repo.title}
              title={repo.title}
            >
              <Button extraStyle="fs-responsive">
                <FiGithub /> GitHub Repo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
