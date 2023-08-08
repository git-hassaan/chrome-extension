import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Homepage = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "rgba(0,100,240,0.7)",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#c8d8e3",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <div>
      <Typography
        sx={{ fontSize: 28, textAlign: "center", paddingTop: "20px" }}
      >
        Start Your Recording
      </Typography>

      {/* Radio button */}
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Screen"
          />{" "}
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Camera"
          />{" "}
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            label="Screen + Cam"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
        <Button
          variant="outlined"
          startIcon={<MicIcon />}
          sx={{
            borderRadius: "50px",
            border: "none",
            color: "black",
            backgroundColor: "#c8d8e3",
            textTransform: "none",
            height: "50px",
            width: "270px",
          }}
        >
          <Typography> Default - Microphone </Typography>

          <Box
            sx={{
              background: "rgba(0,100,240,0.7)",
              color: "white",
              borderRadius: "8px",
              paddingX: "10px",
              paddingY: "3px",
              marginY: "4px",
              marginX: "6px",
            }}
          >
            <b>On</b>
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
          sx={{
            borderRadius: "50px",
            border: "none",
            color: "white",
            backgroundColor: "rgba(0,100,240,0.7)",
            textTransform: "none",
            height: "60px",
            width: "280px",
            "&:hover": {
              color: "#6059fd",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
            }}
          >
            {" "}
            Start Recording{" "}
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Homepage;
