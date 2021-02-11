import React from "react";
import { Button, InputBase, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    maxWidth: "640px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

export default function RegForNews() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Enter Your Email for Subscribe!"
        inputProps={{ "aria-label": "search google maps" }}
      />

      <Button variant="contained" size="small" color="primary">
        Subscribe!
      </Button>
    </Paper>
  );
}
