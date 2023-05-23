import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CartIcon, HeartIcon, SearchIcon } from "../assets/icons";
import NavLink from "../components/NavLink";
import { useCartContext } from "../context/CartContext";
import { useGlobalContext } from "../context/GlobalContext";
import navLinks from "../data/navlinks";

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    filters: { search },
    handleSearch,
  } = useGlobalContext();
  const { wishlist, cart } = useCartContext();
  return (
    <>
      <nav className="border-b pb-4 pt-10">
        <div className="global-container flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="font-inter text-2xl font-bold" rel="logo">
            Xclusive
          </Link>

          {/* Nav Links */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-12">
            {navLinks.map((link, index) => {
              return <NavLink key={index} {...link} />;
            })}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            {/* Search container */}
            <div className="flex items-center gap-2 rounded bg-secondary px-3 text-xs">
              <input
                type="search"
                value={search}
                onChange={(e) => {
                  handleSearch(e);
                  if (pathname !== "/products") {
                    router.push("/products");
                  }
                }}
                className="bg-transparent px-1 py-3 focus:outline-none"
                placeholder="What are you looking for?"
              />
              <SearchIcon className="text-2xl" />
            </div>
            <div className="flex items-center gap-4 text-3xl">
              <Link href="/wishlist" className="relative">
                <p className="absolute right-0 top-0 grid  h-5 w-5 translate-x-1/4 place-items-center rounded-full bg-secondary2 text-xs font-semibold text-white">
                  {wishlist.length}
                </p>
                <HeartIcon
                  className={`duration-500 hover:text-text1 ${
                    wishlist.length > 0 ? "fill-black" : "fill-none"
                  }`}
                />
              </Link>
              <Link href="/cart" className="relative">
                <p className="absolute right-0 top-0 grid  h-5 w-5 translate-x-1/2 place-items-center rounded-full bg-secondary2 text-xs font-semibold text-white">
                  {cart.length}
                </p>
                <CartIcon
                  className={`duration-300 hover:text-text1 ${
                    cart.length > 0 ? "fill-black" : "fill-none"
                  }`}
                />
              </Link>
              {/* to do put user icon here */}
            </div>
          </div>

          {/* <!-- Hamburger Button --> */}
          <button className="hamburger block lg:hidden" type="button">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
