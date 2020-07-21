import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import UXImg from "../images/uiux.svg";

const Content = () => {
  const { keyframes, timing } = pulse;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  const liItems = [
    "Microcopy",
    "Taxonomy & Labeling",
    "Chatbots",
    "User Research",
    "Content Style Guide",
    "User Testing",
    "Design Principles",
    "Prototype",
  ];

  return (
    <Grid container style={{ marginTop: "80px" }}>
      <Grid item sm={6} xs={12}>
        <img
          src={UXImg}
          className="target"          
          ref={ref}
          alt=""
        />
      </Grid>
      <Grid item sm={1} />
      <Grid item sm={5} xs={12}>
        <Typography variant="h2" className="textColor">
          UX Writing
        </Typography>
        <Typography
          variant="body1"
          className="textColor"
          style={{ marginTop: "30px" }}
        >
          I develop clear and useful text in product interfaces to help users
          reach a specific goal, whether that's completing a form or tapping a
          button. This includes every type of content from on-screen help
          systems, user onboarding and in-app messages to push notifications and
          tooltips.
        </Typography>
        <ul className="content">
          {liItems.map((item, i) => (
            <li
              key={i}
              style={{ flexGrow: 1, flexWrap: "wrap", color: "white" }}
            >
              <Typography
                variant="body2"
                className="textColor"
                style={{ marginTop: "10px" }}
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Content;
