import {Box, Grid} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function GenlarGrid({children, rtlDir, img , size}) {
  return (
    <Box>
      <Grid container spacing={1} direction={rtlDir && "row-reverse"}>
        <Grid item md={6} xs={12}>
          <Image className={size ? `${size}` :"img"} src={img} alt="img" />
        </Grid>
        <Grid item md={6} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
