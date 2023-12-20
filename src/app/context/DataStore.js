"use client"

import { useMediaQuery } from "@mui/material";
import {createContext, useContext, useState} from "react";

const DataStore = createContext();
export const DataStoreProvider = ({ children }) => {
  const mobileDriver = useMediaQuery("(max-width:600px)")
  const [user , setUsers]=useState([])
  return <DataStore.Provider value={{mobileDriver  , user , setUsers}}> {children} </DataStore.Provider>;
};

export const Store = () => {
  return useContext(DataStore);
};
