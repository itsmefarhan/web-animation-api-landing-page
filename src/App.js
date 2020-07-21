import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
}

export default App;
