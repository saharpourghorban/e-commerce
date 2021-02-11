import React from "react";
import { makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({
  address: {
    color: "white",
    maxWidth: "640px",
    marginTop: "1rem"
  }
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <address className={classes.address}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos
      expedita natus assumenda sunt, hic eligendi quas amet commodi
      exercitationem ipsum consequuntur quam ullam laborum quidem perspiciatis
      quod esse ipsa! Repellendus impedit minus ut facilis, magni sequi
      reiciendis, temporibus ea quis excepturi ducimus aspernatur, beatae odit!
      At molestiae maiores delectus perferendis! Voluptates eveniet provident
      totam ullam corporis fugiat non voluptatibus. Et saepe explicabo laborum
      itaque dolore atque voluptatibus dolorum distinctio, voluptate nemo
      soluta, deleniti temporibus incidunt suscipit eius ipsa dolorem alias
      eaque delectus similique. Ratione sequi repellendus id neque sint.
      Architecto et voluptatem dolore, officia, recusandae mollitia eos
      molestiae beatae eligendi officiis repudiandae voluptatum ea rerum,
      similique obcaecati vitae fugit quam perferendis autem perspiciatis
      deleniti earum consequuntur animi. Deserunt, iste! Debitis rerum dolor
      repellat cumque in, fugit commodi inventore itaque, distinctio totam
      adipisci, corrupti delectus! Dicta, corrupti, commodi esse repellat
      nostrum modi vitae eius perferendis unde impedit obcaecati totam eligendi.
    </address>
  );
}
