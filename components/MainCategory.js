import Link from "next/link";
import { useGlobalContext } from "../context/GlobalContext";

function MainCategory({ title }) {
  const { filterProductsCategory } = useGlobalContext();
  return (
    <li>
      <button
        onClick={() => filterProductsCategory(title.toLowerCase())}
        className="inline-block whitespace-nowrap rounded border px-4 py-3 duration-200 hover:border-transparent hover:bg-yellow-200 md:border-none md:px-0 md:py-0 md:hover:bg-transparent md:hover:text-text1"
      >
        {title}
      </button>
    </li>
  );
}

export default MainCategory;
