import "./SideEmail.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const SideEmail = () => {
  let sideEmailRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sideEmailRef.current,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <aside
      className="Email__container"
      ref={sideEmailRef}
    >
      <div className="Email__wrapper">
        <a
          href="mailto:omololujumat@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <span>omololujumat@gmail.com</span>
        </a>
      </div>
      <div className="Email__line"></div>
    </aside>
  );
};
