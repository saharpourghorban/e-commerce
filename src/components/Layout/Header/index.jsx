import React, { useEffect, useState } from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import Basket from "./Basket";
import Brand from "./Brand";
import Menu from "./Menu";
import Search from "./Search";
import Categories from "./Categories";
import axios from "axios";

// styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    boxShadow: "none",
    display: "flex",
    height: "3.5rem",
    justifyContent: "center"
  },
  cat: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block"
    }
  },
  grow: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get("https://fakestoreapi.com/products/categories", {
        cancelToken: source.token
      })
      .then(({ data }) => setCategories(data));

    return () => source.cancel("request canceled");
  }, []);

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Menu categories={categories} />
        <Brand />
        <Search />
        <div className={classes.cat}>
          <Categories categories={categories} />
        </div>
        <div className={classes.grow} />
        <Basket />
      </Toolbar>
    </AppBar>
  );
}
