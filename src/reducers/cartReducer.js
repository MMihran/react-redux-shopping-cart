import {
  ADD_TO_CART,
  LOAD_PRODUCTS,
  REMOVE_FROM_CART,
  CHANGE_COUNT
} from "../actions/types";

const cartInitialState = {
  products: [],
  productsInCart: []
};

export default function(state = cartInitialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case CHANGE_COUNT:
      return {
        ...state,
        productsInCart: state.productsInCart.map(product => {
          product.count =
            product.id === action.payload.id
              ? action.payload.count
              : product.count;
          return product;
        })
      };
    case ADD_TO_CART:
      let newProduct = action.payload;
      newProduct.count = 1;
      if (state.productsInCart.some(product => product.id === newProduct.id))
        return state;
      return {
        ...state,
        productsInCart: [...state.productsInCart, newProduct]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          product => product.id !== action.payload
        )
      };
    default:
      return state;
  }
}
