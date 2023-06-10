import Error from "next/error";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HeartIcon,
  StarEmptyIcon,
  StarFullyFilledIcon,
  StarHalfFilledIcon,
} from "../../assets/icons";
import { useCartContext } from "../../context/CartContext";
import { useGlobalContext } from "../../context/GlobalContext";
import products from "../../data/products";
import formatPrice from "../../utils/formatPrice";
import { getAllProducts } from "../../utils/getProducts";

export async function getServerSideProps({ params }) {
  const productId = params.id;
  let isError = false,
    allFetchedProducts = [],
    product = {};

  try {
    allFetchedProducts = await getAllProducts();
    product = allFetchedProducts.find((product) => product._id === productId);
  } catch (error) {
    console.log(error.message);
    isError = error.message;
  }

  return {
    props: { allFetchedProducts, product, isError },
  };
}

function SingleProductPage({ allFetchedProducts, product, isError }) {
  const [tempQuantity, setTempQuantity] = useState(1);
  const { allProducts, setAllProducts } = useGlobalContext();
  const {
    cart,
    wishlist,
    addToCart,
    wishlistHandler,
    cartItemQuantityHandler,
  } = useCartContext();

  if (isError) {
    return <Error />;
  }

  const isInCart = cart.find((prod) => prod._id === product._id);
  const isInWishlist = wishlist.find((prod) => prod._id === product._id);

  const handleQuantityToCart = (id, operation) => {
    if (isInCart) {
      cartItemQuantityHandler(id, operation);
    } else {
      if (operation === "increase") {
        setTempQuantity(tempQuantity + 1);
      } else {
        setTempQuantity((tempQuantity) => {
          console.log(tempQuantity);
          return tempQuantity > 1 ? tempQuantity - 1 : tempQuantity;
        });
      }
    }
  };

  useEffect(() => {
    if (!isError && allProducts.length < 1) {
      setAllProducts(allFetchedProducts);
    }
  }, []);

  const {
    _id: id,
    name,
    price,
    rating,
    reviewsCount,
    imageUrl,
    description,
    discount,
  } = product;

  return (
    <main className="mb-36 mt-10 sm:mt-20">
      <div className="global-container">
        <p className="mb-10 flex items-center gap-3 text-sm text-black/50 sm:mb-20">
          Home <span>/</span> <span>Products</span> <span>/</span>
          <span className="capitalize text-black">{name}</span>
        </p>

        {/* Product container */}
        <div className="grid-cols-2 gap-4 space-y-8 md:grid md:space-y-0 lg:gap-16">
          {/* Product image container */}
          <div className="">
            <Image
              src={imageUrl}
              width={640}
              height={640}
              alt={name}
              className="h-auto w-auto object-cover"
            />
          </div>

          {/* Product details */}
          <div className="">
            <h3 className="mb-4 capitalize">{name}</h3>

            <div className="mb-4 flex items-center gap-2 text-lg">
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
              <p className="text-lg text-black/50">{`(${reviewsCount} Reviews)`}</p>
              <span>|</span> <span className="text-button1">In stock</span>
            </div>

            <p className="mb-6 flex flex-wrap gap-4 text-2xl">
              {formatPrice(price, discount)}
              {discount && (
                <span className=" text-black/50 line-through decoration-black/50">
                  {formatPrice(price)}
                </span>
              )}
            </p>
            {/* product description */}
            <p className="mb-10">{description}</p>
            <hr className="mb-10 w-full border border-black/50" />

            {/* buttons container */}
            <div className="flex flex-wrap items-center gap-4 lg:justify-between">
              {/* quantity container */}
              <div className="flex items-center">
                {/* reduce button */}
                <button
                  type="button"
                  className="flex h-11 w-10 items-center justify-center rounded-l border border-black/50 text-2xl duration-300 hover:border-button2 hover:bg-button2 hover:text-text disabled:cursor-not-allowed disabled:opacity-30"
                  // disabled={isInCart ? false : true}
                  onClick={() => handleQuantityToCart(id, "decrease")}
                >
                  -
                </button>

                {/* quantity */}
                <p className="flex h-11 items-center justify-center border-y border-black/50 px-9 text-xl">
                  {isInCart ? isInCart.cartQuantity : tempQuantity}
                </p>

                {/* increase button */}
                <button
                  type="button"
                  className="flex h-11 w-10 items-center justify-center rounded-r border border-button2 bg-button2 text-2xl text-text duration-300 hover:border-black/50 hover:bg-transparent hover:text-inherit"
                  onClick={() => handleQuantityToCart(id, "increase")}
                >
                  +
                </button>
              </div>

              {/* add to cart button */}
              <button
                className="btn2 py-o flex h-11 items-center disabled:cursor-not-allowed disabled:opacity-50"
                title={isInCart ? "Added to cart" : ""}
                disabled={isInCart ? true : false}
                onClick={() => addToCart(id, tempQuantity)}
              >
                Add to cart
              </button>

              {/* add to wishlist */}
              <button
                className="h-11 rounded border border-black/50 fill-white px-2 text-3xl duration-300 hover:bg-black/10"
                title={
                  isInWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
                onClick={() => wishlistHandler(id)}
              >
                <HeartIcon className={isInWishlist ? "fill-black" : ""} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleProductPage;
