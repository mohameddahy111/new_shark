"use client";

import {Box, Container, Grid} from "@mui/material";
import Image from "next/image";
import React from "react";
import "../css/buyhome.css";

export default function ColorPoint({rtlDir, img, children, colos}) {
  return (
    <Box my={10}>
      <Container>
        <Grid container spacing={1} direction={rtlDir && "row-reverse"}>
          <Grid item md={6} xs={12}>
            <Box className={"img-homes"} position={"relative"}>
              <Image src={img} alt="img-homes" />
              <Box
                className="color-1"
                zIndex={2}
                position={"absolute"}
                top={10}
                right={30}
                bgcolor={colos.box1}
              ></Box>
              <Box
                className="color-2"
                bgcolor={colos.box2}
                zIndex={-1}
                position={"absolute"}
                bottom={100}
                left={2}
              ></Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
