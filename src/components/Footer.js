import React from "react";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "purple",
        color: "white",
        height: "50px",
        alignItems: "center",
      }}
    >
      <Typography style={{ textAlign: "center", flex: 1 }}>
        Powered by Farhan Farooq © 2020
      </Typography>
    </div>
  );
};

export default Footer;
