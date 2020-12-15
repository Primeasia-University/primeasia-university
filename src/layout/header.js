import React from "react";
import { Container } from '@material-ui/core';

import logo from '../images/logo.gif'
import classes from './Header.module.css';
import Menubar from "./menubar";

const Header = () => (
  <>
    <header className={classes.header}>
      <Container fluid className={classes.container}>
        <img src={logo} alt="" height="100"/>
      </Container>
    </header>
    <nav className={classes.menu}>
      <Container>
        <Menubar/>
      </Container>
    </nav>
  </>
)

export default Header
