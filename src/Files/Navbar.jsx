import React, { useState } from 'react'
import { Button, Icon, Image, Menu } from 'semantic-ui-react'
import '../App.css'
import Im from'../Images/Logo3.jpg'

const Navbar = () => {
    const [state , setState] = useState({ activeItem: 'home' });
    const handleItemClick = (e, { name }) => setState({ activeItem: name })
    const { activeItem } = state
  return (

          <Menu secondary className='menu' stackable> 
            <Menu.Item>
              <Image src={Im} alt='logo'/>
            </Menu.Item>
            <Menu.Item
              name='Make a Donation'
              active={activeItem === 'Make a Donation'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Calculate Zakat'
              active={activeItem === 'Calculate Zakat'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Start a Fundraiser'
              active={activeItem === 'Start a Fundraiser'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='About Us'
              active={activeItem === 'About Us'}
              onClick={handleItemClick}
            />
            
              <Menu.Item className='download' name='download'
              active={activeItem === 'download'}
              onClick={handleItemClick}>
                <Button basic  >Download App</Button>
              </Menu.Item>
              <Menu.Item  name='search'
              active={activeItem === 'search'}
              onClick={handleItemClick}>
                <Icon className='Search' name='search'/>
              </Menu.Item>
              <Menu.Item  name='user'
              active={activeItem === 'user'}
              onClick={handleItemClick}>
                <Icon className='user' name='user' />
              </Menu.Item>
          
          </Menu>
        )

}

export default Navbar