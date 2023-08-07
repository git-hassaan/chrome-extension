import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Link,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachmentIcon from "@mui/icons-material/Attachment";
const Recordings = () => {
  const cardText = { fontSize: "12px", textAlign: "left" };
  const cardGrid = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  const data = [
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7nN9NapfpDgNKWdzyyb9xYClOoPDQOA0EA&usqp=CAU",
      imgDescription: "This is the first image",
      date: "2023-07-28",
    },
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7nN9NapfpDgNKWdzyyb9xYClOoPDQOA0EA&usqp=CAU",
      imgDescription: "This is the second image",
      date: "2023-07-29",
    },
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7nN9NapfpDgNKWdzyyb9xYClOoPDQOA0EA&usqp=CAU",
      imgDescription: "This is the third image",
      date: "2023-07-30",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        flexDirection: "column",
        //width: "450px",
        height: "100%",
        width: "100%",
        backgroundColor: "#E6E6E3",
      }}
    >
      {data.map((item) => (
        <Card
          sx={{
            backgroundColor: "#E6E6E3",

            paddingLeft: "20px",
            paddingRight: "10px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "12px",
            boxShadow: "none",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid xs={2.5} sx={cardGrid}>
              <CardMedia
                component="img"
                height="50"
                image={item.imageLink}
                alt="Paella dish"
                sx={{ borderRadius: "12px" }}
              />
            </Grid>
            <Grid xs={7} sx={cardGrid}>
              <CardContent>
                <Typography sx={cardText}>{item.imgDescription}</Typography>

                <Typography sx={cardText}>{item.date}</Typography>
              </CardContent>
            </Grid>
            <Grid xs={2.5} sx={cardGrid}>
              <CardContent sx={{ display: "flex", justifyContent: "right" }}>
                <AttachmentIcon size="small" sx={cardText} />{" "}
                <MoreHorizIcon size="small" sx={cardText} />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}
      <Divider sx = {{width: "100vw", height: "6px", color: "black"}}/>
      <Typography  sx = {{
        textAlign: "center",
        paddingY: "20px",
        fontWeight: 600,
        fontSize: "18px"
      }}>Open video library</Typography>
    </Box>
  );
};

export default Recordings;
