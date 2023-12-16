"use client";
import {Box, Typography} from "@mui/material";
import React from "react";
import ColorPoint from "../ColorPoint";
import {Rectangle_13} from "../../../../public/img";

export default function SectionWitnColorsPoint() {
  const colors = {
    box1: "#000",
    box2: "#000"
  };

  return (
    <Box>
      <ColorPoint colos={colors} rtlDir img={Rectangle_13}>
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography fontWeight={700} component={"h1"} variant="h3" width={'75%'}>
            Buying a Home is a Challenge but<span className="mede">  We Made It EASY.</span> 
          </Typography>
        </Box>
      </ColorPoint>
    </Box>
  );
}
