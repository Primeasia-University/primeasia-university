import React from 'react'
import Header from './header';
import Footer from './footer';

import './layout.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = (props) => {
  return (
    <>
      <Header/>
      { props.children }
      <Footer/>
    </>
  )
}

export default Layout
