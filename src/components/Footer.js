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
        Powered by Farhan Farooq © {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

export default Footer;
