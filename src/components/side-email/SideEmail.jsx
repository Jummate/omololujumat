import "./SideEmail.css";

export const SideEmail = () => {
  return (
    <aside className="Email__container">
      <div className="Email__wrapper">
        <a
          href="mailto:omololujumat@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <span>omololujumat@gmail.com</span>
        </a>
      </div>
      <div className="Email__line"></div>
    </aside>
  );
};
