import React from "react"
import styled from "styled-components"
import { FaSearch, FaComments, FaBookReader } from "react-icons/fa"
import { AnimationOnScroll } from "react-animation-on-scroll"

const HowTo = () => {
  return (
    <HowToSection id="howto">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <Container>
          <h2>Schmökern in fremden Regalen leicht gemacht</h2>
          <p>
            Finde kostenlos Bücher in Deiner Umgebung und teile Wissen mit
            Leuten aus Deiner Hood!
          </p>
        </Container>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <FlexContainer>
          <FlexItem>
            <IconContainer>
              <FaSearch />
            </IconContainer>
            <h3>Finde Dein neues Lieblingsbuch</h3>
          </FlexItem>
          <FlexItem>
            <IconContainer>
              <FaComments />
            </IconContainer>
            <h3>Leihe es Dir von dem/der Besitzer*in</h3>
          </FlexItem>
          <FlexItem>
            <IconContainer>
              <FaBookReader />
            </IconContainer>
            <h3>Mache es Dir gemütlich!</h3>
          </FlexItem>
        </FlexContainer>
      </AnimationOnScroll>
    </HowToSection>
  )
}

const HowToSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  @media (min-width: 800px) {
    padding-top: 100px;
  }
`

const Container = styled.div`
  max-width: var(--mx-wdth);
  text-align: center;
  position: relative;
  padding: 1rem;

  h2 {
    color: var(--brnd-clr);
  }

  @media (min-width: 800px) {
    width: 50vw;
  }
`

const FlexContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0;
  }
`

const FlexItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  width: 100%;
`

const IconContainer = styled.span`
  display: flex;
  align-self: center;
  font-size: 3rem;
  margin: 1rem;
  border: 0;
  background: transparent;
  color: var(--brnd-clr);
  transition: var(--trnstn);

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 800px) {
    font-size: 4rem;
    margin: 2rem;
  }
`

export default HowTo
