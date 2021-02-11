import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "components/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: { flexDirection: "row" }
  },
  cat: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    margin: "0 1rem 0.5rem 1rem",
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "transparent",
      margin: "0"
    }
  }
}));

export default function Categories({ categories }) {
  const classes = useStyles();
  const { productsList, setFilteredProductsList } = useContext(GlobalContext);

  // funs
  const filterProduct = (category) => {
    setFilteredProductsList(
      category === "All"
        ? productsList
        : productsList.filter((product) => product.category === category)
    );
  };

  return (
    <nav className={classes.root}>
      <Button className={classes.cat} onClick={() => filterProduct("All")}>
        All
      </Button>
      {categories?.map((category) => (
        <Button
          className={classes.cat}
          key={category}
          onClick={() => filterProduct(category)}
        >
          {category}
        </Button>
      ))}
    </nav>
  );
}
