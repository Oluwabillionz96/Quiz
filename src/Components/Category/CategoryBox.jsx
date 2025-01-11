import "./category.css";
import { Link } from "react-router-dom";

const CategoryBox = ({ src, categoryName, to = "" }) => {
  return (
    <div className="category flex">
      <div className="img">
        <div>
          <img src={src} />
        </div>
        <div>
          <h3>{categoryName}</h3>
          <Link to={`/category/${to.toLowerCase()}`}>
            <button>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
