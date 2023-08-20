/* eslint-disable react/jsx-no-target-blank */
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
                <Button><a href='https://agaram.in' target='_blank'>Start a Fundraiser</a></Button><br/>
                <a href='https://facebook.com' target='_blank'><Icon name='facebook circular'></Icon></a>
                <a href='https://youtube.com' target='_blank'><Icon name='youtube circular'></Icon></a>
                <a href='https://twitter.com' target='_blank'><Icon name='twitter circular'></Icon></a>
                <a href='https://linkedin.com' target='_blank'><Icon name='linkedin circular'></Icon></a>
                <a href='https://instagram.com' target='_blank'><Icon name='instagram circular'></Icon></a>
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