import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles(() => ({
  main: {
    padding: "3rem 1rem"
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
