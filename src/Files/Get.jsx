/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../App.css";
import Fund from "../Images/images.jpeg";
import Fund2 from "../Images/images.png";

import {
  Image,
  Container,
  Grid,
  GridColumn,
  Header,
  Icon,
} from "semantic-ui-react";

const Get = () => {
  return (
    <Container className="getMob">
      <Grid stackable centered doubling>
        <GridColumn width={4} className="Mobile">
          <Image centered src={Fund} alt="logo" />
        </GridColumn>
        <GridColumn width={6} className="Links">
          <Header>Download the CREED Giving App</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            officiis, qui Nobis molestias voluptate fugiat suscipit, velit
            voluptatum! Eveniet, consequuntur illum?
          </p>
          <button className="getit">
            <a href="https://www.apple.com/app-store" target="_blank">
              <Icon name="apple"></Icon>Download it on <br /> <b>App Store</b>
            </a>
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="getit play">
            <a href="https://play.google.com" target="_blank">
              <Icon name="google play"></Icon>Get it on{" "}
              <b>
                Google <br />
                Play
              </b>
            </a>
          </button>
        </GridColumn>
        <GridColumn width={4} className="scan">
          <Image centered src={Fund2} alt="logo" />
        </GridColumn>
      </Grid>
    </Container>
  );
};

export default Get;
