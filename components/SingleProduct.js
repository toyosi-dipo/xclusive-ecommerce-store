import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CartIcon,
  HeartIcon,
  StarEmptyIcon,
  StarEmptyICon,
  StarFullyFilledIcon,
  StarHalfFilledIcon,
  TrashIcon,
} from "../assets/icons";
import { useCartContext } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

function SingleProduct({
  _id: id,
  name,
  price,
  rating,
  reviewsCount,
  imageUrl,
  newProduct,
  discount,
}) {
  const router = useRouter();
  const {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    wishlistHandler,
    itemCartQuantityHandler,
  } = useCartContext();
  const isWishlistPage = router.asPath === "/wishlist";
  const isInCart = cart.find((product) => product._id === id);
  const isInWishlist = wishlist.find((product) => product._id === id);

  // reducing the length of product name above a certain level
  let newName;
  if (discount) {
    newName = name.length > 15 ? `${name.slice(0, 15)}...` : name;
  } else {
    newName = name.length > 25 ? `${name.slice(0, 25)}...` : name;
  }

  return (
    <div className="relative mx-auto w-[20rem] max-w-full overflow-x-hidden sm:mx-0">
      {/* to do filling svg */}
      {/* icons */}
      <div
        className="absolute right-3 top-3 rounded-full bg-white fill-none p-1 text-2xl duration-300"
        title={
          isWishlistPage
            ? "Remove item"
            : isInWishlist
            ? "Remove from wishlish"
            : "Add to wishlist"
        }
      >
        {isWishlistPage ? (
          <TrashIcon onClick={() => wishlistHandler(id)} />
        ) : (
          <HeartIcon
            onClick={() => wishlistHandler(id)}
            className={isInWishlist ? "fill-black" : ""}
          />
        )}
      </div>
      {/* to do invisible and pointer event none when not in cart */}
      <div
        className={`absolute right-3 top-14 rounded-full bg-white fill-black p-1 text-2xl duration-300 ${
          isInCart
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        title="remove from cart"
        onClick={() => removeFromCart(id)}
      >
        <CartIcon className="" />
      </div>

      {/* discount */}
      {discount && (
        <p className="absolute left-3 top-3 rounded bg-secondary2 px-3 py-1 text-xs text-text">
          {`-${discount * 100}%`}
        </p>
      )}
      {newProduct && (
        <p
          className={`absolute left-3 rounded bg-button1 px-3 py-1 text-sm font-semibold text-text ${
            discount ? "top-10" : "top-3"
          }`}
        >
          New
        </p>
      )}
      {/* product details container */}
      <Link href={"/products/" + id} className="">
        {/* image container */}
        <div className="h-[12.8125rem]">
          <Image
            src={imageUrl}
            width={338}
            height={253}
            alt={"camera"}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* product content 14 and 23 */}
        <div className="mt-4">
          <div className="mb-2 grid grid-cols-[1fr_auto] items-center justify-between gap-1">
            <h4 className="whitespace-nowrap font-semibold text-gray-600">
              {newName}
            </h4>

            {/* price of product */}
            <h4 className="flex gap-2 text-lg font-bold text-secondary2">
              {formatPrice(price, discount)}
              {discount && (
                <span className="font-medium text-black/50 line-through decoration-black/50">
                  {formatPrice(price)}
                </span>
              )}
            </h4>
          </div>

          {/* ratings container */}
          <div className="flex items-center gap-2 text-lg">
            {/* rating */}
            {/* stars container */}
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => {
                if (rating >= index + 1) {
                  return (
                    <span key={index}>
                      <StarFullyFilledIcon />
                    </span>
                  );
                }
                if (rating < index + 1 && rating >= index + 0.5) {
                  return (
                    <span key={index}>
                      <StarHalfFilledIcon />
                    </span>
                  );
                }
                if (rating < index + 1) {
                  return (
                    <span key={index}>
                      <StarEmptyIcon />
                    </span>
                  );
                }
              })}
            </div>
            {/* count */}
            <p className="text-lg font-bold text-black/50">({reviewsCount})</p>
          </div>
        </div>
      </Link>
      <div className="relative">
        {/* add to cart button - disappear when item is in cart */}
        <button
          className={`mt-2 block w-full rounded bg-black py-3 text-center text-text duration-300 hover:opacity-70 ${
            isInCart
              ? "pointer-events-none opacity-0"
              : "pointer-events-auto opacity-100"
          }`}
          onClick={() => addToCart(id)}
        >
          Add to Cart
        </button>

        {/* increase and decrease buttons container. Disappear when item not in cart  */}
        <div
          className={`absolute left-0 top-0 flex w-full items-center justify-between text-center text-text ${
            isInCart
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => addToCart(id)}
        >
          <button
            className="h-12 rounded bg-black px-3  text-2xl font-bold duration-300 hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
            disabled={isInCart?.cartQuantity < 2 ? true : false}
            onClick={() => itemCartQuantityHandler(id, "decrease")}
          >
            -
          </button>
          <p className="text-2xl font-semibold text-black">
            {isInCart?.cartQuantity}
          </p>
          <button
            className="h-12 rounded  bg-black px-3 text-2xl font-bold  duration-300 hover:opacity-70"
            onClick={() => itemCartQuantityHandler(id, "increase")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
