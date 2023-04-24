import "./Navigation.css";
import { FaBars } from "react-icons/fa";
export const Nav = () => {
  return (
    <header className="nav__header">
      <nav className="nav__container">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="nav__link__container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <FaBars className="fa-bars-icon" />
        </div>
      </nav>
    </header>
  );
};
