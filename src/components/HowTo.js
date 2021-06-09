import React from "react"
import styled from "styled-components"
import { FaSearch, FaComments, FaBookReader } from "react-icons/fa"

const HowTo = () => {
  return (
    <HowToSection id="howto">
      <Container>
        <h2>Schmökern in fremden Regalen leicht gemacht</h2>
        <p>
          Finde kostenlos Bücher in Deiner Umgebung oder teile Wissen und
          Erfahrungen mit zukünftigen Freunden
        </p>
      </Container>
      <GridContainer>
        <GridItem>
          <IconContainer>
            <FaSearch />
          </IconContainer>
          <h3>Finde Dein neues Lieblingsbuch</h3>
        </GridItem>
        <GridItem>
          <IconContainer>
            <FaComments />
          </IconContainer>
          <h3>Verabrede Dich mit dem Besitzer</h3>
        </GridItem>
        <GridItem>
          <IconContainer>
            <FaBookReader />
          </IconContainer>
          <h3>Mache es Dir gemütlich!</h3>
        </GridItem>
      </GridContainer>
    </HowToSection>
  )
}

const HowToSection = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const Container = styled.div`
  width: 50vw;
  max-width: var(--mx-wdth);
  text-align: center;
  position: relative;
  top: 5rem;

  h2 {
    color: var(--brnd-clr);
  }
`

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin: 2rem 0;
`

const GridItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
`

const IconContainer = styled.span`
  display: flex;
  align-self: center;
  font-size: 4rem;
  margin: 2rem;
  border: 0;
  background: transparent;
  color: var(--brnd-clr);
  transition: var(--trnstn);

  &:hover {
    transform: scale(1.2);
  }
`

export default HowTo
