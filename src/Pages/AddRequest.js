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
  Typography,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LabelOffTwoTone } from "@mui/icons-material";
const AddRequest = () => {
  const data = [
    {
      id: 1,
      label: "Label 1",
      linkURL: "https://example.com",
      numOfRecordings: 5,
      editAction: EditIcon,
      deleteAction: "DeleteIcon",
    },
    {
      id: 2,
      label: "Label 1",
      linkURL: "https://example.com",
      numOfRecordings: 5,
      editAction: "EditIcon",
      deleteAction: "DeleteIcon",
    },
    {
      id: 3,
      label: "Label 1",
      linkURL: "https://example.com",
      numOfRecordings: 5,
      editAction: "EditIcon",
      deleteAction: "DeleteIcon",
    },
    
  


  ];
  const cardText = { fontSize: "8px" };
  const cardHeaderText = { fontSize: "12px" };
  const cardGrid = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        flexDirection: "column",
        //height: "70vh",
        width: "100%",
        backgroundColor: "#E6E6E3",
        paddingBottom: "50px",
        
      }}
    >
        <Card
          sx={{
            width: "330px",
            marginTop: "30px",
            // marginY: "10px",
            // marginLeft: "10px",
            // marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            marginX: "auto",
            height: "40px",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <Typography sx = {cardHeaderText}>Label</Typography>
              </CardContent>
            </Grid>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <Typography sx = {cardHeaderText}>Link URL</Typography>
              </CardContent>
            </Grid>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <Typography sx = {cardHeaderText}>Recordings</Typography>
              </CardContent>
            </Grid>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
              <Typography sx = {cardHeaderText}>Actions</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      {data.map((item) => (
        <Card
          sx={{
            width: "330px",
            height: "40px",
            marginY: "10px",
            // marginLeft: "10px",
            // marginRight: "10px",
            marginX: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <Typography sx={cardText}>{item.label}</Typography>
              </CardContent>
            </Grid>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <Typography sx={cardText}>{item.linkURL}</Typography>
              </CardContent>
            </Grid>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <Typography sx={cardText}>{item.numOfRecordings}</Typography>
              </CardContent>
            </Grid>
            <Grid xs={3} sx={cardGrid}>
              <CardContent>
                <EditIcon size="small" sx={cardText} />{" "}
                <DeleteIcon size="small" sx={cardText} />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default AddRequest;
