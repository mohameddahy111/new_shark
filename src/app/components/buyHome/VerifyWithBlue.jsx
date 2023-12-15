import { Store } from '@/app/context/DataStore';
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {verifiedblue} from '../../../../public/img'

export default function VerifyWithBlue({ list }) {
    const {mobileDriver} = Store();

  return (
    <Box
    display={"flex"}
    alignItems={!mobileDriver&& "center"}
    pt={3}
    flexDirection={mobileDriver && "column"}
  >
    {list.map((ele, index) => (
      <React.Fragment key={index}>
        {index === 0 ? (
          <Box
            display={"flex"}
            justifyContent={""}
            alignItems={"center"}
            px={1}
          >
            <Image
              src={verifiedblue}
              alt="verifiedblue"
              width={20}
            />
            <Typography>{ele}</Typography>
          </Box>
        ) : (
          <Box
            borderLeft={!mobileDriver &&"1px solid #000"}
            display={"flex"}
            justifyContent={""}
            alignItems={"center"}
            px={1}
          >
            <Image
              src={verifiedblue}
              alt="verifiedblue"
              width={20}
            />
            <Typography>{ele}</Typography>
          </Box>
        )}
      </React.Fragment>
    ))}
  </Box>
)
}
