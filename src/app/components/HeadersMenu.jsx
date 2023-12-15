"use client";
import {Box, Button, Container, Typography} from "@mui/material";
import React from "react";
import {logo} from "../../../public/img/index";
import Image from "next/image";
import {Store} from "../context/DataStore";
import MobileDrawer from "./MobileDrawer";
import {usePathname, useRouter} from "next/navigation";

export default function HeadersMenu() {
  const path = usePathname();
  const {mobileDriver} = Store();
  const router = useRouter();
  const list = [
    {title: "Home", path: "/"},
    {title: "Buy Home", path: "/buy_home"},
    {title: "See Listings", path: "/see_Listings"},
    {title: "How It Works", path: "/how_works"},
    {title: "Contact", path: "/contact"}
  ];
  return (
    <Box>
      {mobileDriver ? (
        <MobileDrawer list={list} />
      ) : (
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
              <React.Fragment key={index}>
                {path === "/buy_home" ? (
                  <React.Fragment>
                    <Button
                      onClick={() => {
                        router.push(`${ele.path}`);
                      }}
                      sx={{color: "#000"}}
                    >
                      {ele.title}
                    </Button>
                  </React.Fragment>
                ) : (
                  ele.title !== "See Listings" && (
                    <Button
                      onClick={() => {
                        router.push(`${ele.path}`);
                      }}
                      sx={{color: "#000"}}
                    >
                      {ele.title}
                    </Button>
                  )
                )}
              </React.Fragment>
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
                fontSize: "12px",
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
