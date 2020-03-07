import React, { FC } from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout/Layout"
import { Navigation } from "../components/Navigation/Navigation"

const IndexPage: FC<{}> = () => (
  <Layout>
    <Navigation />
    <h1>Hiho</h1>
  </Layout>
)

export default IndexPage
