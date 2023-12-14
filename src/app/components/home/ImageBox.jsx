import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {Rectangle13, Rectangle_35, Rectangle_34} from "../../../../public/img";
import styles from "@/app/page.module.css";

export default function ImageBox() {
  return (
    <Container >
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Box
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={700}>
              We Buy Homes All Over{" "}
              <span className={styles.imageTitle}>The United States.</span>{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} position={"relative"}>
          <Image
            src={Rectangle13}
            alt="Rectangle13"
            className={styles.imageBox}
          />

          <Box
            className={styles.blackBox}
            position={"absolute"}
            top={25}
            right={"20%"}
          ></Box>
          <Box
            className={styles.blackBox}
            position={"absolute"}
            bottom={"20%"}
            left={"0"}
            zIndex={-1}
          ></Box>
        </Grid>
      </Grid>

      <Box py={10}>
        <Typography
          variant="h5"
          component={"h4"}
          fontWeight={500}
          textAlign={"center"}
        >
          whatever the condition is, we buy your Home
        </Typography>
        <Box pt={10}>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Image
                src={Rectangle_34}
                className={styles.imageBoxSub}
                alt="Rectangle13"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                // alignItems={"center"}
                flexDirection={"column"}
                height={"90%"}
                px={10}
              >
                <Typography fontWeight={700} variant="h3">
                  {" "}
                  +3400
                </Typography>
                <Typography fontWeight={400} variant="h3" pt={2}>
                  {" "}
                  Offers Given
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box pt={10}>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                height={"90%"}
                px={10}
                width={"90%"}
              >
                <Typography fontWeight={700} variant="h3" textAlign={'center'}>
                  {" "}
                  +1600
                </Typography>
                <Typography fontWeight={400} variant="h3" pt={2}>
                  {" "}
                  Properties Purchased
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Image
                src={Rectangle_35}
                className={styles.imageBoxSub}
                alt="Rectangle13"
              />
            </Grid>
          </Grid>
        </Box>
          </Box>
          <Divider />
    </Container>
  );
}
