import {
  ADD_TO_CART,
  LOAD_PRODUCTS,
  REMOVE_FROM_CART,
  CHANGE_COUNT
} from "./types";

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = product_id => ({
  type: REMOVE_FROM_CART,
  payload: product_id
});

export const changeCount = (product_id, count) => {
  console.log(product_id, count);

  return {
    type: CHANGE_COUNT,
    payload: {
      id: product_id,
      count: +count
    }
  };
};

export const loadProducts = () => dispatch => {
  fetch("/data/products.json")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: LOAD_PRODUCTS,
        payload: data
      });
    })
    .catch(console.log);
};
