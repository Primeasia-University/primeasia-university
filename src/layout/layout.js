import React from 'react'
import Header from './header';
// import Footer from './footer';

import './layout.module.css'

const Layout = (props) => {
  return (
    <>
      <Header/>
      { props.children }
      {/* <Footer/> */}
    </>
  )
}

export default Layout
