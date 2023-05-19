import "./SideSocial.css";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const SideSocial = () => {
  let sideSocialRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sideSocialRef.current,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <aside
      className="Social__container"
      ref={sideSocialRef}
    >
      <div className="Social__wrapper">
        <a
          href="https://github.com/Jummate"
          aria-label="GitHub"
          title="GitHub"
        >
          <span>
            <FiGithub />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/omololu-jumat-1405"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <span>
            <FiLinkedin />
          </span>
        </a>
      </div>
      <div className="Social__line"></div>
    </aside>
  );
};
