import React, { FC } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"

import { colors, fonts } from "../../shared/variables"
import { pxToRem } from "../../shared/style-utils.ts"

import githubLogo from "../../images/github-square-brands.svg"
import linkedinLogo from "../../images/linkedin-brands.svg"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(60)};
  padding: 0 2rem;
  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};
`

const StyledNavLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`

const Initials = styled(StyledNavLink)`
  font-size: 2rem;
`

const Social = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  cursor: pointer;
`

const NavLeft = styled.div`
  flex-grow: 0.5;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavRight = styled.div`
  flex-grow: 3;

  display: flex;
  justify-content: end;
  align-items: center;
`

type NavItems = {
  [key: string]: {
    text: string
    href: string
  }
}

export const Navigation: FC<{}> = () => {
  const navItems: NavItems = {
    about: {
      text: "About me",
      href: "/about-me",
    },

    contact: {
      text: "Send me a message",
      href: "/contact",
    },
  }

  return (
    <StyledNavigation>
      <ReactTooltip id="github" place="bottom" />
      <ReactTooltip id="linkedin" place="bottom" />

      <NavLeft>
        <Initials to="/">ms</Initials>
        {Object.entries(navItems).map(([name, props]) => (
          <StyledNavLink key={name} to={props.href}>
            {props.text}
          </StyledNavLink>
        ))}
      </NavLeft>
      <NavRight>
        <Social
          data-tip="Check me out on github"
          data-for="github"
          src={githubLogo}
          alt="github logo"
        />
        <Social
          data-tip="Check me out on linkedin"
          data-for="linkedin"
          src={linkedinLogo}
          alt="linkedin logo"
        />
      </NavRight>
    </StyledNavigation>
  )
}
