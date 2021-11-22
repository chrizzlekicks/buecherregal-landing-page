import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ReturnTo from "../components/ReturnTo"
import FaqTab from "../components/FaqTab"
import { faqDB } from "../utils/faqDB"

const Faq = () => {
  return (
    <>
      <Layout>
        <Banner title="FAQ" />
        <ReturnTo title="zurück" />
        <Container>
          {faqDB.map(article => {
            return <FaqTab key={article.id} {...article} />
          })}
        </Container>
      </Layout>
    </>
  )
}

const Container = styled.section`
  margin: auto 0.5rem;

  @media (min-width: 800px) {
    margin: auto 1rem;
  }
`

export default Faq
