import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HowTo from "../components/HowTo"
import About from "../components/About"
import Benefits from "../components/Benefits"
import Wavy from "../components/Wavy"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HowTo />
      <Wavy />
      <Benefits />
      <About />
    </Layout>
  )
}

export default Home
