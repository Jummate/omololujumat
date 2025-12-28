import "./Menu.css";
import { Button } from "../button/Button";
import { FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import MyCV from "../../assets/Omololu-Jumat-CV.pdf";

export const Menu = ({ onClick }) => {
  let menuRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(menuRef.current, {
        duration: 0.5,
        opacity: 0,
      });
    });
    return () => ctx.revert();
  });

  return (
    <section
      className="Menu__container"
      ref={menuRef}
    >
      <div className="Menu__icon-container">
        <FaTimes
          className="fa-icon"
          onClick={onClick}
        />
      </div>
      <div className="Menu__link__container">
        <ul>
          <li onClick={onClick}>
            <a href="">Home</a>
          </li>
          <li onClick={onClick}>
            <a href="#about">About</a>
          </li>
          <li onClick={onClick}>
            <a href="#projects">My Works</a>
          </li>
          <li onClick={onClick}>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={onClick}>
            <a
              href={MyCV}
              target="_blank"
            >
              <Button
                text="Download CV"
                extraStyle="p-15"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
