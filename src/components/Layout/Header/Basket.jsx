import React, { useContext, useState } from "react";
import {
  Badge,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem
} from "@material-ui/core";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { GlobalContext } from "components/GlobalContext";

// styles
const useStyles = makeStyles((theme) => ({
  item: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "3fr 1fr",
    gap: "0.5rem"
  },
  title: {
    textOverflow: "ellipsis",
    width: "15rem",
    overflow: "hidden",
    wordWrap: "no-wrap"
  },
  number: {}
}));

export default function Basket() {
  const classes = useStyles();
  const { basket, setBasket } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <Badge
          badgeContent={(() => {
            let number = 0;
            basket?.length && basket.forEach((ele) => (number += ele.number));
            return number;
          })()}
          color="secondary"
        >
          <LocalGroceryStoreIcon />
        </Badge>
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {basket?.map((product) => (
          <MenuItem className={classes.item} key={product.title}>
            <div className={classes.title}>{product.title}</div>
            <div className={classes.number}>{product.number}</div>
            <Button
              size="small"
              color="default"
              onClick={() => {
                let index;
                setBasket((prev = []) => {
                  index = prev.findIndex((ele) => ele.title === product.title);
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
          </MenuItem>
        ))}
      </Menu>
    </section>
  );
}
