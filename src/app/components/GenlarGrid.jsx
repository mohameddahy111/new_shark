"use client"

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import '../css/buyhome.css'


export default function GenlarGrid({children, rtlDir, img , size  ,col}) {
  return (
    <Box>
      <Grid container spacing={1} direction={rtlDir && "row-reverse"}>
        <Grid item md={col || 6} xs={12}>
          <Image  className={size ? `${size}` :"img"} src={img} alt="img" />
        </Grid>
        <Grid item md={12-col || 6} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
