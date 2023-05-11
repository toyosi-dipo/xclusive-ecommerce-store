import {
  SET_ALL_PRODUCTS,
  UPDATE_RENDERED_PRODUCTS,
} from "../../context/actions";
import { arrayOfArrays } from "../database/groupProducts";

function reducer(state, action) {
  if (action.type === SET_ALL_PRODUCTS) {
    const productGroups = arrayOfArrays(action.payload, 21);
    return {
      ...state,
      allProducts: action.payload,
      productGroups,
      renderedProducts: productGroups[0],
    };
  }

  if (action.type === UPDATE_RENDERED_PRODUCTS) {
    return {
      ...state,
      renderedProducts: [...state.renderedProducts, ...action.payload],
    };
  }

  throw new Error("NO MATCHING ACTION!!!");
}

export default reducer;
