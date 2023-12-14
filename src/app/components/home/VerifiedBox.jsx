"use client";
import React from "react";
import {verified, faster, safe, reliable} from "../../../../public/img";
import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {Store} from "@/app/context/DataStore";

export default function VerifiedBox() {
  const {mobileDriver} = Store();
  const list = [
    {title: "We Pay cash and we close as soon as you prefer."},
    {title: "We Pay All The Closings Costs."},
    {title: "Will Help you, no matter what situation you are in."}
  ];
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={!mobileDriver && "center"}
        gap={1}
        pt={10}
        flexDirection={mobileDriver ? "column" : "row"}
      >
        {list?.map((ele, index) => (
          <Box
            key={index}
            display={"flex"}
            gap={1}
            alignItems={!mobileDriver && "center"}
            sx={{px: index === 1 && !mobileDriver && "10px"}}
            borderRight={index === 1 && !mobileDriver && 1}
            borderLeft={index === 1 && !mobileDriver && 1}
          >
            <Image width={20} src={verified} alt={ele.title} />
            <Typography>{ele.title} </Typography>
          </Box>
        ))}
      </Box>
      <Box pt={10}>
        <Grid container spacing={1}>
          <Grid item md={4} xs={12} textAlign={"center"}>
            <Image src={faster} alt={"faster"} width={50} />
            <Typography component={"p"} textAlign={'center'} p={5} variant='body2' >
              We understand that selling a home can be a time-sensitive matter,
              whether you are facing financial constraints, relocating, or
              simply eager to move on to your next chapter. That Is why we have
              optimized our procedures to minimize delays and cut through the
              red tape often associated with traditional real estate
              transactions.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} textAlign={"center"}>
            <Image src={reliable} alt={"faster"} width={50} />
            <Typography component={"p"} textAlign={'center'} p={5} variant='body2'>
              In an industry where trust is paramount, Shark Home Buyers stands
              out as a reliable partner for selling your home. We are dedicated
              to providing a dependable, transparent, and efficient process that
              you can count on. When you choose us, you are choosing a company
              that puts your needs first and consistently delivers on its
              commitments.{" "}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} textAlign={"center"}>
            <Image src={safe} alt={"faster"} width={50} />
            <Typography component={"p"} textAlign={'center'} p={5} variant='body2'>
              At Shark Home Buyers, safety isn it just a buzzword; it is a
              commitment that runs through every aspect of our operations. We
              prioritize the well-being and peace of mind of our clients,
              ensuring that your home selling experience with us is both secure
              and trustworthy. Your safety is our concern, and we are dedicated
              to maintaining a safe and secure environment for every client we
              serve.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
