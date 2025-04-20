import Container from "@material-ui/core/Container";

import React from "react";

import { Footer, Header } from ".";

export default function Layout(props) {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}
