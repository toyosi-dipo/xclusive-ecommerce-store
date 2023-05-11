import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../assets/icons";
import MainCategory from "../../components/MainCategory";
import SingleProduct from "../../components/SingleProduct";
import { useGlobalContext } from "../../context/GlobalContext";
import { mainCategories } from "../../data/categories";
import products from "../../data/products";
import { arrayOfArrays } from "../../utils/database/groupProducts";

function Products() {
  const router = useRouter();
  const mainRef = useRef(null);
  const [nextProductGroup, setNextProductGroup] = useState(1);
  const {
    allProducts,
    productGroups,
    renderedProducts,
    updateRenderedProducts,
  } = useGlobalContext();

  // if no product has been fetched
  useEffect(() => {
    if (allProducts.length < 1) {
      router.push("/");
    }
  }, []);

  // scroll handler
  useEffect(() => {
    function handleScroll() {
      const { scrollHeight, offsetTop } = mainRef.current;

      if (
        window.scrollY + window.innerHeight >=
        scrollHeight + offsetTop - 20
      ) {
        updateRenderedProducts(productGroups[nextProductGroup]);
        setNextProductGroup(nextProductGroup + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextProductGroup]);

  return (
    <main ref={mainRef} className="mb-36 mt-10 sm:mt-20">
      <div className="global-container">
        <p className="mb-10 flex flex-wrap items-center gap-3 text-sm text-black/50">
          Home <span>/</span> <span className="text-black">Products</span>
        </p>

        <div className="grid-cols-[auto_1fr] gap-4 md:grid lg:gap-10">
          {/* grid item 1 */}
          <div className="">
            {/* Search box */}
            <div className="mb-4 flex items-center gap-2 rounded bg-secondary px-3 text-xs sm:mb-5 sm:text-sm lg:hidden">
              <input
                type="text"
                className="grow bg-transparent px-1 py-3 focus:outline-none md:max-w-[8rem]"
                placeholder="What are you looking for?"
              />
              <SearchIcon className="text-2xl" />
            </div>

            {/* categories */}
            <div className="mb-6 text-sm">
              <h4 className="mb-1 font-semibold md:mb-3">Categories</h4>
              <ul className="flex justify-between gap-2 overflow-x-auto md:block md:space-y-4">
                {mainCategories.map((category, index) => (
                  <MainCategory key={index} {...category} />
                ))}
              </ul>
            </div>

            {/* other filters */}
            <div className="mb-6 max-w-max md:mb-10">
              <label
                htmlFor="price_range"
                className="block text-sm font-semibold md:text-base"
              >
                Price
              </label>
              <input
                type="range"
                name="price_range"
                id="price_range"
                className=""
              />
              <div className="flex justify-between">
                <p className="text-sm">$0</p>
                <p className="text-sm">$240</p>
              </div>
            </div>

            {/* reset button */}
            <button className="btn2 mb-10 px-6 py-2 text-sm lg:text-base">
              Reset filters
            </button>
          </div>

          {/* all products container */}
          <div className="">
            <div className="mb-6 items-center gap-1 sm:flex">
              <p className="mb-3 sm:mb-0">
                <span className="font-semibold">{allProducts.length}</span>{" "}
                items found
              </p>
              <hr className="hidden grow border sm:block" />

              <label htmlFor="sort_by" className="inline-flex gap-1 font-bold">
                Sort by
                <select name="sort_by" id="sort_by" className="font-normal">
                  <option value="highest">price - highest</option>
                  <option value="lowest">price - lowest</option>
                  <option value="ascending">name (a - z)</option>
                  <option value="descending">name (z - a)</option>
                </select>
              </label>
            </div>
            <div className="mb-14 grid-cols-2 place-items-center gap-4 gap-y-14 space-y-10 sm:grid sm:space-y-0 lg:grid-cols-3">
              {renderedProducts.map((product, index) => (
                <SingleProduct key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
