import React, { FC, ReactElement } from "react"

import "../../scss/main.scss"

type Props = {
  children: ReactElement[]
}

export const Layout: FC<Props> = ({ children }) => {
  return children
}
