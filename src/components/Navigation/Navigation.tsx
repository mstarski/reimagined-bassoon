import React, { FC } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { colors, fonts, bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils.ts";
import { NavItems } from "../../shared/typedefs";

const StyledNavigation = styled.nav`
  display: none;
  height: ${pxToRem(60)};
  padding: 0 1rem;
  font-family: ${fonts.fira};
  font-weight: 700;
  background: ${colors.purple3};

  @media (min-width: ${bps.lg}) {
    padding: 0 2rem;
  }

  @media (min-width: ${bps.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledNavLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${colors.purple4};
    transform: scale(1.2);
  }
`;

const Initials = styled(StyledNavLink)`
  font-size: 2rem;

  &:hover {
    transform: scale(1);
  }
`;

const NavLeft = styled.div`
  display: flex;

  flex-basis: ${pxToRem(400)};
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${bps.lg}) {
    flex-basis: ${pxToRem(500)};
  }
`;

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
  };

  return (
    <StyledNavigation>
      <NavLeft>
        <Initials to="/">ms</Initials>
        {Object.entries(navItems).map(([name, props]) => (
          <StyledNavLink key={name} to={props.href}>
            {props.text}
          </StyledNavLink>
        ))}
      </NavLeft>
    </StyledNavigation>
  );
};
