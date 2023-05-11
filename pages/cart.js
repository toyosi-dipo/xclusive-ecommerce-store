import Link from "next/link";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useCartContext();

  return (
    <main className="mb-36 mt-10 sm:mt-20">
      <div className="global-container">
        <p className="mb-10 flex items-center gap-3 text-sm text-black/50 sm:mb-20">
          Home <span>/</span> <span className="text-black">Cart</span>
        </p>

        {/* Cart container screens */}
        <div className="space-y-10">
          {/* heading on large screens */}
          <div className="product-shadow hidden grid-cols-4 place-items-center rounded py-6 md:grid">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>

          {cart.map((product, index) => (
            <CartItem key={index} {...product} />
          ))}
        </div>

        {/* Return to shop link */}
        <Link
          href={"/products"}
          className="mt-4 inline-block rounded border px-12 py-4 duration-300 hover:border-black hover:bg-black hover:text-text"
        >
          Return to shop
        </Link>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-start md:gap-2">
          {/* Coupon container */}
          <div className="flex flex-wrap justify-between gap-4 md:justify-self-start ">
            <input
              type="text"
              className="w-full rounded border px-6 py-4 text-black/50 focus:outline-none sm:w-auto"
              placeholder="Coupon Code"
            />
            <button type="button" className="btn2 mx-auto block sm:mx-0">
              Apply Coupon
            </button>
          </div>

          {/* Total amount container */}
          <div className="w-full space-y-4 rounded border px-6 py-8 md:justify-self-end">
            <p className="text-lg font-medium">Cart Total</p>
            <div className="flex justify-between border-b pb-4">
              <p className="">Subtotal:</p> <p className="">$1750</p>
            </div>
            <div className="flex justify-between border-b pb-4">
              <p className="">Shipping:</p> <p className="">Free</p>
            </div>
            <div className="flex justify-between border-b pb-4">
              <p className="">Total:</p> <p className="">$1750</p>
            </div>

            <button className="btn2 w-full max-w-none">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
