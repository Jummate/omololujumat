import "./Menu.css";
import { Button } from "../button/Button";
// import { UnorderedList } from "../unorderedlist/UnorderedList";

export const Menu = () => {
  return (
    <section className="Menu__container">
      <div className="Menu__link__container">
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
      </div>
    </section>
  );
};
