import { Button, Chip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { GlobalContext } from "components/GlobalContext";
import React, { useContext, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "768px",
      margin: " auto"
    }
  },
  img: { objectFit: "contain", objectPosition: "center" },
  title: { marginTop: "2rem" },
  chip: { margin: "1rem 0" }
}));

export default function ProductInfo({ productId }) {
  const classes = useStyles();
  const { setBasket } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(`https://fakestoreapi.com/products/${productId}`, {
        cancelToken: source.token
      })
      .then(({ data }) => setProduct(data));

    return () => source.cancel("request canceled");
  }, [productId]);

  return (
    <section className={classes.root}>
      <img
        src={product?.image}
        height="500"
        className={classes.img}
        alt={product?.title}
      />
      <Typography variant="h6" component="h2" className={classes.title}>
        {product?.title}
      </Typography>
      <Typography gutterBottom variant="h6" component="h2">
        {product?.price.toLocaleString("de-DE", {
          style: "currency",
          currency: "NOK"
        })}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {product?.description}
      </Typography>

      <Chip label={product?.category} className={classes.chip} />

      <div className="">
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => {
            let index;
            setBasket((prev = []) => {
              index = prev.findIndex((ele) => ele.title === product?.title);
              let basket = [...prev];
              if (index !== -1) {
                prev[index].number += 1;
                basket = [...prev];
              } else basket = [...prev, { title: product?.title, number: 1 }];
              return basket;
            });
          }}
        >
          Add to card
        </Button>
        <Button
          size="small"
          color="default"
          onClick={() => {
            let index;
            setBasket((prev = []) => {
              index = prev.findIndex((ele) => ele.title === product?.title);
              let basket = [...prev];
              if (index !== -1) {
                if (prev[index].number > 1) prev[index].number -= 1;
                else prev.splice(index, 1);
                basket = [...prev];
              }
              return basket;
            });
          }}
        >
          Remove
        </Button>
      </div>
    </section>
  );
}
