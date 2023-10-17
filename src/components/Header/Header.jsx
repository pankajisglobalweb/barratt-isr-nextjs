"use client"
import React from 'react';
import './Header.module.scss';
import Image from 'next/image';
import Navbarmain from '../NavbarMain/NavbarMain';
import { Container } from 'react-bootstrap';
import Link from 'next/link';


const Header = () => {
  return (
  <>  
  <Navbarmain />
  </>
  );
};

export default Header;
