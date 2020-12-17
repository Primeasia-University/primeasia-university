import React, { Fragment } from "react"
import { Container } from "@material-ui/core"

import logo from "../images/logo.gif"
import classes from "./Header.module.css"
import Menubar from "./menubar"

function Header() {
  return (
    <Fragment>
      <div className={classes.header}>
        <Container fluid className={classes.container}>
          <img src={logo} alt="Primeasia University Logo" />
        </Container>
      </div>
      <Menubar />
    </Fragment>
  )
}

export default Header
