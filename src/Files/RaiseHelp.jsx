import React from 'react'
import '../App.css'
import { Button, Container, Header, Icon } from 'semantic-ui-react'

const RaiseHelp = () => {
  return (
    <Container fluid className='need'>
            <Header as='h3'>Need help to raise funds ? </Header>
            <Button><a href="mailto:demo@demo.com"><Icon name='phone volume'/>Request a call</a></Button>
    </Container>
  )
}

export default RaiseHelp