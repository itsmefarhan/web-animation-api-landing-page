import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";
import BrainImg from "../images/brain.svg";
import MainImg from "../images/main.svg";

const Main = () => {
  const { timing } = slideInDown;
  const { ref } = useWebAnimations({
    keyframes: {
      transform: "translateY(70px)",
    },
    timing: {
      ...timing,
      delay: 500,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <Typography variant="h1" className="textColor">
          CORTEX
        </Typography>
        <Typography variant="h2" className="textColor">
          COPYWRITER
        </Typography>
        <Typography
          variant="h5"
          className="textColor"
          style={{ marginTop: "30px" }}
        >
          Enhance your communications with psychology-based copywriting and UX
          writing
        </Typography>

        <Button
          style={{
            color: "white",
            background: "#159cb0",
            borderRadius: "40px",
            padding: "15px",
            marginTop: "40px",
            fontSize: "16px",
            textTransform: "initial",
          }}
        >
          Send a message
        </Button>
      </Grid>
      <Grid item sm={6} xs={12}>
        <img
          src={BrainImg}
          className="target"
          style={{ marginTop: "-50px" }}
          ref={ref}
          alt=""
        />
        <img src={MainImg} style={{ marginTop: "-440px" }} alt="" />
      </Grid>
    </Grid>
  );
};

export default Main;
