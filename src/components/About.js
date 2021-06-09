import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>Unsere Vision</Title>
        <p>
          Das Projekt "Bücherregal" ist im Rahmen von{" "}
          <a href="https://techlabs.org">TechLabs</a> entstanden. Wir wollen
          einen barrierefreien Zugang zu Unterhaltung und Wissen schaffen und
          einen regen Austausch unter den Menschen wieder befeuern. Von daher
          arbeiten wir emsig an einem digitalen und dezentralen Bücherregal.
        </p>
      </Container>
      <TeamArea>
        <TeamMember>
          <StaticImage
            src="../assets/images/lena.png"
            alt="Lena"
            placeholder="blurred"
            className="team-img"
            width={300}
            height={300}
            as="span"
          />
          <MemberInfo>
            <h4>Lena</h4>
            <p>Product | UX</p>
          </MemberInfo>
        </TeamMember>
        <TeamMember>
          <StaticImage
            src="../assets/images/max.jpeg"
            alt="Max"
            placeholder="blurred"
            className="team-img"
            width={300}
            height={300}
            as="span"
          />
          <MemberInfo>
            <h4>Max</h4>
            <p>Product | Marketing</p>
          </MemberInfo>
        </TeamMember>
        <TeamMember>
          <StaticImage
            src="../assets/images/chrizzle.jpeg"
            alt="Chris"
            placeholder="blurred"
            className="team-img"
            width={300}
            height={300}
            as="span"
          />
          <MemberInfo>
            <h4>Chris</h4>
            <p>Tech | Frontend</p>
          </MemberInfo>
        </TeamMember>
        <TeamMember>
          <StaticImage
            src="../assets/images/mikrofon_johannes.png"
            alt="Johannes"
            placeholder="blurred"
            className="team-img"
            width={300}
            height={300}
            as="span"
          />
          <MemberInfo>
            <h4>Johannes</h4>
            <p>Tech | Backend</p>
          </MemberInfo>
        </TeamMember>
      </TeamArea>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`

const Container = styled.div`
  width: 75vw;
  max-width: var(--mx-wdth);
  text-align: center;
  position: relative;
  top: 4rem;
`

const Title = styled.h2`
  color: var(--brnd-clr);
`

const TeamArea = styled.div`
  position: relative;
  top: 2rem;
  max-width: var(--mx-wdth);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

const TeamMember = styled.article`
  display: flex;
  flex-direction: column;

  .team-img {
    border-radius: 50%;
  }
`

const MemberInfo = styled.header`
  text-align: center;
  padding: 2rem;

  h4 {
    color: var(--brnd-clr);
    margin-bottom: 0.5rem;
  }
`

export default About
