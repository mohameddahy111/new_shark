"use client";

import {
  Box,
  Button,
  Container,
  InputBase,
  List,
  ListItem,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import {
  Rectangle_291,
  whathsApp,
  Rectangle_36,
  Rectangle_40
} from "../../../public/img";
import GenlarGrid from "../components/GenlarGrid";
import Image from "next/image";
import ColorPoint from "../components/ColorPoint";
import { Store } from "../context/DataStore";

export default function page() {
  const {mobileDriver}=Store()
  return (
    <Box>
      <Container sx={{mt: 5}}>
        <GenlarGrid img={Rectangle_291} size={"howwork_img"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            height={"100%"}
            pl={5}
          >
            <Typography component={"h2"} variant="h2" fontWeight={700}>
              Get Help From Our{" "}
              <Typography
                color={"#AA8B9C"}
                component={"span"}
                variant="h2"
                fontWeight={700}
              >
                Experts.
              </Typography>
            </Typography>
            <Typography component={"p"}>Choose the best for you!</Typography>
          </Box>
        </GenlarGrid>
      </Container>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={10}
        width={"100%"}
        height={"400px"}
        bgcolor={" #29A71A"}
      >
        <Container >
          <Box display={"flex"} justifyContent={"start"} alignItems={"center"}>
            <Image src={whathsApp} alt="whathsApp" width={100} />
            <Typography
              ml={!mobileDriver && 15}
              width={!mobileDriver ? "35%" :"100%"}
              fontWeight={700}
              color={"#fff"}
              component={"h2"}
              variant={!mobileDriver? 'h2' :"h4"}
            >
              Chat with us On WhatsApp
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <ColorPoint img={Rectangle_36} rtlDir size={"howwork_img_call"}>
          <Box
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography component={"h2"} variant="h3" fontWeight={700}>
              Or you can Call us on +1(800) 123-4567
            </Typography>
          </Box>
        </ColorPoint>
      </Container>
      <Container>
        <GenlarGrid img={Rectangle_40} size={"Rectangle_40"} col={4}>
          <Box px={5}>
            <Typography
              mt={5}
              component={"h2"}
              variant="h4"
              fontWeight={700}
              color={"#00D44E"}
            >
              Or You Can Send us a Message!
            </Typography>
            <Typography
              pt={5}
              component={"p"}
              width={"100%"}
              maxWidth={"300px"}
            >
              Fill out the form bellow And You will get your answer through
              Email or SMS or a Call!
            </Typography>
          </Box>
          <Box width={"100%"} maxWidth={"450px"}>
            <form>
              <List>
                <ListItem>
                  <InputBase
                    fullWidth
                    placeholder="Name"
                    sx={{
                      borderRadius: "30px",
                      border: ".5px solid #000",
                      py: "5px",
                      px: "10px"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <InputBase
                    fullWidth
                    placeholder="Phone Number"
                    sx={{
                      borderRadius: "30px",
                      border: ".5px solid #000",
                      py: "5px",
                      px: "10px"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <InputBase
                    fullWidth
                    placeholder="Email"
                    sx={{
                      borderRadius: "30px",
                      border: ".5px solid #000",
                      py: "5px",
                      px: "10px"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <InputBase
                    fullWidth
                    placeholder="Message"
                    rows={6}
                    multiline
                    sx={{
                      borderRadius: "30px",
                      border: ".5px solid #000",
                      py: "15px",
                      px: "20px"
                    }}
                  />
                </ListItem>
                <ListItem sx={{display: "flex", justifyContent: "center"}}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "15px",
                      py: 1,
                      px: 5,
                      color: "#000",
                      borderColor: "#000",
                      outlineColor: "#000",
                      ":hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                        transition: ".5s "
                      }
                    }}
                  >
                    send
                  </Button>
                </ListItem>
              </List>
            </form>
          </Box>
        </GenlarGrid>
      </Container>
    </Box>
  );
}
