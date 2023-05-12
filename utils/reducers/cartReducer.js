import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  HANDLE_ITEM_CART_QUANTITY,
  HANDLE_WISHLIST,
  MOVE_ALL_WISHLIST_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../../context/actions";
import { findInInventory, removeFromInventory } from "../manageInventory";

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

  if (action.type === HANDLE_WISHLIST) {
    const isInWishlist = findInInventory(state.wishlist, action.payload._id);
    if (isInWishlist) {
      return {
        ...state,
        wishlist: removeFromInventory(state.wishlist, action.payload._id),
      };
    } else {
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
  }

  if (action.type === REMOVE_FROM_WISHLIST) {
    return {
      ...state,
      wishlist: removeFromInventory(state.wishlist, action.payload),
    };
  }

  if (action.type === MOVE_ALL_WISHLIST_TO_CART) {
    const tempWishlist = state.wishlist.map((product) => ({
      ...product,
      cartQuantity: 1,
    }));
    return {
      ...state,
      cart: [...state.cart, ...tempWishlist],
      wishlist: [],
    };
  }

  throw new Error("NO MATCHING ACTION!!!");
}

export default reducer;
