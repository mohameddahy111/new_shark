"use client"

import { ArrowBack, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiberBut() {
    const swiper= useSwiper()
  return (
    <Box display={"flex"} justifyContent={"flex-end"} position={'absolute'} top={0} right={0} zIndex={2}>
    <Box
      py={5}
      display={"flex"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
      >
        <Tooltip title={'Next'}>
      <IconButton sx={{bgcolor: "#f8f8f8"}} onClick={() =>{swiper.slideNext()} }>
        {" "}
        <ArrowBackIos />{" "}
      </IconButton>

        </Tooltip>
        <Tooltip title='Previous'>
      <IconButton
        onClick={() => {
            swiper.slidePrev();
        }}
        sx={{bgcolor: "#f0c000"}}
      >
        <ArrowForwardIos />{" "}
      </IconButton>

        </Tooltip>
    </Box>
  </Box>
)
}
