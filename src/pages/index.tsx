import React, { FC } from "react";

import { Layout } from "../components/Layout/Layout";
import { Hero } from "../partials/index/hero";
import { Showcase } from "../partials/index/showcase";

const IndexPage: FC<{}> = () => {
  return (
    <Layout>
      <Hero />
      <Showcase />
    </Layout>
  );
};

export default IndexPage;
