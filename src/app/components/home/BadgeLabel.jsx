import {Box, Typography} from "@mui/material";
import React from "react";

export default function BadgeLabel() {
  return (
    <Box
      width={"100%"}
      bgcolor={"#f0c000"}
      mt={5}
      height={300}
      display={"flex"}
      justifyContent={'space-around'}
      alignItems={"center"}
    >
      <Typography
        component={"h2"}
        variant="h2"
        textTransform={"capitalize"}
        fontWeight={800}
      
      >
        Wanna Learn More?
      </Typography>
      <Box bgcolor={"#000"} p={5} color={"#fff"} borderRadius={'50px 0px 50px 20px'}>
        <Typography>CALL US ON+1(800) 123 - 4567</Typography>
      </Box>
    </Box>
  );
}
