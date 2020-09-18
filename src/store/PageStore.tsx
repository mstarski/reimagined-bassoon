import React, { FC, createContext, useReducer } from "react";
import { PageState, Action } from "../shared/typedefs";

export const Store: any = createContext([]);

export const ACTIONS: Record<string, string> = {
  SET_FOOTER_VARIANT: "SET_FOOTER_VARIANT",
};

const initPageState: PageState = {
  footerVariant: "primary",
};

function reducer(state: PageState, action: Action) {
  switch (action.type) {
    case ACTIONS.SET_FOOTER_VARIANT:
      return {
        ...state,
        footerVariant: action.payload.variant,
      };
  }
  return state;
}

export const PageStore: FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initPageState);

  return <Store.Provider value={[store, dispatch]}>{children}</Store.Provider>;
};
