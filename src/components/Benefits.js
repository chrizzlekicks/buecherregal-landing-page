import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Benefits = () => {
  return (
    <BenefitSection id="benefits">
      <GridContainer>
        <Article>
          <Title>Bereichere andere um Dich herum. Karma is on your side.</Title>
          <BenefitContainer>
            <GridItem>
              <CircledNumber>1</CircledNumber>
              <BenefitText>Schnell und einfach Bücher hochladen</BenefitText>
            </GridItem>
            <GridItem>
              <CircledNumber>2</CircledNumber>
              <BenefitText>Neugierde in Deiner Umgebung streuen</BenefitText>
            </GridItem>
            <GridItem>
              <CircledNumber>3</CircledNumber>
              <BenefitText>
                Neue Leute mit gleichen Interessen treffen
              </BenefitText>
            </GridItem>
          </BenefitContainer>
        </Article>
        <StaticImage
          src="../assets/images/undraw_Reading_re_29f8.svg"
          alt="Reading"
          placeholder="tracedSVG"
          as="article"
        />
      </GridContainer>
    </BenefitSection>
  )
}

const BenefitSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(to bottom, var(--brnd-clr), var(--bckgrnd-clr));
`

const GridContainer = styled.div`
  width: 100%;
  max-width: var(--mx-wdth);
  display: grid;
  grid-template-columns: repeat(2, 50%);
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; ;
`

const Title = styled.h2`
  text-align: left;
  padding: 2rem 3rem;
  color: var(--bckgrnd-clr);
`

const BenefitContainer = styled.aside`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
`

const GridItem = styled.div`
  display: flex;
  align-items: center;
`

const CircledNumber = styled.span`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border: 2px solid var(--bckgrnd-clr);
  border-radius: 50%;
  margin-right: 2rem;
  color: var(--bckgrnd-clr);
`

const BenefitText = styled.h4`
  text-align: left;
  margin: 0;
  color: var(--bckgrnd-clr);
`

export default Benefits
