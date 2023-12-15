"use client"


import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "@/app/page.module.css";
import {sharkLogo} from "../../../../public/img";
import Image from "next/image";

export default function AboutTitle() {
  return (
    <>
      <Container>
        <Box
          width={"100%"}
          pt={20}
          className={styles.shadowTitle}
          position={"relative"}
        >
          <Typography
            className={styles.choosing}
            width={400}
            component={"h2"}
            variant="h2"
            fontWeight={900}
          >
            WHY CHOOSING US?
          </Typography>
        </Box>
      </Container>

      <Box mx={'auto'} mt={5} p={5} bgcolor={"#000"} color={"#e3e3e3"} borderRadius={'10px'}>
        <Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Image width={110} src={sharkLogo} alt="logo" />
            <Typography
              display={"flex"}
              alignItems={"center"}
              height={40}
              variant="body2"
              borderLeft={"1px solid #fff"}
              pl={2}
              component={"span"}
            >
              Your Trusted, Safe and Quick Home buying Solution.
            </Typography>
          </Box>

          <Box py={5} px={2} >
            <Typography width={'80%'}  variant="body2" m={'auto'} fontWeight={300} textAlign={"center"} component={'p'} >
              At Shark Home Buyers, we understand that selling your home can be
              a significant decision, and we are here to make the process as
              seamless and stress-free as possible. What sets us apart is our
              commitment to providing you with a hassle-free, efficient, and
              fair home selling experience. We pride ourselves on our
              transparency, integrity, and the personalized attention we give to
              each homeowner. Whether you are facing foreclosure, relocating,
              downsizing, or simply want to sell your property quickly, Shark
              Home Buyers is here to offer you a straightforward and fair
              solution. Join countless satisfied homeowners who have chosen us
              for their real estate needs and experience the Shark Home Buyers
              difference today!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
