"use client";

import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {Rectangle_46} from "../../../../public/img";
import VerifyWithBlue from "./VerifyWithBlue";

export default function BuyTitle() {
  const list = [
    "With your Budget",
    "Wide a range of Options",
    "Easy",
    "Secured."
  ];
  return (
    <Box>
      <Container sx={{pt: "50px"}}>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image className="img" src={Rectangle_46} alt="Rectangle_46" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"start"}
            >
              <Typography
                fontWeight={400}
                textTransform={"capitalize"}
                component={"p"}
                variant="h6"
              >
                Searching for a new home?
              </Typography>
              <Typography
                variant="h3"
                component={"h1"}
                color={"#00C5C5"}
                textTransform={"capitalize"}
                py={3}
              >
                Find Your Dream Home with us!
              </Typography>
              <Button
                sx={{
                  color: "#fff",
                  bgcolor: "#000",
                  px: "20px",
                  py: "10px",
                  borderRadius: "15px",
                  ":hover": {
                    bgcolor: "#000",
                    color: "#fff"
                  }
                }}
              >
                Get Started
              </Button>
              <VerifyWithBlue list={list} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
