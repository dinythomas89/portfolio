import { IoIosArrowDown } from "react-icons/io";
import "./clickHere.scss";

const ClickHere = () => {
  return (
    <div className="click-here">
      <div className="arrow">
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <p className="title">Hover here</p>
    </div>
  );
};

export default ClickHere;
