import React, { FC, useContext, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { ContactContent } from "../partials/contact/contact-content";
import { Store, ACTIONS } from "../store/PageStore";

const ContactPage: FC = () => {
  const [_, dispatch] = useContext(Store);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_FOOTER_VARIANT,
      payload: { variant: "secondary" },
    });
  }, []);

  return (
    <Layout>
      <ContactContent></ContactContent>
    </Layout>
  );
};

export default ContactPage;
