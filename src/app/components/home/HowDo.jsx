"use client";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import {arrowDowen, arrowUp, table, phone} from "../../../../public/img";
import {Store} from "@/app/context/DataStore";

export default function HowDo() {
  const {mobileDriver} = Store();
  return (
    <Container sx={{mt: "40px"}}>
      <Box my={15}>
        <Typography
          textAlign={mobileDriver && "center"}
          variant="h3"
          component={"h2"}
          fontWeight={700}
        >
          How To ?
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12} position={"relative"}>
          <Card
            sx={{
              maxWidth: "400px",
              width: "100%",
              m: "auto",
              borderRadius: "30px"
            }}
            elevation={5}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              py={4}
            >
              <Typography py={2} textTransform={"capitalize"}>
                in any condition
              </Typography>
              <Typography
                textTransform={"capitalize"}
                fontWeight={700}
                component={"h4"}
                variant="h4"
                textAlign={"center"}
              >
                we buy your property
              </Typography>
              <Typography
                pb={2}
                className={styles.mainTitle}
                component={"h2"}
                variant="h5"
                fontWeight={700}
              >
                In Cash
              </Typography>
            </Box>
          </Card>
          {!mobileDriver && (
            <Box position={"absolute"} top={"-30px"} left={"70%"}>
              <Image src={arrowDowen} alt="arrowDowen" />
            </Box>
          )}
        </Grid>
        <Grid item md={6} xs={12} position={"relative"}>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography py={3}>Step 1</Typography>
            <Typography textAlign={"center"} width={"40%"}>
              Click on “Get Started” Button on the top of that page.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12} position={"relative"}>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            my={5}
          >
            <Typography py={3}>Step 2</Typography>
            <Typography textAlign={"center"} width={"40%"}>
              Fill out all the info that needed then click on”submit” button
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} position={"relative"}>
          <Card
            sx={{
              maxWidth: "300px",
              width: "100%",
              m: "auto",
              borderRadius: "30px"
            }}
            elevation={5}
          >
            <Image width={"280"} component={"img"} src={table} alt="table" />
          </Card>
          {!mobileDriver && (
            <Box position={"absolute"} bottom={"-70px"} right={"60%"}>
              <Image src={arrowUp} alt="arrowDowen" />
            </Box>
          )}
        </Grid>
        <Box mt={10} width={"100%"} display={"flex"} justifyContent={"center"}>
          <Button
            variant="outlined"
            sx={{borderColor: "#000", color: "#000"}}
            mt={20}
          >
            start now
          </Button>
        </Box>
      </Grid>
      <Grid container spacing={1} mt={5}>
        <Grid item md={6} xs={12} position={"relative"}>
          <Card
            sx={{
              maxWidth: "400px",
              width: "100%",
              m: "auto",
              borderRadius: "30px",
              height: "200px"
            }}
            elevation={5}
          >
                      <Image src={phone} alt="phone" width={ 400} />
          </Card>
        </Grid>
        <Grid item md={6} xs={12} position={"relative"}>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography py={3}>Step 3</Typography>
            <Typography textAlign={"center"} width={"40%"}>
            Pay Attention to your phone, Messages and your email.you will receive your offer on of those.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
