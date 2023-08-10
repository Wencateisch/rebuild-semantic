import React from 'react'
import '../App.css'
import { Container, Grid, GridColumn, Image } from 'semantic-ui-react'
import Svg from '../Images/OIP.jpeg'
import Svg1 from '../Images/FundSvg/bag-dollar-fund-svgrepo-com.svg'
import Svg2 from '../Images/FundSvg/business-fund-income-svgrepo-com.svg'
import Svg3 from '../Images/FundSvg/dollar-fund-loan-svgrepo-com.svg'
import Svg4 from '../Images/FundSvg/donate-charity-donation-coin-fund-svgrepo-com.svg'
import Svg5 from '../Images/FundSvg/european-bank-monetary-fund-central-bank-euro-svgrepo-com.svg'
import Svg6 from '../Images/FundSvg/investment-money-capital-funds-svgrepo-com.svg'


const Giving = () => {
  return (
    <Container className='Give'>
        <h3 className='creedh3'>Why CREED Giving ?</h3>
        <Grid stackable>
            <GridColumn width={6} className='pSvg'>
                <Image src={Svg1} alt='' className='svgs'/><p><b>A better way to donate</b><br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque sunt aut, tempora dolorum quos officia ipsam ipsum esse dolor, excepturi mollitia illum eveniet</p>
                <Image src={Svg2} alt='' className='svgs'/><p><b>CREED Giving is FREE</b><br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque sunt aut, tempora dolorum quos officia ipsam ipsum esse dolor, excepturi mollitia illum eveniet</p>
                <Image src={Svg3} alt='' className='svgs'/><p><b>A holistic Zakat calculator</b><br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque sunt aut, tempora dolorum quos officia ipsam ipsum esse dolor, excepturi mollitia illum eveniet</p>
            </GridColumn>
            <GridColumn width={4} className='collect'>
                <Image src={Svg} alt='logo'/>
            </GridColumn>
            <GridColumn width={6} className='pSvg2'>
            <Image src={Svg4} alt='' className='svgs'/><p><b>Discover a cause you care</b><br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque sunt aut, tempora dolorum quos officia ipsam ipsum esse dolor, excepturi mollitia illum eveniet</p>
                <Image src={Svg5} alt='' className='svgs'/><p><b>Track your donations</b><br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque sunt aut, tempora dolorum quos officia ipsam ipsum esse dolor, excepturi mollitia illum eveniet</p>
                <Image src={Svg6} alt='' className='svgs'/><p><b>A trusted platform</b><br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque sunt aut, tempora dolorum quos officia ipsam ipsum esse dolor, excepturi mollitia illum eveniet</p>
            </GridColumn>
        </Grid>

    </Container>
  )
}

export default Giving