import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../assets/images/buecherregal.svg"
import logo_white from "../assets/images/buecherregal-weiss.svg"
import { links } from "../utils/linksDB"
import { FaBook, FaBookOpen } from "react-icons/fa"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    const stickyNav = () => {
      if (window.scrollY > 50) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener("scroll", stickyNav)
    return () => {
      window.removeEventListener("scroll", stickyNav)
    }
  })

  return (
    <>
      <Nav navbar={navbar}>
        <NavContent>
          <NavHeader>
            <StyledLink to="/">
              {navbar ? (
                <img src={logo} alt="logo buecherregal" />
              ) : (
                <img src={logo_white} alt="logo_weiss buecherregal" />
              )}
            </StyledLink>
            <BookIcon onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? <FaBookOpen /> : <FaBook />}
            </BookIcon>
          </NavHeader>
          <NavMenu showLinks={showLinks}>
            <LinksContainer>
              {links.map(link => {
                return (
                  <Link
                    style={{
                      color: navbar ? "var(--fnt-clr)" : "var(--bckgrnd-clr)",
                    }}
                    to={link.url}
                    key={link.id}
                  >
                    <li>{link.text}</li>
                  </Link>
                )
              })}
            </LinksContainer>
            <ActionBtn>
              <a
                style={{ color: "var(--bckgrnd-clr)" }}
                href="http://buecherregal.herokuapp.com"
              >
                Registrieren
              </a>
            </ActionBtn>
          </NavMenu>
        </NavContent>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  background: ${props => (props.navbar ? "var(--bckgrnd-clr)" : "transparent")};
  box-shadow: ${props => props.navbar && "var(--bx-shdw)"};
  position: fixed;
  transition: var(--trnstn);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  &:before,
  &:after {
    content: "";
    display: block;
    flex: 1;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-around;
    height: auto;
    flex: 0 0 auto;
  }
`

const NavContent = styled.header`
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-around;
    max-width: var(--mx-wdth);
    width: 100%;
  }
`

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5rem;
`

const BookIcon = styled.span`
  display: flex;
  align-self: center;
  font-size: 1.5rem;
  padding: 0.25rem;
  border: 0;
  background: transparent;
  color: var(--brnd-clr);
  transition: var(--trnstn);
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`

const NavMenu = styled.div`
  text-align: start;
  font-size: 1rem;
  height: ${props => (props.showLinks ? "7rem" : "0")};
  padding: ${props => (props.showLinks ? "0 0.5rem" : "none")};
  overflow: hidden;
  transition: var(--trnstn);

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    height: auto;
    flex: 1;
    margin-right: 0.5rem;
  }
`

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    margin: 0 2rem;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const ActionBtn = styled.button`
  background: var(--brnd-clr);
  border: 2px solid var(--brnd-clr);
  border-radius: var(--brdr-rds);
  color: var(--bckgrnd-clr);
  cursor: pointer;
  margin: 0.25rem 0;
  padding: 0.25rem 0.5rem;
  transition: var(--trnstn);

  &:hover {
    background: var(--fnt-clr);
    border: 2px solid var(--fnt-clr);
  }

  @media (min-width: 800px) {
    margin: 0.5rem 0;
    padding: 0.5rem 1.25rem;
  }
`

export default Navbar
