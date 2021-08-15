import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ReturnTo from "../components/ReturnTo"
import DataSecurity from "../components/DataSecurity"

const Security = () => {
  return (
    <Layout>
      <Banner title="Datenschutz" />
      <ReturnTo title="zurück" />
      <DataSecurity />
    </Layout>
  )
}

export default Security
