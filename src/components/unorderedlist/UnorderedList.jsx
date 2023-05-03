import "./UnorderedList.css";
import { Button } from "../button/Button";

export const UnorderedList = (items) => {
  return (
    <ul>
      {items.length > 0 &&
        items.map((item, index) => <li key={index}>{item}</li>)}
      <li>
        <Button
          text="Download CV"
          onClick={() => console.log("Ypuuu")}
        />
      </li>
    </ul>
  );
};
