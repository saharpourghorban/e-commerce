import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { GlobalContext } from "components/GlobalContext";

// styles
const useStyles = makeStyles((theme) => ({
  desc: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  price: {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  },
  link: {
    textDecoration: "none",
    color: "unset"
  }
}));


export default function ProductCard({
  id,
  title,
  price,
  description,
  image,
  category
}) {
  const classes = useStyles();
  const { setBasket } = useContext(GlobalContext);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <Link className={classes.link} to={`/products/${id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image={image}
              title={title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                className={classes.price}
              >
                {price.toLocaleString("no-NO", {
                  style: "currency",
                  currency: "NOK"
                })}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.desc}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => {
              let index;
              setBasket((prev = []) => {
                index = prev.findIndex((ele) => ele.title === title);
                let basket = [...prev];
                if (index !== -1) {
                  prev[index].number += 1;
                  basket = [...prev];
                } else basket = [...prev, { title, number: 1 }];
                return basket;
              });
            }}
          >
            Add to card
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
