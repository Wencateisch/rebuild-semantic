import React from "react";
import { Container } from "semantic-ui-react";
import "../App.css";

const Help = () => {
  const HandleClick = () => {
    var pText = document.getElementsByTagName("p")[0];
    if (pText.style.display === "block") {
      pText.style.display = "none";
    } else {
      pText.style.display = "block";
    }
  };
  return (
    <Container className="help" fluid>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <span onClick={HandleClick}>X</span>
      </p>
    </Container>
  );
};

export default Help;
