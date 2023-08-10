import React from 'react'
import { Button, Container, Grid, GridColumn, Image, Icon, } from 'semantic-ui-react'
import '../App.css'
import Box from '../Images/FundSvg/box-minimalistic-svgrepo-com.svg'

const Footer = () => {
  return (
    <Container className='MainFooter'>
        <Grid className='foot' stackable>
            <GridColumn width={4} className='just'>
                
                    <Image src={Box} alt='logo'></Image>
                    <p>CREED</p>
                
            </GridColumn>
            <GridColumn width={2}>
                <li><b>Get to know us</b></li>
                <li>Career</li>
                <li>Blog</li>
                <li>About us</li>
                <li>Legal & fund</li>
            </GridColumn>
            <GridColumn width={2}>
            <li><b>Get to know us</b></li>
                <li>Career</li>
                <li>Blog</li>
                <li>About us</li>
                <li>Legal & fund</li>
            </GridColumn>
            <GridColumn width={2}>
            <li><b>Get to know us</b></li>
                <li>Career</li>
                <li>Blog</li>
                <li>About us</li>
                <li>Legal & fund</li>
            </GridColumn>
            <GridColumn width={2}>
            <li><b>Get to know us</b></li>
                <li>Career</li>
                <li>Blog</li>
                <li>About us</li>
                <li>Legal & fund</li>
            </GridColumn>
            <GridColumn width={3} className='social'>
                <Button>Start a Fundraiser</Button><br/>
                <Icon name='facebook circular'></Icon>
                <Icon name='youtube circular'></Icon>
                <Icon name='twitter circular'></Icon>
                <Icon name='linkedin circular'></Icon>
                <Icon name='instagram circular'></Icon>
            </GridColumn>
        </Grid>
            <hr></hr>
            <Container className='foots'>
                <p><Icon name='copyright' />2021 CREED. All rights reserved. &nbsp;<span>Digital partner that worldwide</span></p>
                    <span className='Sp'>
                        <li>Apps</li>
                        <li>Support</li>
                        <li>Guild</li>
                        <li>Privacy Policy</li>
                        <li>Site Map</li>
                    </span>
            </Container>
    </Container>
  )
}

export default Footer