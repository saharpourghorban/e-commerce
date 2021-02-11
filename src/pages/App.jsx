import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "components/Layout";

// pages
import Home from "./Home";
import Product from "./Product";
import GlobalProvider from "components/GlobalContext";

export default function App() {
  const [basket, setBasket] = useState([]);
  const [productsList, setProductsList] = useState(null);
  const [filteredProductsList, setFilteredProductsList] = useState(null);

  return (
    <Router>
      <GlobalProvider
        value={{
          basket,
          setBasket,
          productsList,
          setProductsList,
          filteredProductsList,
          setFilteredProductsList
        }}
      >
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products/:productId">
              <Product />
            </Route>
            <Route path="*">
              <h1>This page is not available!</h1>
            </Route>
          </Switch>
        </Layout>
      </GlobalProvider>
    </Router>
  );
}
