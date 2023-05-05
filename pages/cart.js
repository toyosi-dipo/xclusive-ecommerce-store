import CartItem from "../components/CartItem";

function Cart() {
  return (
    <main className="mb-36 mt-14">
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

          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </main>
  );
}

export default Cart;
