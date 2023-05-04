import Link from "next/link";
import { CartIcon, HeartIcon, SearchIcon } from "../assets/icons";
import NavLink from "../components/NavLink";
import navLinks from "../data/navlinks";

function NavBar() {
  return (
    <>
      <nav className="border-b pb-4 pt-10">
        <div className="global-container flex items-center justify-between">
          {/* Logo */}
          <div className="font-inter text-2xl font-bold" rel="logo">
            Xclusive
          </div>

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
                type="text"
                className="bg-transparent px-1 py-3 focus:outline-none"
                placeholder="What are you looking for?"
              />
              <SearchIcon className="text-2xl" />
            </div>
            <div className="flex items-center gap-4 text-3xl">
              <Link href="/wishlist">
                <HeartIcon className="duration-300 hover:text-text1" />
              </Link>
              <Link href="/cart">
                <CartIcon className="duration-300 hover:text-text1" />
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
