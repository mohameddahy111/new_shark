import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import {sharkLogo} from "../../../public/img";
import Image from "next/image";
import {Facebook, Instagram, LinkedIn, ListAlt, Person, Twitter} from "@mui/icons-material";
import Link from "next/link";
import "../css/footer.css";

export default function Footer() {
  return (
    <Box bgcolor={"#000"} color={"#fff"} mt={10} >
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Box p={3}>
            <Box>
              <Image src={sharkLogo} alt="sharkLogo" width={150} />
            </Box>
            <Typography py={2} width={"50%"} variant="caption" component={"p"}>
              Join Our Newsletter to Keep up to date with us.
            </Typography>
            <Box
              gap={2}
              display={"flex"}
              justifyContent={""}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={""}
                alignItems={"center"}
                color={"#fff"}
                border={"1px #fff solid"}
                borderRadius={"20px"}
                px={2}
                py={0.5}
                gap={1}
              >
                <Person />
                <InputBase
                  sx={{color: "#fff"}}
                  placeholder="Enter Your Email"
                />
              </Box>
              <Button
                sx={{
                  bgcolor: "#f0c000",
                  color: "#000",
                  borderRadius: "20px",
                  ":hover": {bgcolor: "#f0c000"}
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* list  */}

        <Grid item md={8} xs={12} className="grid" >
          <Grid container spacing={1}>
            <Grid item md={3} sm={6} xs={12}>
              <List>
                <ListItem>
                  <Link href={"/"} passHref>
                    Company
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    How It Works
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    Why us?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    FAQs
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <List>
                <ListItem>
                  <Link href={"/"} passHref>
                    Real Estate Professionals
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    Work with us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    Sell your deals
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    Get Funded
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    Deal Analysis
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    How to Start with Real Estate Investing
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                    Contact support
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <List>
                <ListItem>
                  <Link href={"/"} passHref>
                  Resources
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                  Documentations
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                  Papers
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <List>
                <ListItem>
                  <Link href={"/"} passHref>
                  Legal
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                  Terms of service
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                  Privacy Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                  Cookies Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"/"} passHref>
                  Data Processing 
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          </Grid>

      </Grid>
      <Box pl={10} pb={2} display={"flex"} alignItems={'center'} gap={1}>
        <IconButton sx={{border :"1px solid #fff"}}>
          <LinkedIn sx={{color:"#fff"}} />
        </IconButton>
        <IconButton sx={{border :"1px solid #fff"}}>
          <Facebook sx={{color:"#fff"}} />
        </IconButton>
        <IconButton sx={{border :"1px solid #fff"}}>
          <Twitter sx={{color:"#fff"}} />
        </IconButton>
        <IconButton sx={{border :"1px solid #fff"}}>
          <Instagram sx={{color:"#fff"}} />
        </IconButton>
      </Box>
      <Divider sx={{border :'.5px solid  #fff'}} />
      <Box>
        <Typography p={2} variant='body2'>
        © 2023 Shark Home Buyers. - All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}
