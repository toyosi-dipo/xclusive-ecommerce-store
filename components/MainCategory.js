import { useGlobalContext } from "../context/GlobalContext";
import { usePathname } from "next/navigation";

function MainCategory({ title, activeCategory, setActiveCategory, index }) {
  const pathname = usePathname();
  const { setProductsCategory } = useGlobalContext();
  return (
    <li>
      <button
        onClick={() => {
          setProductsCategory(title.toLowerCase());
          setActiveCategory(index);
        }}
        className={`inline-block whitespace-nowrap rounded border px-4 py-3 duration-200 hover:border-transparent hover:bg-yellow-200 md:border-none md:px-0 md:py-0 md:hover:bg-transparent md:hover:text-text1 ${
          pathname === "/products" && index === activeCategory
            ? "border-secondary2 text-secondary2 md:font-bold"
            : ""
        }`}
      >
        {title}
      </button>
    </li>
  );
}

export default MainCategory;
