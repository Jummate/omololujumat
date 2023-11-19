import { RxTriangleRight } from "react-icons/rx";

export const StackItem = ({ title, stacks }) => {
  return (
    <article>
      <h4>{title}</h4>
      <div className="About__technologies-items">
        {stacks.map((item, index) => (
          <span key={index}>
            <RxTriangleRight className="arrow-icon" />
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};
