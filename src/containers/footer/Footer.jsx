import "./Footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { year } from "../../utils/date";

export const Footer = () => {
  return (
    <footer className="Footer__container">
      <div className="Footer__social-media">
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
          href="https://www.linkedin.com/in/omololu-jumat-1405"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <span>
            <FiLinkedin />
          </span>
        </a>
      </div>
      <p className="Footer__text">
        Designed & Built by Omololu Jumat &copy;{year}
      </p>
    </footer>
  );
};
