import {
  ADD_TO_CART,
  HANDLE_ITEM_CART_QUANTITY,
  HANDLE_WISHLIST,
  REMOVE_FROM_CART,
} from "../../context/actions";

function reducer(state, action) {
  if (action.type === ADD_TO_CART) {
    return { ...state, cart: [...state.cart, action.payload] };
  }

  if (action.type === REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter((product) => product._id !== action.payload),
    };
  }

  if (action.type === HANDLE_WISHLIST) {
    const isInWishlist = state.wishlist.find(
      (product) => product._id === action.payload._id
    );
    if (isInWishlist) {
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    } else {
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
  }

  if (action.type === HANDLE_ITEM_CART_QUANTITY) {
    if (action.payload.operation === "increase") {
      // constructing new cart with updated item quantity
      const tempCart = state.cart.map((product) => {
        if (product._id === action.payload.productId) {
          return { ...product, cartQuantity: product.cartQuantity + 1 };
        }
        return product;
      });

      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const tempCart = state.cart.map((product) => {
        if (product._id === action.payload.productId) {
          return { ...product, cartQuantity: product.cartQuantity - 1 };
        }
        return product;
      });

      return {
        ...state,
        cart: tempCart,
      };
    }
  }

  throw new Error("NO MATCHING ACTION!!!");
}

export default reducer;
