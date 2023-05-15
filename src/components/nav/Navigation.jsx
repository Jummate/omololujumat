import { useState } from "react";
import { Button } from "../button/Button";
import { Menu } from "../menu/Menu";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="Nav__container">
      <nav className="Nav__inner_container">
        <div className="Nav__logo_container">
          <h1 className="logo">
            <a
              href="/"
              title="Logo"
            >
              OJ
            </a>
          </h1>
        </div>
        <div className="Nav__link__container">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Button
                text="Download CV"
                // onClick={() => console.log("Ypuuu")}
              />
            </li>
          </ul>
          <p>
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
