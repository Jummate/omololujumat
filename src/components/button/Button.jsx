import "./Button.css";

export const Button = ({ text, onClick, extraStyle = "" }) => {
  return (
    <button
      className={`buttonStyle ${extraStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
