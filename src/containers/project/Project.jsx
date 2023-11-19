import "./Project.css";
import { BigHeading, ProjectItem, FilterField } from "../../components";
import { projects } from "../../utils/project-data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  let projectRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        projectRef.current,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: projectRef.current,
        animation: anim,
        toggleActions: "play none none none",
        once: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="Project__container"
      id="projects"
      ref={projectRef}
    >
      <BigHeading text="My Works" />

      {/* <FilterField /> */}
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
        />
      ))}
    </section>
  );
};
