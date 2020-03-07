import React, { FC } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
  background: red;
`

export const Navigation: FC<{}> = () => {
  const navItems = {
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
      {Object.entries(navItems).map(([name, props]) => (
        <Link to={props.href}>{props.text}</Link>
      ))}
    </StyledNavigation>
  )
}
