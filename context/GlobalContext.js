import reducer from "../utils/reducers/globalReducer";
import {
  FILTER_PRODUCTS,
  RESET_FILTERS,
  SET_ALL_PRODUCTS,
  SET_PRICE_LIMIT,
  SET_PRODUCT_CATEGORY,
  SET_SEARCH_QUERY,
  SET_SORT,
  SORT_PRODUCTS,
  UPDATE_RENDERED_PRODUCTS,
} from "./actions";

const { createContext, useReducer, useContext, useEffect } = require("react");

const GlobalContext = createContext();

const initialState = {
  nextProductGroup: 1,
  activeCategory: 0,
  allProducts: [],
  filters: { priceLimit: 0, category: "all", search: "" },
  filteredProducts: [],
  productGroups: [],
  renderedProducts: [],
  sort_by: "none",
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setAllProducts(allProducts) {
    dispatch({ type: SET_ALL_PRODUCTS, payload: allProducts });
  }

  function updateRenderedProducts(productGroup) {
    dispatch({ type: UPDATE_RENDERED_PRODUCTS, payload: productGroup });
  }

  function setProductsCategory(category, index) {
    dispatch({ type: SET_PRODUCT_CATEGORY, payload: { category, index } });
  }

  function setPriceLimit(e) {
    dispatch({ type: SET_PRICE_LIMIT, payload: Number(e.target.value) });
  }

  function handleSearch(e) {
    dispatch({ type: SET_SEARCH_QUERY, payload: e.target.value });
  }

  function handleSort(e) {
    dispatch({ type: SET_SORT, payload: e.target.value });
  }

  function resetFilters() {
    dispatch({ type: RESET_FILTERS });
  }

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.allProducts, state.filters, state.sort_by]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleSort,
        handleSearch,
        resetFilters,
        setAllProducts,
        setPriceLimit,
        setProductsCategory,
        updateRenderedProducts,
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
