import "./SubHeading.css";
export const SubHeading = ({ text }) => (
  <div className="SubHeading__container">
    <h3 className="sub-heading">{text.toLowerCase()}</h3>
  </div>
);
