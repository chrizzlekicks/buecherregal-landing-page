import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(sort: { fields: name }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
        }
        name
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

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
        {nodes.map((image, index) => {
          const { name } = image
          const pathToImage = getImage(image)
          return (
            <TeamMember key={index}>
              <GatsbyImage
                image={pathToImage}
                alt={name}
                className="team-img"
              />
              <MemberInfo>
                <h4>{name}</h4>
              </MemberInfo>
            </TeamMember>
          )
        })}
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
    text-transform: capitalize;
  }
`

export default About
