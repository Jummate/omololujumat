import "./Button.css";

export const Button = ({ text, onClick, extraStyle = "", children }) => {
  return (
    <button
      className={`buttonStyle ${extraStyle}`}
      onClick={onClick}
    >
      {children ? children : text}
    </button>
  );
};
