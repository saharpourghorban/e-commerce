import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

// styles
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white"
  }
}));

export default function UsefulLinks() {
  const classes = useStyles();

  return (
    <ul className={classes.link}>
      <li>
        <Link to="#" className={classes.link}>
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className={classes.link}>
          Category
        </Link>
      </li>
      <li>
        <Link to="#" className={classes.link}>
          Jobs
        </Link>
      </li>
      <li>
        <Link to="#" className={classes.link}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="#" className={classes.link}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
