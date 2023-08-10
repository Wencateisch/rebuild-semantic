import React from 'react'
import '../App.css'
import { Button, Container, Header, Icon } from 'semantic-ui-react'

const RaiseHelp = () => {
  return (
    <Container fluid className='need'>
            <Header as='h3'>Need help to raise funds ? </Header>
            <Button><Icon name='phone volume'></Icon>Request a call</Button>
    </Container>
  )
}

export default RaiseHelp