import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { carSlice, selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
function Header() {
  const [bugerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Conatiner>
      <a>
        <img src="/images/logo.svg" alt="tesla" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>
        ))}
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model x</a>

        <a href="#">Model y</a>
      </Menu>
      <RMenu>
        <a href="#">shop</a>
        <a href="#">tesla account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RMenu>
      <HumbergerMenu show={bugerStatus}>
        <CloseWraper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWraper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </HumbergerMenu>
    </Conatiner>
  );
}

export default Header;
const Conatiner = styled.div`
  z-index: 10;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const HumbergerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform ease-in 0.8s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)``;
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
