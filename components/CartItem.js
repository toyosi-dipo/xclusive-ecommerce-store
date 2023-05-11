import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "../assets/icons";
import { useCartContext } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

function CartItem({ _id: id, name, price, imageUrl, discount }) {
  const { removeFromCart } = useCartContext();
  return (
    <>
      {/* For Small screens */}
      <div className="grid grid-cols-[1fr_1fr_auto] gap-2 md:hidden">
        {/* image  */}
        <div className="max-w-[14rem]">
          <Image
            src={imageUrl}
            width={338}
            height={253}
            alt={"camera"}
            className="h-auto w-auto rounded-lg object-cover"
          />
        </div>
        {/* details */}
        <div className="flex flex-col justify-between gap-2">
          <h4 className="font-bold">{name}</h4>
          <p className="text-base font-bold">{formatPrice(price, discount)}</p>
          <div className="">
            {/* to do - out of stock */}
            <p className="text-sm font-bold text-black/60"></p>
            <button
              className="font-semibold text-button2 hover:text-hoverButton"
              title="Remove item"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        </div>
        {/* buttons */}
        {/* grid item quantity */}
        {/* buttons */}
        <div className="flex flex-col items-center justify-center gap-4">
          {/* increase button */}
          <button className="rotate-180 rounded border border-black/30 p-1 text-2xl font-semibold text-button2 duration-200 hover:border-button2 hover:bg-button2 hover:text-text disabled:cursor-not-allowed disabled:opacity-30">
            <ChevronDownIcon />
          </button>
          <p className="text-lg">01</p>
          <button className="rounded border border-black/30 p-1 text-2xl font-semibold text-button2 duration-200 hover:border-button2 hover:bg-button2 hover:text-text disabled:cursor-not-allowed disabled:opacity-30">
            <ChevronDownIcon />
          </button>
        </div>
      </div>

      {/* For big screens */}
      <div className="product-shadow hidden grid-cols-4 place-items-center rounded px-4 py-6 md:grid">
        {/* grid item details */}
        <div className="flex place-items-center gap-5 self-start justify-self-start">
          {/* image container */}
          <div className="h-full max-w-[5rem] lg:max-w-[7rem]">
            <Image
              src={imageUrl}
              width={338}
              height={253}
              alt={"camera"}
              className="h-full w-auto object-cover"
            />
          </div>
          {/* details */}
          <div className="">
            <h4 className="">{name}</h4>
            <button
              className="font-medium text-button2 hover:text-hoverButton"
              title="Remove item"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        </div>

        {/* grid item price */}
        <p>{formatPrice(price)}</p>

        {/* grid item quantity */}
        {/* buttons */}
        <div className="flex items-center gap-2">
          {/* Reduce button */}
          <button className="rotate-180 rounded border border-black/30 p-1 text-2xl font-semibold text-button2 duration-200 hover:border-button2 hover:bg-button2 hover:text-text disabled:cursor-not-allowed disabled:opacity-30">
            <ChevronRightIcon />
          </button>

          {/* Quantity */}
          <p className="text-lg">01</p>

          {/* Increase button */}
          <button className="rounded border border-black/30 p-1 text-2xl font-semibold text-button2 duration-200 hover:border-button2 hover:bg-button2 hover:text-text disabled:cursor-not-allowed disabled:opacity-30">
            <ChevronRightIcon />
          </button>
        </div>

        {/* grid item subtotal */}
        <p>$650</p>
      </div>
    </>
  );
}

export default CartItem;
