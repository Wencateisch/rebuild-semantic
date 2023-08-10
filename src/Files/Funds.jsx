import React from 'react'
import { Button, Container, Grid, GridColumn, Header, Image } from 'semantic-ui-react'
import '../App.css'
import fun from '../Images/funds.jpg'

const Funds = () => {
  return (
    <Container fluid className='fund'>
        <h3>How to start a Fundraiser</h3>
        <Grid stackable>
            <GridColumn width={8} className='startfund'>
                <Image src={fun} alt='logo'/>
                <Button >Start a Fundraiser</Button>
            </GridColumn>
            <GridColumn width={8} className='custom-counter'>
                
                    <li>
                        <Header>Discover a charity or cause</Header>
                        <Header.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt possimus officia iure reiciendis quisquam numquam aliquam rem rerum aperiam quaerat.</Header.Content></li>
                    <li>
                        <Header>Learn more about the charity</Header>
                        <Header.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt possimus officia iure reiciendis quisquam numquam aliquam rem rerum aperiam quaerat.</Header.Content></li>
                    <li>
                        <Header>Decide the amount to donate</Header>
                        <Header.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt possimus officia iure reiciendis quisquam numquam aliquam rem rerum aperiam quaerat.</Header.Content></li>
                    <li>
                        <Header>Donate the amount using App</Header>
                        <Header.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt possimus officia iure reiciendis quisquam numquam aliquam rem rerum aperiam quaerat.</Header.Content></li>
                    <li>
                        <Header>Track your donation through the App</Header>
                        <Header.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt possimus officia iure reiciendis quisquam numquam aliquam rem rerum aperiam quaerat.</Header.Content></li>
                
            </GridColumn>
        </Grid>
    </Container>
  )
}

export default Funds