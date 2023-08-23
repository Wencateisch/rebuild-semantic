/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
  Container,
  Header,
  Grid,
  GridColumn,
  Card,
  Icon,
} from "semantic-ui-react";
import IMG from "../Images/best-fundraising-websites.jpeg";
import "../App.css";
import Flickity from "react-flickity-component";
import "../flickity.css";

const Cards = () => {
  const Extra = (
    <>
      <Grid stackable>
        <li>
          <b>$ 3,47,584.635</b>
        </li>
        <li>
          <Icon name="puzzle"></Icon>Limited days
        </li>
        <li>
          <Icon name="time"></Icon>24 days left
        </li>
      </Grid>
    </>
  );

  return (
    <>
      <Container className="Cardd">
        <Header>Your donations make a difference</Header>
        <p className="discover">
          <a href="https://agaram.in" target="_blank">
            Discover more Fundraisers
          </a>
        </p>
        <Flickity>
          <div className="Div">
            <Grid stackable>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
            </Grid>
          </div>
          <div className="Div">
            <Grid stackable>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
            </Grid>
          </div>
          <div className="Div">
            <Grid stackable>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  centered
                  image={IMG}
                  header="Need Emergency Medical"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing"
                  extra={Extra}
                />
              </GridColumn>
            </Grid>
          </div>
        </Flickity>
      </Container>
    </>
  );
};

export default Cards;
