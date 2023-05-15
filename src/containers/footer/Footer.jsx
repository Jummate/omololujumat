import "./Footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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
          href="https://www.linkedin.com/omololu-jumat-1405"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <span>
            <FiLinkedin />
          </span>
        </a>
      </div>
      <p className="Footer__text">Designed & Built by Omololu Jumat</p>
    </footer>
  );
};
