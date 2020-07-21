import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import ContentWritingImg from "../images/contentwriting.svg";

const ContentWriting = () => {
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
    "Headlines & Taglines",
    "Content Strategy",
    "Blogs & Articles",
    "Social Media Content",
    "Video Scripts",
    "eDMs & Newsletters",
    "Case Studies",
    "Whitepapers",
  ];

  return (
    <Grid container style={{ marginTop: "80px" }}>
      <Grid item sm={5} xs={12}>
        <Typography variant="h2" className="textColor">
          Content Writing
        </Typography>
        <Typography
          variant="body1"
          className="textColor"
          style={{ marginTop: "30px" }}
        >
          Give your business a competitive edge with powerful content that can
          be targeted to any segment of your audience. No matter how large or
          complex your project, my custom-built solutions including articles,
          eDMs, and case studies will help you implement a plan that maximizes
          your business’s online exposure.
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
      <Grid item sm={1} />
      <Grid item sm={6} xs={12}>
        <img
          src={ContentWritingImg}
          className="target"
          ref={ref}
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default ContentWriting;
