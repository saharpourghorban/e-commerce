import React, { useState } from "react";
import { IconButton, makeStyles, SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brand from "./Brand";
import Categories from "./Categories";

// styles
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  }
}));

export default function Menu({ categories }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  // funs
  const toggleDrawer = () => setDrawer((prev) => !prev);

  return (
    <aside>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={drawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div className={classes.cat}>
          <Categories categories={categories} />
        </div>
      </SwipeableDrawer>
    </aside>
  );
}
