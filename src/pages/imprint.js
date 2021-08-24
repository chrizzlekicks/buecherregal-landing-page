import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ImprintText from "../components/ImprintText"
import ReturnTo from "../components/ReturnTo"

const Imprint = () => {
  return (
    <Layout>
      <Banner title="Impressum" />
      <ReturnTo title="zurück" />
      <Container>
        <ImprintText />
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  margin: auto 0.5rem;

  @media (min-width: 800px) {
    margin: auto 1rem;
  }
`

export default Imprint
