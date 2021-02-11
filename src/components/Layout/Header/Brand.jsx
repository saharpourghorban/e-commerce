import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

// styles
const useStyles = makeStyles((theme) => ({
  brand: {
    color: "white",
    textDecoration: "none",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  logo: {
    color: "transparent",
    height: "2rem",
    width: "2rem",
    marginRight: "0.5rem"
  }
}));

export default function Brand() {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.brand}>
      <img src={logo} alt="Sahar Store" className={classes.logo} />
      <Typography variant="h6" noWrap>
        Sahar Store
      </Typography>
    </Link>
  );
}
