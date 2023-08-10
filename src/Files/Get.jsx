import React from 'react'
import '../App.css'
import Fund from '../Images/images.jpeg'
import Fund2 from '../Images/images.png'

import { Image, Container, Grid, GridColumn, Header, Icon } from 'semantic-ui-react'

const Get = () => {
  return (
    <Container>
        <Grid stackable>
            <GridColumn width={6} className='mobile'>
                <Image src={Fund} alt='logo'/>
            </GridColumn>
            <GridColumn width={6}>
                <Header>Download the CREED Giving App</Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officiis, qui Nobis molestias voluptate fugiat suscipit, velit voluptatum! Eveniet, consequuntur illum?</p>
                <button className='getit'><Icon name='apple'></Icon>Download it on <br/> <b>App Store</b></button> &nbsp;&nbsp;&nbsp;
                <button className='getit play'><Icon name='google play'></Icon>Get it on <b>Google <br/>Play</b></button>
            </GridColumn>
            <GridColumn width={4} className='scan'>
                <Image src={Fund2} alt='logo' />
            </GridColumn>
        </Grid>
    </Container>
  )
}

export default Get