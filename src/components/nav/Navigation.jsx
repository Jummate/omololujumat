import { useState, useRef, useLayoutEffect } from "react";
import { Button } from "../button/Button";
import { Menu } from "../menu/Menu";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";
import { gsap } from "gsap";
import MyCV from "../../assets/Omololu-Jumat-CV.pdf";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  let navRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
    // gsap.fromTo(
    //   navRef.current,
    //   { opacity: 0 },
    //   {
    //     duration: 0.5,
    //     opacity: 1.0,
    //     delay: 1,
    //     stagger: 0.1,
    //   }
    // );
  }, []);

  return (
    <header className="Nav__container">
      <nav className="Nav__inner_container">
        <div className="Nav__logo_container">
          <h1
            className="logo"
            ref={(elem) => {
              navRef.current[5] = elem;
            }}
          >
            <a
              href="/"
              title="Logo"
            >
              {"<OJ>"}
            </a>
          </h1>
        </div>
        <div className="Nav__link_container">
          <ul>
            <li
              ref={(elem) => {
                navRef.current[0] = elem;
              }}
            >
              <a href="/">Home</a>
            </li>
            <li
              ref={(elem) => {
                navRef.current[1] = elem;
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              ref={(elem) => {
                navRef.current[2] = elem;
              }}
            >
              <a href="#projects">My Works</a>
            </li>
            <li
              ref={(elem) => {
                navRef.current[3] = elem;
              }}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="Nav__action_container">
          <a
            href={MyCV}
            target="_blank"
            ref={(elem) => {
              navRef.current[4] = elem;
            }}
            className="Nav__action_cv"
          >
            <Button
              text="Download CV"
              extraStyle="p-15"
            />
          </a>

          <p
            ref={(elem) => {
              navRef.current[6] = elem;
            }}
          >
            <FaBars
              className="fa-icon"
              onClick={() => setShowMenu(true)}
            />
          </p>
        </div>
      </nav>
      {showMenu && <Menu onClick={() => setShowMenu(false)} />}
    </header>
  );
};
