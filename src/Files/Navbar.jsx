import React, { useState } from "react";
import {
  Button,
  Icon,
  Image,
  Menu,
  Dropdown,
  DropdownItem,
} from "semantic-ui-react";
import "../App.css";
import Im from "../Images/Logo3.jpg";

const Navbar = () => {
  const [state, setState] = useState({ activeItem: "home" });
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;

  const options = [
    {
      key: "user",
    },
    { key: "profile", text: "Your Profile" },
    { key: "settings", text: "Settings" },
    { key: "sign-out", text: "Sign Out" },
  ];
  const HandleCalculator = () => {
    window.open("Calculator:///");
  };
  const HandleDonation = () => {
    window.open("https://agaram.in/donate", "_blank");
  };
  const HandleContact = () => {
    window.open("https://agaram.in/history", "_blank");
  };
  const HandleStart = () => {
    window.open("https://agaram.in", "_blank");
  };
  const HandleSearch = () => {
    window.open("https://google.com", "_blank");
  };
  const HandleDownload = () => {
    window.open("https://play.google.com", "_blank");
  };

  const trigger = (
    <span>
      <Icon name="user" />
    </span>
  );
  return (
    <>
      <Menu attached="top" className="mobile only Bar">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Menu.Item
                name="Make a Donation"
                active={activeItem === "Make a Donation"}
                onClick={HandleDonation}
              />
            </Dropdown.Item>
            <Dropdown.Item>
              <Menu.Item
                name="Calculate Zakat"
                active={activeItem === "Calculate Zakat"}
                onClick={HandleCalculator}
              />
            </Dropdown.Item>
            <Dropdown.Item>
              <Menu.Item
                name="Start a Fundraiser"
                active={activeItem === "Start a Fundraiser"}
                onClick={HandleStart}
              />
            </Dropdown.Item>
            <Dropdown.Item>
              <Menu.Item
                name="About Us"
                active={activeItem === "About Us"}
                onClick={HandleContact}
              />
            </Dropdown.Item>
            <Dropdown.Item>
              <Menu.Item
                className="download"
                name="download"
                active={activeItem === "download"}
              >
                <Button basic onClick={HandleDownload}>
                  Download App
                </Button>
              </Menu.Item>
            </Dropdown.Item>
            <DropdownItem>
              <Menu.Item
                name="search"
                active={activeItem === "search"}
                onClick={HandleSearch}
              >
                <Icon className="Search" name="search" />
              </Menu.Item>
            </DropdownItem>
            <DropdownItem>
              <Menu.Item name="user" onClick={handleItemClick}>
                <Dropdown trigger={trigger} options={options} />
              </Menu.Item>
            </DropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      <Menu secondary className="menu mobile hidden" stackable>
        <Menu.Item>
          <Image src={Im} alt="logo" />
        </Menu.Item>
        <Menu.Item
          name="Make a Donation"
          active={activeItem === "Make a Donation"}
          onClick={HandleDonation}
        />
        <Menu.Item
          name="Calculate Zakat"
          active={activeItem === "Calculate Zakat"}
          onClick={HandleCalculator}
        />
        <Menu.Item
          name="Start a Fundraiser"
          active={activeItem === "Start a Fundraiser"}
          onClick={HandleStart}
        />
        <Menu.Item
          name="About Us"
          active={activeItem === "About Us"}
          onClick={HandleContact}
        />

        <Menu.Item
          className="download"
          name="download"
          active={activeItem === "download"}
        >
          <Button basic onClick={HandleDownload} data-testid="download-app">
            Download App
          </Button>
        </Menu.Item>
        <Menu.Item
          name="search"
          active={activeItem === "search"}
          onClick={HandleSearch}
        >
          <Icon className="Search" name="search" />
        </Menu.Item>
        <Menu.Item name="user" onClick={handleItemClick}>
          <Dropdown trigger={trigger} options={options} />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
