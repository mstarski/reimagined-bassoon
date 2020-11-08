import React, { FC, useEffect, useContext } from "react";

import { Layout } from "../components/Layout/Layout";
import { Hero } from "../partials/index/hero";
import { Showcase } from "../partials/index/showcase";
import { Store, ACTIONS } from "../store/PageStore";

const IndexPage: FC = () => {
  const [_, dispatch] = useContext(Store);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_FOOTER_VARIANT,
      payload: { variant: "primary" },
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Showcase />
    </Layout>
  );
};

export default IndexPage;
