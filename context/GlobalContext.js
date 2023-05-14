import reducer from "../utils/reducers/globalReducer";
import {
  FILTER_PRODUCTS_CATEGORY,
  SET_ALL_PRODUCTS,
  UPDATE_RENDERED_PRODUCTS,
} from "./actions";

const { createContext, useReducer, useContext } = require("react");

const GlobalContext = createContext();

const initialState = {
  nextProductGroup: 1,
  allProducts: [],
  filteredProducts: [],
  productGroups: [],
  renderedProducts: [],
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setAllProducts(allProducts) {
    dispatch({ type: SET_ALL_PRODUCTS, payload: allProducts });
  }

  function updateRenderedProducts(productGroup) {
    dispatch({ type: UPDATE_RENDERED_PRODUCTS, payload: productGroup });
  }

  function filterProductsCategory(category) {
    dispatch({ type: FILTER_PRODUCTS_CATEGORY, payload: category });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setAllProducts,
        updateRenderedProducts,
        filterProductsCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export default GlobalProvider;
