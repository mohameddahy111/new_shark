"use client";

import React from "react";
import {
  Rectangle114,
  Rectangle_60home,
  Rectangle_62hom2,
  Rectangle_64home
} from "../../../public/img";
import {Box,  Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
export default function page() {
  const list = [
    {
      img: Rectangle_60home,
      price: 700000,
      address: "123 Main Street, Main City, Main State 12345",
      detalis: {
        bedrooms: 5,
        bathrooms: 3,
        aria: 3200
      }
    },
    {
      img: Rectangle_62hom2,
      price: 4000,
      Rent: "month",
      address: "123 Main Street, Main City, Main State 12345",
      detalis: {
        bedrooms: 5,
        bathrooms: 3,
        aria: 3200
      }
    },
    {
      img: Rectangle_64home,
      price: 700000,
      address: "123 Main Street, Main City, Main State 12345",
      detalis: {
        bedrooms: 5,
        bathrooms: 3,
        aria: 3200
      }
    }
  ];
  return (
    <Box mt={10}>
      <Container className="sellContinar">
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={2}
        >
          <Typography
            width={"100%"}
            maxWidth={400}
            variant="h3"
            component={"h3"}
            fontWeight={700}
          >
            Find your best Real Estate
          </Typography>
          <Typography width={"100%"} maxWidth={400}>
            We provide a complete service for the sale, purchase or rental of
            real estate.{" "}
          </Typography>
        </Box>
        <Box>
          <Image src={Rectangle114} alt="Rectangle114" width={"100%"} />
        </Box>
      </Container>
      <Box mt={5}>
        <Container>
          <Typography variant="h6" component={"h6"} fontWeight={700} my={3}>
            Recently Added
          </Typography>

          <Box>
            <Grid container spacing={1}>
              {list.map((ele, index) => (
                <Grid
                  item
                  key={index}
                  md={4}
                  sm={6}
                  xs={12}
                  textAlign={"center"}
                  alignItems={"center"}
                  display={'flex'}
                  flexDirection={'column'}
                  my={2}
                >
                  <Box
                    width={"250px"}
                    position={"relative"}
                  >
                    <Box>
                      <Box
                        position={"absolute"}
                        display={"flex"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        bgcolor={"#fff"}
                        borderRadius={"20px"}
                        width={'80px'}
                        p={.5}
                        boxShadow={'0px 0px 0px #000'}
                        top={10}
                        left={20}

                      >
                        <Box
                          width={"20px"}
                          height={"20px"}
                          sx={{
                            backgroundColor:ele.Rent?"#00BDD7": " #04D500",
                            borderRadius: "50%"
                          }}
                        ></Box>
                        <Typography variant='caption'>
                          {ele.Rent ? "For Rent" : "For Sell"}
                        </Typography>
                      </Box>
                    </Box>

                    <Image alt={`img_${index}`} src={ele.img} width={"100%"} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      textAlign={"center"}
                      py={2}
                      fontWeight={700}
                    >
                      $ {ele.price} {ele.Rent && "/ " + ele.Rent}
                    </Typography>
                    <Typography py={2}>{ele.address}</Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={2}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                      >
                        <KingBedOutlinedIcon
                          sx={{fontWeight: 300, fontSize: "20px"}}
                        />
                        <Typography>
                          {ele.detalis.bedrooms} Bedrooms{" "}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <BathtubOutlinedIcon
                          sx={{fontWeight: 300, fontSize: "20px"}}
                        />
                        <Typography>
                          {ele.detalis.bathrooms} Bathrooms{" "}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <OpenInFullOutlinedIcon
                          sx={{fontWeight: 300, fontSize: "20px"}}
                        />
                        <Typography>{ele.detalis.aria} sqft </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
