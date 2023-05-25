import { v4 as uuidv4 } from "uuid";
import "./display.css";

const Display = (props) => {
  const { details } = props;
  return (
    <li className="list" key={uuidv4()}>
      <img className="image" src={details} alt="multiple" />
    </li>
  );
};

export default Display;
