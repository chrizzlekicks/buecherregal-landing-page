import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ImprintText from "../components/ImprintText"
import ReturnTo from "../components/ReturnTo"

const Imprint = () => {
  return (
    <Layout>
      <Banner title="Impressum" />
      <ReturnTo title="zurück" />
      <ImprintText />
    </Layout>
  )
}

export default Imprint
