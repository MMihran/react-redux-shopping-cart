import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, loadProducts } from "../actions/productActions";

import Product from "../components/Product";

class ProductList extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  onClickAdd = (id, count) => {
    const product = this.props.productData.find(product => product.id === id);
    this.props.addToCart(product, count);
  };

  render() {
    const products = this.props.productData.map(prod => {
      return (
        <Product
          {...prod}
          onClickAdd={this.onClickAdd}
          key={prod.id}
          addCount={this.removeCount}
          removeCount={this.addCount}
        />
      );
    });
    return <div className="product-list">{products}</div>;
  }
}

const mapStateToProps = state => ({
  productData: state.products,
  productsInCart: state.productsInCart
});

export default connect(
  mapStateToProps,
  { addToCart, loadProducts }
)(ProductList);
