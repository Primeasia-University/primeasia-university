import React from "react"

import Layout from "../layout/layout"
import Hero from "../components/Home/Hero"
import Event from "../components/Home/Event"
import Mesg_fr_our_head from "../components/Home/mesg_fr_our_head"
import Why_cse from "../components/Home/Why_cse"
import News from "../components/Home/News"

const IndexPage = () => (
  <Layout>
    <Hero />
    <News/>
    <Why_cse />
    <Mesg_fr_our_head />
    <Event />
    
  </Layout>
)

export default IndexPage

// font-family: 'Noto Sans JP', sans-serif;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Bree Serif', serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Roboto Slab', serif;

