import SingleProduct from "../components/SingleProduct";

function Wishlist() {
  return (
    <main className="mb-36 mt-14">
      <div className="global-container">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg">Wishlist (4)</p>
          {/* to do - add all products to bag */}
          <button className="rounded border border-black/50 px-6 py-2 text-center duration-200 hover:border-yellow-200 hover:bg-yellow-200 sm:px-12 sm:py-4">
            Move All To Bag
          </button>
        </div>

        {/* Wishlist products container */}
        <div className="mb-14 grid-cols-2 place-items-center gap-4 gap-y-14 space-y-10 sm:grid sm:space-y-0 md:grid-cols-3 lg:grid-cols-4">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    </main>
  );
}

export default Wishlist;
