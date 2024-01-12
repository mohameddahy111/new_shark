"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  Grid,
  IconButton,
  InputBase,
  TextField,
  Typography
} from "@mui/material";
import React, {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import { Close, Send} from "@mui/icons-material";
import { logo } from "../../../public/img";
import Image from "next/image";
import axios from "axios";

export default function GetStart() {
  const validationSchema = yup.object({
    first_name: yup.string().min(2).required(),
    last_name: yup.string().min(2).required(),
    email: yup.string().required(),
    phone: yup.number().required(),
    message: yup.string().required(),
    address: yup.string().required()
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      address: "",
      message: ""
    },
      onSubmit: async (values) => {
          await axios.post('/api/send_info', values).then((res) => {
              if (res.status === 200) {
                    closeHandler()
                  console.log(res)
              }
          }).catch((err) => {
            console.log(err)
        })
    }
  });
  const [open, setOpen] = useState(false);
  function openHandler() {
    setOpen(true);
  }
  function closeHandler() {
    setOpen(false);
  }
  return (
    <Box>
      <Button
        onClick={openHandler}
        sx={{
          bgcolor: "#000",
          color: "#fff",
          borderRadius: "10px",
          py: "10px",
          px: "10px",
          ":hover": {bgcolor: "#000", color: "#fff"}
        }}
      >
        get started
      </Button>

      <Dialog open={open} fullWidth>
              <Card sx={{ p: 3 }}>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                      <Image src={logo} alt="logo" width={100} />
                      <IconButton  onClick={closeHandler}>
                          <Close/>
                      </IconButton>
                  </Box>
                  <Typography py={2}  textAlign={'center'} fontWeight={700} component={'h2'} variant="h5">
                      Contact us 
                  </Typography>
          <Container>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                  <InputBase
                    fullWidth
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid #666",
                      px: "10px",
                        my: "10px",
                      py:.5
                    }}
                    name="first_name"
                    id="first_name"
                    onChange={formik.handleChange}
                    placeholder={"First Name"}
                    inputProps={{type: "text"}}
                    required
                    error={
                      formik.touched.first_name &&
                      Boolean(formik.errors.first_name)
                    }
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputBase
                    required
                    id="last_name"
                    fullWidth
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid #666",
                      px: "10px",
                        my: "10px",
                        py: .5

                      
                    }}
                    name="last_name"
                    onChange={formik.handleChange}
                    placeholder={"Last Name"}
                    inputProps={{type: "text"}}
                    error={
                      formik.touched.last_name &&
                      Boolean(formik.errors.last_name)
                    }
                    // helperText={
                    //   formik.touched.last_name && formik.errors.last_name
                    // }
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputBase
                    required
                    id="phone"
                    fullWidth
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid #666",
                      px: "10px",
                      my: "10px", py: .5
                    }}
                    name="phone"
                    onChange={formik.handleChange}
                    placeholder={"Phone Number"}
                    inputProps={{type: "number"}}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    //   helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputBase
                    required
                    id="email"
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid #666",
                      px: "10px",
                      my: "10px", py: .5
                    }}
                    fullWidth
                    name="email"
                    onChange={formik.handleChange}
                    placeholder={"Email"}
                    inputProps={{type: "email"}}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    //   helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <InputBase
                    required
                    fullWidth
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid #666",
                      px: "10px",
                      my: "10px", py: .5
                    }}
                    name="address"
                    onChange={formik.handleChange}
                    placeholder={" Address"}
                    inputProps={{type: "text"}}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    //   helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <InputBase
                    required
                    sx={{
                      borderRadius: "20px",
                      border: "1px solid #666",
                      px: "10px",
                      my: "10px", py: .5
                    }}
                    fullWidth
                    multiline
                    rows={5}
                    name="message"
                    onChange={formik.handleChange}
                    placeholder={"Message"}
                    inputProps={{type: "text"}}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    //   helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>
                <Box width={"100%"} textAlign={"center"} mt={3}>
                  <Button type="submit" endIcon={<Send/>}>sned</Button>
                </Box>
              </Grid>
            </form>
          </Container>
        </Card>
      </Dialog>
    </Box>
  );
}
