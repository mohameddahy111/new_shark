"use client"

import { useMediaQuery } from "@mui/material";
import {createContext, useContext} from "react";

const DataStore = createContext();
export const DataStoreProvider = ({ children }) => {
    const mobileDriver = useMediaQuery("(max-width:600px)")
  return <DataStore.Provider value={{mobileDriver }}> {children} </DataStore.Provider>;
};

export const Store = () => {
  return useContext(DataStore);
};
