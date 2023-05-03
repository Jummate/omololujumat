import "./SideSocial.css";

import { FiGithub, FiLinkedin } from "react-icons/fi";

export const SideSocial = () => {
  return (
    <aside className="Social__container">
      <div className="Social__wrapper">
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
      <div className="Social__line"></div>
    </aside>
  );
};
