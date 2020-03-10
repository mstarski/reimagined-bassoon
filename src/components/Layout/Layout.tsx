import React, { FC, ReactElement } from "react";

import "../../scss/main.scss";

import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { Socials } from "../Socials/Socials";

type Props = {
  children: ReactElement[];
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Socials />
      <Navigation />
      {children}
      <MobileNavigation />
    </>
  );
};
