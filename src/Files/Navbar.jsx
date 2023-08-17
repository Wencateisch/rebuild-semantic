import React, { useState, useRef } from 'react'
import { Button, Icon, Image, Menu, Dropdown } from 'semantic-ui-react'
import '../App.css'
import { jsPDF } from "jspdf";
import Im from'../Images/Logo3.jpg'
import html2canvas from 'html2canvas';


const Navbar = () => {
    const [state , setState] = useState({ activeItem: 'home' });
    const handleItemClick = (e, { name }) => setState({ activeItem: name })
    const { activeItem } = state;

    const options = [
      {
        key: 'user',
      },
      { key: 'profile', text: 'Your Profile' },
      { key: 'settings', text: 'Settings' },
      { key: 'sign-out', text: 'Sign Out' },
    ]
    const HandleCalculator = () => {
      window.open('Calculator:///')
    }
    const HandleDonation = () => {
      window.open('https://agaram.in/donate','_blank');
    }
    const HandleContact = () => {
      window.open('https://agaram.in/history','_blank');
    }
    const HandleStart = () => {
      window.open('https://agaram.in','_blank');
    }
    const trigger = (
      <span>
        <Icon name='user' />
      </span>
    )
    const pdfRef = useRef();
    <div ref={pdfRef}></div>
    const downloadPDF = () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image / png');
          const pdf = new jsPDF ('p', 'mm', 'a4', true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height
          const ratio = Math.min(pdfWidth / imgWidth , pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth*ratio)/2;
          const imgY = 30;
          pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
          pdf.save('invoice.pdf');
  
      })
  }
  return (

          <Menu secondary className='menu' stackable fitted> 
            <Menu.Item>
              <Image src={Im} alt='logo'/>
            </Menu.Item>
            <Menu.Item
              name='Make a Donation'
              active={activeItem === 'Make a Donation'}
              onClick={HandleDonation}
            />
            <Menu.Item
              name='Calculate Zakat'
              active={activeItem === 'Calculate Zakat'}
              onClick={HandleCalculator}
            />
            <Menu.Item
              name='Start a Fundraiser'
              active={activeItem === 'Start a Fundraiser'}
              onClick={HandleStart}
            />
            <Menu.Item
              name='About Us'
              active={activeItem === 'About Us'}
              onClick={HandleContact}
            />
            
              <Menu.Item className='download' name='download'
              active={activeItem === 'download'}
             >
                <Button basic   onClick={downloadPDF}>Download App</Button>
              </Menu.Item>
              <Menu.Item  name='search'
              active={activeItem === 'search'}
              onClick={handleItemClick}>
                <Icon className='Search' name='search'/>
              </Menu.Item>
              <Menu.Item  name='user'
              // active={activeItem === 'user'}
              onClick={handleItemClick}>
                {/* <Icon className='user' name='user' /> */}
                <Dropdown trigger={trigger} options={options} />
              </Menu.Item>
          </Menu>
          
        )

}

export default Navbar