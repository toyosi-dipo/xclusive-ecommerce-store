import MainCategory from "../components/MainCategory";
import SingleProduct from "../components/SingleProduct";
import { mainCategories } from "../data/categories";

function Products() {
  return (
    <main className="mb-36 mt-10 sm:mt-20">
      <div className="global-container md:px-10">
        <p className="mb-10 flex flex-wrap items-center gap-3 text-sm text-black/50 sm:mb-20">
          Home <span>/</span> <span className="text-black">Products</span>
        </p>

        <div className="grid-cols-[auto_1fr] gap-4 md:grid lg:gap-10">
          {/* categories */}
          {/* to do horizontal scrolling */}
          <ul className="mb-10 flex justify-between gap-2 md:block md:space-y-4">
            {mainCategories.map((category, index) => (
              <MainCategory key={index} {...category} />
            ))}
          </ul>
          {/* Wishlist products container */}
          <div className="mb-14 grid-cols-2 place-items-center gap-4 gap-y-14 space-y-10 sm:grid sm:space-y-0 md:grid-cols-3 xl:grid-cols-4">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
