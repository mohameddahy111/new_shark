"use client"

import React from 'react'
import styles from "../../page.module.css";
import {Box, Button, Typography} from "@mui/material";
import SharkTitle from './SharkTitle';
import GetStart from '../GetStart';


export default function Titels() {
  return (
    <Box width={'98%'} textAlign={'center'} pt={20}>
      <SharkTitle/>
    <Typography py={1} component={'h2'} variant="h6" fontWeight={400}>In any Condition</Typography>
    <Typography component={'h1'} variant="h4" fontWeight={700}>We Buy Your Property</Typography>
      <Typography pb={2} className={styles.mainTitle} component={'h2'} variant="h4" fontWeight={700} >In Cash</Typography>
      <GetStart/>
  </Box>
)
}
