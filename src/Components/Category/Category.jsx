import CategoryBox from "./CategoryBox";
import science from "../../assets/science.svg";
import entertainment from "../../assets/entertainment.svg";

const Category = () => {
  return (
    <section className="category-section">
      <h1>Select Your Challenge</h1>
      <h2>Category</h2>
      <div className="category-container flex">
        <CategoryBox src={science} categoryName="Sciences" to="science" />
        <CategoryBox
          src={entertainment}
          categoryName="Entertainment"
          to="entertainment"
        />
      </div>
    </section>
  );
};

export default Category;
