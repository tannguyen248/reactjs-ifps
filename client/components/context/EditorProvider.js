import React, { createContext, useReducer } from "react";

const initialState = { layers: [] };
const EditorContext = createContext(initialState);
const { Provider } = EditorContext;

export const ADD_LAYER = "ADD_LAYER";

const EditorProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_LAYER:
        const layers = [...state.layers, payload];
        return { ...state, layers };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { EditorContext, EditorProvider };
