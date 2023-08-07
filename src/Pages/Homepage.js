import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import ToggleButton from "../Components/ToggleButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const Homepage = () => {
  return (
    <div>
      
      <Typography sx={{ fontSize: 32, textAlign: "center", paddingTop: "20px" }}>
        Record a video
      </Typography>
      <ToggleButton btnName={"Screen"} />
      <ToggleButton btnName={"Camera"} />
      <ToggleButton btnName={"Screen + Cam"} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          startIcon={<MicIcon />}
          sx={{
            borderRadius: "50px",
            border: "none",
            color: "black",
            backgroundColor: "#CCEFFF",
            textTransform: "none",
            height: "50px",
            width: "270px",
          }}
        >
          <Typography> Defalut - Microphone </Typography>

          <Box
            sx={{
              background: "#6a5acd",
              color: "white",
              borderRadius: "8px",
              paddingX: "6px",
              paddingY: "4px",
              marginY: "4px",
              marginX: "6px",
            }}
          >
            On
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          marginBottom: "40px",
        }}
      >
        <Button
          variant="outlined"
          startIcon={
            <RadioButtonCheckedIcon
              fontSize="large"
              style={{
                fontSize: "50px",
                color: "white",
              }}
            />
          }
          sx={{
            borderRadius: "50px",
            border: "none",
            color: "white",
            backgroundColor: "#6a5acd",
            textTransform: "none",
            height: "60px",
            width: "280px",
          }}
        >
          <Typography sx={{ fontSize: "22px" }}> Start Recording </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Homepage;
