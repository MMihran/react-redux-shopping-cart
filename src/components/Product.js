import React from "react";

const Product = props => {
  return (
    <div className="product">
      <div className="img-wrap">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="product-about">
        <p>Name: {props.name}</p>
        <p>Price: {props.price}$</p>
        {/* <p>Count: {props.count}</p> */}
        <button onClick={() => props.onClickAdd(props.id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
