import React, { FC } from "react";

import { Layout } from "../components/Layout/Layout";
import { Info } from "../partials/about-me/info";

const AboutMePage: FC = () => {
  return (
    <Layout>
      <Info />
    </Layout>
  );
};

export default AboutMePage;
