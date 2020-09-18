import React, { FC } from "react";

import { Layout } from "../components/Layout/Layout";
import { Info } from "../partials/about-me/info";
import { Technologies } from "../partials/about-me/technologies";

const AboutMePage: FC = () => {
  return (
    <Layout>
      <Info />
      <Technologies />
    </Layout>
  );
};

export default AboutMePage;
