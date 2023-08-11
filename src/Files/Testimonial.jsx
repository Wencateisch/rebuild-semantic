import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Container, Header, Grid, GridColumn, Card, Icon } from 'semantic-ui-react'
import '../App.css'

const Testimonial = () => {
  const Extra = (<>
  <Grid stackable>
  <li><b>Shradha Kapoor</b></li>
  </Grid>
  </>)
  const Meta = (
    <blockquote></blockquote>
  )

  return (
    <Container className='Cardd'>
        <Header className='testi'>Testimonials<Icon name='long arrow alternate left'></Icon><Icon name='long arrow alternate right'></Icon></Header>
        <Carousel showArrows={true} showIndicators={false}>
          <div className='Div'>
            <Grid stackable>
              <GridColumn width={5}>
                <Card className='Single' 
                meta={Meta}
                description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                 extra={Extra}/>
              </GridColumn>
              <GridColumn width={5}>
                <Card className='Single'
                  meta={Meta}
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
              </GridColumn>
              <GridColumn width={5}>
                <Card className='Single'
                  meta={Meta}
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
              </GridColumn>
            </Grid>
          </div>
          <div className='Div'>
            <Grid stackable>
              <GridColumn width={5}>
                  <Card className='Single'
                  meta={Meta}
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card className='Single'
                    meta={Meta}
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card className='Single'
                    meta={Meta}
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
              </Grid>
          </div>
          <div className='Div'>
            <Grid stackable>
              <GridColumn width={5}>
                  <Card className='Single'
                  meta={Meta}
                  description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                   extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card className='Single'
                    meta={Meta}
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
                <GridColumn width={5}>
                  <Card className='Single'
                    meta={Meta}
                    description='Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing Elliot is a sound engineer living in Nashville who enjoys playing'
                     extra={Extra}/>
                </GridColumn>
              </Grid>
          </div>
        </Carousel>
    </Container>
  )
}

export default Testimonial