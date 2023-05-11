import reducer from "../utils/reducers/cartReducer";
import {
  ADD_TO_CART,
  HANDLE_ITEM_CART_QUANTITY,
  HANDLE_WISHLIST,
  REMOVE_FROM_CART,
} from "./actions";
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

  function addToCart(productId) {
    const tempProduct = allProducts.find(
      (product) => product._id === productId
    );
    dispatch({
      type: ADD_TO_CART,
      payload: { ...tempProduct, cartQuantity: 1 },
    });
  }

  function removeFromCart(productId) {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  }

  function wishlistHandler(productId) {
    const tempProduct = allProducts.find(
      (product) => product._id === productId
    );
    dispatch({ type: HANDLE_WISHLIST, payload: tempProduct });
  }

  function itemCartQuantityHandler(productId, operation) {
    dispatch({
      type: HANDLE_ITEM_CART_QUANTITY,
      payload: { productId, operation },
    });
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        wishlistHandler,
        itemCartQuantityHandler,
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
