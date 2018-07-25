import React from "react";

const CartItem = props => {
  console.log(props);

  // addCount = () => {
  //   if (this.state.count > 999) return;
  //   this.setState(prevState => ({ count: prevState.count + 1 }));
  // };

  // removeCount = () => {
  //   if (this.state.count <= 1) return;
  //   this.setState(prevState => ({ count: prevState.count - 1 }));
  // };

  return (
    <div className="cart-item">
      <p className="item-name">{props.name}</p>
      <div className="img-wrap">
        <img src={props.img} alt="" />
      </div>
      <ul className="info">
        <li>
          Count:
          <input
            type="number"
            className="count"
            value={props.count}
            min="1"
            max="999"
            onChange={e => props.onChangeCount(props.id, e.target.value)}
          />
        </li>
        <li>Price: {props.price}</li>
        <li>Total: {props.price * props.count}$</li>
      </ul>
      <ul className="item-actions">
        <li>
          <button onClick={() => props.removeFromCart(props.id)}>Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
