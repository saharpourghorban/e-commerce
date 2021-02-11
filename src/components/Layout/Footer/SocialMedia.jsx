import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  social: {
    padding: "2rem 0 0.5rem 0",
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
    justifyContent: "center"
  },
  wrapper: {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center"
  },
  icon: {
    cursor: "pointer"
  }
}));

export default function SocialMedia() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid className={classes.social}>
        <FacebookIcon fontSize="large" className={classes.icon} />
        <TwitterIcon fontSize="large" className={classes.icon} />
        <GitHubIcon fontSize="large" className={classes.icon} />
        <InstagramIcon fontSize="large" className={classes.icon} />
        <TelegramIcon fontSize="large" className={classes.icon} />
      </Grid>
      Follow Us!
    </div>
  );
}
