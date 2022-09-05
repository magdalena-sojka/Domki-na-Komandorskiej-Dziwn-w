//import styles from './Burger.module.scss';
import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav/RightNav.js';

const BurgerStyle = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 15px;
  right: 20px;

  div {
    width: 20px;
    height: 3px;
    background: #227093;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg' : 'rotate(0)'}
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'}
    opacity: ${({ open }) => open ? 0 : 1}
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg' : 'rotate(0)'}
  }
`;

const Burger = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerStyle>
      <RightNav open={open}/>
    </>  
  );
}

export default Burger;