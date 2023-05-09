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
  const isWishlist = router.asPath === "/wishlist";

  // reducing the length of product name above a certain level
  let newName;
  if (discount) {
    newName = name.length > 15 ? `${name.slice(0, 15)}...` : name;
  } else {
    newName = name.length > 25 ? `${name.slice(0, 25)}...` : name;
  }

  return (
    <div className="relative mx-auto w-[20rem] max-w-full sm:mx-0">
      {/* to do filling svg */}
      {/* icons */}
      <div
        className="absolute right-3 top-3 rounded-full bg-white fill-none p-1 text-2xl duration-300"
        title={isWishlist ? "Remove item" : "Add to wishlist"}
      >
        {isWishlist ? <TrashIcon /> : <HeartIcon className="" />}
      </div>
      {/* to do invisible and pointer event none when not in cart */}
      <div
        className="absolute right-3 top-14 rounded-full bg-white p-1 text-2xl duration-300"
        title="Add to Cart"
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
            <h4 className="flex gap-4 text-xl font-bold text-secondary2">
              {formatPrice(price, discount)}
              {discount && (
                <span className="text-lg font-medium text-black/50 line-through decoration-black/50">
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
                    <span>
                      <StarFullyFilledIcon />
                    </span>
                  );
                }
                if (rating < index + 1 && rating >= index + 0.5) {
                  return (
                    <span>
                      <StarHalfFilledIcon />
                    </span>
                  );
                }
                if (rating < index + 1) {
                  return (
                    <span>
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
      <button className="mt-2 block w-full rounded bg-black py-3 text-center text-text duration-300 hover:opacity-70">
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProduct;
