"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Typography} from "@mui/material";
import Titels from "./components/home/Titels";
import VerifiedBox from "./components/home/VerifiedBox";
import ImageBox from "./components/home/ImageBox";
import SwiperHome from "./components/home/SwiperHome";
import AboutTitle from "./components/home/AboutTitle";
import HowDo from "./components/home/HowDo";
import BadgeLabel from "./components/home/BadgeLabel";

export default function Home() {
  return (
    <Box>
      <Titels />
      <VerifiedBox />
      <ImageBox />
      <SwiperHome />
      <AboutTitle />
      <HowDo />
      <BadgeLabel/>
    </Box>
  );
}
