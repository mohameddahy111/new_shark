
"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import {logo} from "../../../public/img/index";
import Image from "next/image";
import { Store } from "../context/DataStore";
import MobileDrawer from "./MobileDrawer";

export default function HeadersMenu() {
  const { mobileDriver } = Store()
  const list = [
    {title: "Home", path: "/"},
    {title: "Buy Home", path: "/"},
    {title: "How It Works", path: "/"},
    {title: "Contact", path: "/"}
  ];
  return (
    <Box>
      {mobileDriver ? (<MobileDrawer list={list } />) :(
    <Box
      p={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Image src={logo} alt="logo" width={150} height={60} />
      </Box>
      <Box>
        {list.map((ele, index) => (
          <Button sx={{color:'#000'}} key={index}>{ele.title}</Button>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Typography>+1 (123) 456-7890</Typography>
        <Button
          
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "20px",
            fontSize:"12px",
            ":hover": {bgcolor: "#000", color: "#fff"}
          }}
        >
          Get a call
        </Button>
      </Box>
    </Box>

      )}
    </Box>
  );
}
