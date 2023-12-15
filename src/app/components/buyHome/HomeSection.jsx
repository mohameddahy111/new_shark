"use client";

import {Box, Container, Typography} from "@mui/material";
import React from "react";
import GenlarGrid from "../GenlarGrid";
import {Rectangle_48} from "../../../../public/img";

export default function HomeSection() {
  return (
    <Box mt={10} bgcolor={"#000"} py={10}>
      <Container>
        <GenlarGrid img={Rectangle_48} size={"imgsmall"}>
          <Box display={'flex'} justifyContent={'center'} px={2} height={'100%'} flexDirection={'column'}>
            <Typography className="homeTitle" component={"h3"} variant="h3" fontWeight={700}>
              We heve found luxury homes for clients for a decade.
            </Typography>
            <Typography pt={2} color={"#fff"}  component={"span"} variant="caption" fontWeight={400}>
            We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer. Our genuine care for customer satisfaction is what sets us apart.
            </Typography>
          </Box>
        </GenlarGrid>
      </Container>
    </Box>
  );
}
