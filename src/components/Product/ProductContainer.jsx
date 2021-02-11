import React, { useContext } from "react";
import { CircularProgress, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import { GlobalContext } from "components/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "25rem"
  },
  divider: {
    margin: "0 0 2rem 0"
  },
  progress: {
    margin: "auto"
  }
}));

export default function ProductContainer() {
  const classes = useStyles();
  const { filteredProductsList } = useContext(GlobalContext);

  return (
    <section className={classes.root}>
      <Typography gutterBottom variant="h5" component="h1">
        Product List
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {filteredProductsList ? (
          filteredProductsList.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))
        ) : (
          <CircularProgress className={classes.progress} />
        )}
      </Grid>
    </section>
  );
}
