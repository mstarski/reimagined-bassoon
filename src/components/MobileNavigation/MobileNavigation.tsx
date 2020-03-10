import React, { FC } from "react";
import { NavItems } from "../../shared/typedefs";
import { Link } from "gatsby";
import styled from "styled-components";

import { bps, colors, fonts } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import homeIcon from "../../images/menu-home.svg";
import aboutMeIcon from "../../images/menu-me.svg";
import contactIcon from "../../images/menu-envelope.svg";

const StyledMobileNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  padding: 0.5rem 0rem;
  background: ${colors.purple6};

  @media (min-width: ${bps.sm}) {
    display: none;
  }
`;

const NavIcon = styled.img`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  margin-bottom: ${pxToRem(8)};
`;

const MobileLink = styled(Link)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.fira};
  font-weight: 700;
  text-decoration: none;
  color: ${colors.white};
`;

export const MobileNavigation: FC<{}> = () => {
  const navItems: NavItems = {
    home: {
      text: "Home",
      href: "/",
      img: homeIcon,
    },
    about: {
      text: "About me",
      href: "/about-me",
      img: aboutMeIcon,
    },

    contact: {
      text: "Contact",
      href: "/contact",
      img: contactIcon,
    },
  };
  return (
    <StyledMobileNav>
      {Object.entries(navItems).map(([name, props]) => (
        <MobileLink to={props.href}>
          <NavIcon src={props.img} alt={`menu-${name}`} />
          {props.text}
        </MobileLink>
      ))}
    </StyledMobileNav>
  );
};
