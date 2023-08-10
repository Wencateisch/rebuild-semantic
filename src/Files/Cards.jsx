import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Container, Image, Header, Grid, GridColumn, Card, Icon } from 'semantic-ui-react'
import IMG from '../Images/best-fundraising-websites.jpeg'
import '../App.css'

const Cards = () => {
  const Extra = (<>
  <Grid>
  <li><b>$ 3,47,584.635</b></li>
  <li><Icon name='puzzle'></Icon>Limited days</li>
    <li><Icon name='time'></Icon>24 days left</li>

  </Grid>
   
  </>)

  return (
    <Container className='Cardd'>
        <Header>Your donations make a difference</Header>
        <p className='discover'>Discover more Fundraisers</p>

        <Carousel showArrows={true} showIndicators={false} >
          <div className='Div'>
            <Grid stakable>
              <GridColumn width={5}>
                <Card
                image={IMG}
                header='Need Emergency Medical'
                description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                 extra={Extra}/>
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  image={IMG}
                  header='Need Emergency Medical'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
              </GridColumn>
              <GridColumn width={5}>
                <Card
                  image={IMG}
                  header='Need Emergency Medical'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
              </GridColumn>
            </Grid>
          </div>
          <div className='Div'>
            <Grid stakable>
              <GridColumn width={5}>
                  <Card
                  image={IMG}
                  header='Need Emergency Medical'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card
                    image={IMG}
                    header='Need Emergency Medical'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card
                    image={IMG}
                    header='Need Emergency Medical'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
              </Grid>
          </div>
          <div className='Div'>
            <Grid stakable>
              <GridColumn width={5}>
                  <Card
                  image={IMG}
                  header='Need Emergency Medical'
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card
                    image={IMG}
                    header='Need Emergency Medical'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card
                    image={IMG}
                    header='Need Emergency Medical'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
              </Grid>
          </div>
        </Carousel>
    </Container>
  )
}

export default Cards