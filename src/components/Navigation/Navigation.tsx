import React, { FC } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
  font-family: "Fira Code", sans-serif;
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
      {Object.entries(navItems).map(([name, props]) => (
        <Link key={name} to={props.href}>
          {props.text}
        </Link>
      ))}
    </StyledNavigation>
  )
}
