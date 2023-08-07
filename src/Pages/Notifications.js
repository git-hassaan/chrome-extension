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
  CardHeader,
  Grid,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Notifications = () => {
  const data = [
    {
      name: "Person 1",
      desc: "Konvey homepage recording",
      date: "2023-07-28",
    },
    {
      name: "Person 1",
      desc: "Konvey homepage recording",
      date: "2023-07-28",
    },
    {
      name: "Person 1",
      desc: "Konvey homepage recording",
      date: "2023-07-28",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "350px",
        height: "100%",
        boxShadow: "none",
        paddingBottom: "50px",
      }}
    >
      {data.map((item) => (
        <Card sx = {{border: "none", boxShadow: "none",}}>
          <Grid container>
            <Grid xs={2}>
              <CardHeader
                avatar=
                {
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
              />
            </Grid>
            <Grid xs={10}>
              <CardContent>
                <Typography sx = {{fontSize: "12px"}}>{item.name}</Typography>
                <Typography sx = {{fontSize: "10px"}}>Watched <span style = {{color: "blue"}}>{item.desc}</span></Typography>
                <Typography sx = {{fontSize: "10px"}}>{item.date}</Typography>
              </CardContent>
            </Grid>
          </Grid>
          
        </Card>
      ))}
    </Box>
  );
};

export default Notifications;
