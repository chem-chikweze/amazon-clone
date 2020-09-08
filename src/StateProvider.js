//setup  data layer

// import { createContext } from "react";

// We need to track the basket
import React, { createContext, useContext, useReducer } from "react";


// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a componenet
export const useStateValue = () => useContext( StateContext);