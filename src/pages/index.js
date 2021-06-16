import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HowTo from "../components/HowTo"
import About from "../components/About"
import Benefits from "../components/Benefits"
import CallToAction from "../components/CallToAction"
import Seo from "../components/Seo"

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <HowTo />
      <Benefits />
      <About />
      <CallToAction />
    </Layout>
  )
}

export default Home
