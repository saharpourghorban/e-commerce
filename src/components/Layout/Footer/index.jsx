import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import RegForNews from "./RegForNews";
import AboutUs from "./AboutUs";
import UsefulLinks from "./UsefulLinks";
import SocialMedia from "./SocialMedia";

// styles
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3c7",
    display: "flex",
    flexDirection: "column",
    padding: "2.5rem",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  left: { height: "15rem", overflow: "hidden" },
  right: { height: "15rem", flexGrow: 1 },
  divider: {
    backgroundColor: "transparent",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "whitesmoke",
      margin: "0 2.5rem"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <section className={classes.left}>
        <RegForNews />
        <AboutUs />
      </section>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <section className={classes.right}>
        <UsefulLinks />
        <SocialMedia />
      </section>
    </footer>
  );
}
