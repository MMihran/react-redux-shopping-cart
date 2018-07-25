import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, changeCount } from "../actions/productActions";

import CartItem from "../components/CartItem";
class Cart extends Component {
  state = {
    cartStatus: "cart-wrap"
  };

  toggleCart = () => {
    this.setState(prevState => {
      return {
        cartStatus: prevState.cartStatus.includes("show")
          ? "cart-wrap"
          : prevState.cartStatus + " show"
      };
    });
  };

  render() {
    const productsInCart = this.props.cartItems.map(product => {
      return (
        <CartItem
          {...product}
          key={product.id}
          removeFromCart={this.props.removeFromCart}
          onChangeCount={this.props.changeCount}
        />
      );
    });
    return (
      <div className={this.state.cartStatus}>
        <h2>Cart</h2>
        <button className="close" onClick={this.toggleCart}>
          {this.state.cartStatus.includes("show") ? "Hide Cart" : "Show Cart"}
        </button>
        {!productsInCart.length && <h3>No items</h3>}
        <div className="cart">{productsInCart}</div>
        <h3 className="total">
          Total:{" "}
          {this.props.cartItems.reduce((sum, product) => {
            return sum + product.count * product.price;
          }, 0)}{" "}
          $
        </h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cartItems: state.productsInCart
});

export default connect(
  mapStateToProps,
  { removeFromCart, changeCount }
)(Cart);
