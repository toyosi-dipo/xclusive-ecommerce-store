import {
  FILTER_PRODUCTS_CATEGORY,
  SET_ALL_PRODUCTS,
  UPDATE_RENDERED_PRODUCTS,
} from "../../context/actions";
import { arrayOfArrays } from "../database/groupProducts";
import { filterInventoryCategory } from "../manageInventory";

function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS: {
      const productGroups = arrayOfArrays(action.payload, 21);
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
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

    case FILTER_PRODUCTS_CATEGORY: {
      const filteredProducts = filterInventoryCategory(
        state.allProducts,
        action.payload
      );
      const productGroups = arrayOfArrays(filteredProducts, 21);
      return {
        ...state,
        nextProductGroup: 1,
        filteredProducts,
        productGroups,
        renderedProducts: productGroups[0],
      };
    }

    default:
      throw new Error("NO MATCHING ACTION TYPE!!!");
  }
}

export default reducer;
