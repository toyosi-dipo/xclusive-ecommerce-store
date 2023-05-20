import { loadGetInitialProps } from "next/dist/shared/lib/utils";
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
} from "../../context/actions";
import { arrayOfArrays } from "../database/groupProducts";
import { filterInventoryCategory } from "../manageInventory";
import maxValue from "../maxValue";

function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS: {
      const productGroups = arrayOfArrays(action.payload, 21);
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
        filters: { ...state.filters, priceLimit: maxValue(action.payload) },
        productGroups,
        renderedProducts: productGroups[0],
      };
    }

    case UPDATE_RENDERED_PRODUCTS: {
      return {
        ...state,
        nextProductGroup: state.nextProductGroup + 1,
        renderedProducts: [...state.renderedProducts, ...action.payload],
      };
    }

    case SET_PRODUCT_CATEGORY: {
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    }

    case SET_PRICE_LIMIT: {
      return {
        ...state,
        filters: { ...state.filters, priceLimit: action.payload },
      };
    }
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    }

    case SET_SORT: {
      return { ...state, sort_by: action.payload };
    }

    case FILTER_PRODUCTS: {
      let tempProducts = [...state.allProducts];
      // category filtering
      tempProducts = filterInventoryCategory(
        tempProducts,
        state.filters.category
      );

      // search filtering
      tempProducts = tempProducts.filter((product) => {
        const { name, categories } = product;
        return (
          name.toLowerCase().includes(state.filters.search.toLowerCase()) ||
          categories.toLowerCase().includes(state.filters.search.toLowerCase())
        );
      });

      // price filtering
      tempProducts = tempProducts.filter((product) => {
        const { price, discount = 0 } = product;
        return price - price * discount <= state.filters.priceLimit;
      });

      const productGroups = arrayOfArrays(tempProducts, 21);
      return {
        ...state,
        nextProductGroup: 1,
        filteredProducts: tempProducts,
        productGroups,
        renderedProducts: productGroups[0],
      };
    }

    case SORT_PRODUCTS: {
      const { sort_by, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort_by === "none") {
        tempProducts;
      } else if (sort_by === "price_ascending") {
        tempProducts = tempProducts.sort((a, b) => {
          const firstPrice = a.price - a.price * (a.discount || 0);
          const secondPrice = b.price - b.price * (b.discount || 0);
          return firstPrice - secondPrice;
        });
      } else if (sort_by === "price_descending") {
        tempProducts = tempProducts.sort((a, b) => {
          const firstPrice = a.price - a.price * (a.discount || 0);
          const secondPrice = b.price - b.price * (b.discount || 0);
          return secondPrice - firstPrice;
        });
      } else if (sort_by === "name_ascending") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
      } else if (sort_by === "name_descending") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );
      }
      const productGroups = arrayOfArrays(tempProducts, 21);
      return {
        ...state,
        nextProductGroup: 1,
        filteredProducts: tempProducts,
        productGroups,
        renderedProducts: productGroups[0],
      };
    }

    case RESET_FILTERS: {
      const productGroups = arrayOfArrays(state.allProducts, 21);
      return {
        allProducts: state.allProducts,
        nextProductGroup: 1,
        filteredProducts: state.allProducts,
        filters: {
          category: "all",
          priceLimit: maxValue(state.allProducts),
          search: "",
        },
        productGroups,
        renderedProducts: productGroups[0],
        sort_by: "none",
      };
    }

    default:
      throw new Error(`NO MATCHING ACTION TYPE: ${action.type}!`);
  }
}

export default reducer;
