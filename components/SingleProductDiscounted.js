import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CartIcon,
  HeartIcon,
  StarFullyFilledIcon,
  StarHalfFilledIcon,
  TrashIcon,
} from "../assets/icons";

function SingleProductDiscounted() {
  const router = useRouter();
  const isWishlist = router.asPath === "/wishlist";

  return (
    <div className="relative mx-auto max-w-max sm:mx-0">
      {/* to do filling svg */}
      {/* icons */}
      <div
        className="absolute right-3 top-3 rounded-full bg-white fill-none p-1 text-2xl duration-300"
        title="Add to wishlist"
      >
        <HeartIcon className="" />
      </div>
      {/* to do invisible and pointer event none when not in cart */}
      <div
        className="absolute right-3 top-14 rounded-full bg-white p-1 text-2xl duration-300"
        title="Add to Cart"
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

      {/* to do dynamic calc */}
      {/* discount */}
      <p className="absolute left-3 top-3 rounded bg-secondary2 px-3 py-1 text-xs text-text">
        -40%
      </p>

      {/* product details container */}
      <Link href={"/products/13"} className="">
        {/* image container */}
        <div className="max-h-[253px] max-w-[338px]">
          <Image
            src={"/images/cameras/pexels-pixabay-51383.jpg"}
            width={338}
            height={253}
            alt={"camera"}
            className="h-auto w-auto rounded-lg object-cover"
          />
        </div>

        {/* product content */}
        <div className="mt-4">
          <div className="flew-wrap mb-2 flex justify-between gap-4">
            <h4 className="text-lg font-semibold text-gray-600">
              Name of product
            </h4>
            {/* to do dynamic calc */}
            {/* price of product */}
            <h4 className="flex gap-4 text-xl font-bold text-secondary2">
              $350
              <span className="text-lg font-medium text-black/50 line-through decoration-black/50">
                $500
              </span>
            </h4>
          </div>
          {/* to do dynamic calc */}
          {/* ratings container */}
          <div className="flex items-center gap-2 text-lg">
            {/* rating */}
            {/* stars container */}
            <div className="flex">
              <span>
                <StarFullyFilledIcon />
              </span>
              <span>
                <StarFullyFilledIcon />
              </span>
              <span>
                <StarFullyFilledIcon />
              </span>
              <span>
                <StarFullyFilledIcon />
              </span>
              <span>
                <StarHalfFilledIcon />
              </span>
            </div>
            {/* count */}
            <p className="text-lg font-bold text-black/50">(56)</p>
          </div>
        </div>
      </Link>
      <button className="mt-2 block w-full rounded bg-black py-3 text-center text-text duration-300 hover:opacity-70">
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProductDiscounted;
