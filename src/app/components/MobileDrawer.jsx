"use client";

import {Close, Menu} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import Image from "next/image";
import React, {useState} from "react";
import {logo} from "../../../public/img";

export default function MobileDrawer({list}) {
  const [open, setOpen] = useState(false);

  return (
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
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <Close /> : <Menu />}
        </IconButton>
        <Drawer open={open} elevation={4} variant="persistent">
          <Box width={250}>
            <Box display={"flex"} justifyContent={"center"} py={3}>
              <Image src={logo} alt="logo" width={150} height={60} />
            </Box>
            <Divider />
            <Box>
              <List>
                {list?.map((ele, index) => (
                  <ListItem key={index}>
                    <ListItemButton>{ele.title}</ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box px={3}>
              <Typography>+1 (123) 456-7890</Typography>
              <Button
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  mt: "20px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  ":hover": {bgcolor: "#000", color: "#fff"}
                }}
                fullWidth
              >
                Get a call
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
