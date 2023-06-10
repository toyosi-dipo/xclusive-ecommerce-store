import reducer from "../utils/reducers/cartReducer";
import {
  ADD_TO_CART,
  HANDLE_ITEM_CART_QUANTITY,
  HANDLE_WISHLIST,
  MOVE_ALL_WISHLIST_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "./actions";
import { findInInventory } from "../utils/manageInventory";
import { useGlobalContext } from "./GlobalContext";

const { createContext, useReducer, useContext } = require("react");

const CartContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
};

function CartProvider({ children }) {
  const { allProducts } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(productId, tempQuantity = 1) {
    const tempProduct = findInInventory(allProducts, productId);
    removeFromWishlist(productId);
    dispatch({
      type: ADD_TO_CART,
      payload: { ...tempProduct, cartQuantity: tempQuantity },
    });
  }

  function removeFromCart(productId) {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  }

  function wishlistHandler(productId) {
    const tempProduct = findInInventory(allProducts, productId);
    removeFromCart(productId);
    dispatch({ type: HANDLE_WISHLIST, payload: tempProduct });
  }

  function removeFromWishlist(productId) {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
  }

  function cartItemQuantityHandler(productId, operation) {
    dispatch({
      type: HANDLE_ITEM_CART_QUANTITY,
      payload: { productId, operation },
    });
  }

  function moveAllWishlistToCart() {
    dispatch({ type: MOVE_ALL_WISHLIST_TO_CART });
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        cartItemQuantityHandler,
        wishlistHandler,
        moveAllWishlistToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

export default CartProvider;
