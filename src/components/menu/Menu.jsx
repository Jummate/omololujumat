import "./Menu.css";
import { Button } from "../button/Button";
// import { UnorderedList } from "../unorderedlist/UnorderedList";

export const Menu = () => {
  return (
    <section className="Menu__container">
      <div className="Menu__link__container">
        {/* <UnorderedList items={["Home", "About", "Projects", "Contact"]} /> */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
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
