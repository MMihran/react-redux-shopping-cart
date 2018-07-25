import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import ProductList from "./containers/ProductList";
import Cart from "./containers/Cart";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
        <div className="content">
          <h1>Hello Everyone</h1>
          <h2>This is my mobile phone store!</h2>
          <ProductList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
