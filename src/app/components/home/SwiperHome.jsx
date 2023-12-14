"use client";

import {
  Box,
  Card,
  Container,
  Typography
} from "@mui/material";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "../../css/swiperHome.css";
import SwiberBut from "./SwiberBut";
export default function SwiperHome() {
  return (
    <Box>
      <Container>
        <Box p={5}>
          <Typography fontWeight={700} variant="h5" component={"h2"}>
            What Our Clients Said About Us
          </Typography>
          <Typography variant="caption" component={"p"}>
            As we helped hundreds of clients all over the united states, They
            gave us there feedback
          </Typography>
        </Box>

        <Box>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }}
          >
            <SwiberBut />

            {[...Array(10).keys()].map((ele, index) => (
              <SwiperSlide key={index} >
                <Card sx={{width: "100%", bgcolor: "#FCC000"}}>
                  <Box p={2}>
                    <Typography component={"h6"} variant="h6">
                      Marry Johnson
                    </Typography>
                    <Typography component={"p"} variant="caption">
                      Houston, Texas
                    </Typography>
                  </Box>
                  <Box p={3}>
                    <Typography component={"p"} variant="body2">
                      I was in a hurry to sell my house in Texas, and Shark Home
                      Buyers came to my rescue. Their professionalism and fair
                      offer made the entire experience stress-free.
                    </Typography>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
