"use client";

import React from "react";
import GenlarGrid from "../components/GenlarGrid";
import {Rectangle_29, Rectangle_99} from "../../../public/img";
import {Box, Button, Container, Typography} from "@mui/material";
import VerifyWithBlue from "../components/buyHome/VerifyWithBlue";
import ColorPoint from "../components/ColorPoint";
import SwiperHome from "../components/home/SwiperHome";
import HowDo from "../components/home/HowDo";
import BadgeLabel from "../components/home/BadgeLabel";

export default function page() {
  const list = ["100% FREE", "Fast", "Safe", "Secured."];
  return (
    <Box>

    <Container sx={{mt: "50px", position: "relative"}}>
      <GenlarGrid img={Rectangle_29} size={"howwork_img"} rtlDir>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography component={"h2"} variant="h2" fontWeight={700}>
            Get a Cash Offer on Your Home
            <Typography
              fontWeight={700}
              color={"#CC8C32"}
              component={"p"}
              variant="h2"
            >
              In 3 Steps.
            </Typography>
          </Typography>
          <VerifyWithBlue list={list} />
          <Box mt={5} pl={5}>
            <Button
              variant="outlined"
              sx={{
                py: 1,
                px: 4,
                borderRadius: "15px",
                borderColor: "#000",
                color: "#000",
                ":hover": {
                  color: "#fff",
                  bgcolor: "#000",
                  transition: ".5s ease-in-out"
                }
              }}
            >
              How To?
            </Button>
          </Box>
        </Box>
      </GenlarGrid>
      <ColorPoint img={Rectangle_99}>
        <Box
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h2" component={"h2"} fontWeight={700}>
            We Cover
            <Typography
              component={"p"}
              fontWeight={700}
              variant="h2"
              className="colore_usa"
            >
              The Closing Costs.
            </Typography>
          </Typography>
        </Box>
      </ColorPoint>

      </Container>
      <HowDo />
      <SwiperHome />
      <BadgeLabel color={"#00F0FF"} text={"Get Help Now!"} />
      </Box>

  );
}
