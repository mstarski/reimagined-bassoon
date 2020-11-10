import React, { FC, useContext, useEffect } from "react";

import { Layout } from "../components/Layout/Layout";
import { Info } from "../partials/about-me/info";
import { Technologies } from "../partials/about-me/technologies";
import { Store, ACTIONS } from "../store/PageStore";

const AboutMePage: FC = () => {
  const [, dispatch] = useContext(Store);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_FOOTER_VARIANT,
      payload: { variant: "secondary" },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Info />
      <Technologies />
    </Layout>
  );
};

export default AboutMePage;
