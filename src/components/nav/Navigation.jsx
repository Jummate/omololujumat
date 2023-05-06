import { useState, useContext } from "react";
import { AppContext } from "../../utils";
import { Button } from "../button/Button";
// import { UnorderedList } from "../unorderedlist/UnorderedList";
import "./Navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";
export const Nav = () => {
  const [showFaBars, setShowFaBars] = useState(true);
  const context = useContext(AppContext);
  const body = document.querySelector("body");
  const {
    initialState: { showMenu },
    contextDispatch,
  } = context;

  const handleClick = () => {
    setShowFaBars(!showFaBars);
    body.classList.toggle("blur");
    contextDispatch({
      type: "SHOW_MENU",
      payload: { showMenu: !showMenu },
    });
  };
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
          {/* <UnorderedList items={["Home", "About", "Projects", "Contact"]} /> */}
          <ul>
            <li>
              <a href="#home">Home</a>
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
                onClick={() => console.log("Ypuuu")}
              />
            </li>
          </ul>
          <p>
            {showFaBars ? (
              <FaBars
                className="fa-icon"
                onClick={handleClick}
              />
            ) : (
              <FaTimes
                className="fa-icon fa-times"
                onClick={handleClick}
              />
            )}
          </p>
        </div>
      </nav>
    </header>
  );
};
