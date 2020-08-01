import React, { FC, ReactElement, ReactText } from "react";
import styled from "styled-components";

import "../../scss/main.scss";

import { bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { Socials } from "../Socials/Socials";
import { Footer } from "../Footer/Footer";

type Props = {
  children?: ReactElement[] | ReactElement | ReactText;
};

const Rug = styled.div`
  margin-bottom: calc(${pxToRem(96)} + ${pxToRem(64)});

  @media (min-width: ${bps.sm}) {
    margin-bottom: ${pxToRem(96)};
  }
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Rug>
      <Socials />
      <Navigation />
      {children}
      <MobileNavigation />
      <Footer />
    </Rug>
  );
};
