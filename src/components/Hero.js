import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FaAngleDoubleDown } from "react-icons/fa"
import { links } from "../utils/linksDB"

const Hero = () => {
  return (
    <>
      <HeroSection id="home">
        <StaticImage
          src="../assets/images/hero.jpeg"
          alt="hero"
          layout="constrained"
          placeholder="blurred"
          style={{ height: "100%" }}
          as="div"
        />
        <HeroContainer>
          <HeroText>
            <h1>Willkommen zum Bücherregal</h1>
            <h3>
              Finde neue spannende Bücher von Leuten aus deiner Nachbarschaft
            </h3>
          </HeroText>
          <BounceBtn>
            <a
              style={{ color: "var(--bckgrnd-clr)" }}
              href="http://buecherregal.herokuapp.com"
            >
              Jetzt registrieren
            </a>
          </BounceBtn>
          <StyledLink to={links[0].url}>
            <ScrollDownIcon>
              <FaAngleDoubleDown />
            </ScrollDownIcon>
          </StyledLink>
        </HeroContainer>
      </HeroSection>
    </>
  )
}

const HeroSection = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  display: grid;
  place-items: center;
`

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.div`
  text-align: center;
  color: #fff;
`

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const BounceBtn = styled.button`
  background: var(--brnd-clr);
  border: 2px solid var(--brnd-clr);
  border-radius: var(--brdr-rds);
  color: var(--bckgrnd-clr);
  cursor: pointer;
  margin: 0.25rem 0;
  padding: 0.25rem 0.5rem;
  transition: var(--trnstn);
  animation: ${bounce} 2s ease-in-out infinite;

  &:hover {
    background: var(--fnt-clr);
    border: 2px solid var(--fnt-clr);
  }

  @media (min-width: 800px) {
    margin: 0.5rem 0;
    padding: 0.5rem 1.25rem;
  }
`

const jump = keyframes`
0% {
  transform: translateY(0);
}

10% {
  transform: translateY(20px);
}

20% {
  transform: translateY(0);
}

30% {
  transform: translateY(20px);
}

40% {
  transform: translateY(0);
}
`

const ScrollDownIcon = styled.span`
  font-size: 3rem;
  padding: 1rem;
  border: 0;
  background: transparent;
  color: var(--bckgrnd-clr);
  transition: var(--trnstn);
  position: absolute;
  bottom: 1rem;
  cursor: pointer;
  animation: ${jump} 2s ease-in infinite;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Hero
