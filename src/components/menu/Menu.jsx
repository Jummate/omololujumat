import "./Menu.css";
import { Button } from "../button/Button";
import { FaTimes } from "react-icons/fa";

export const Menu = ({ onClick }) => {
  return (
    <section className="Menu__container">
      <div className="Menu__icon-container">
        <FaTimes
          className="fa-icon"
          onClick={onClick}
        />
      </div>
      <div className="Menu__link__container">
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
      </div>
    </section>
  );
};
