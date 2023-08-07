import { ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import React from "react";
import Button from '@mui/material/Button';
const Settings = () => {
  let data = [
    {
      text: "Display Notification",
      checkbox: false,
    },
    {
      text: "Copy Link to Clipboard",
      checkbox: false,
    },
    {
      text: "Show Recording Control",
      checkbox: false,
    },
    {
      text: "Disable HD Recording",
      checkbox: false,
    },
    {
      text: "Enable Notes Auto Scroll",
      checkbox: false,
    },
    {
      text: "Mirror Camera",
      checkbox: false,
    },
    {
      text: "Enable Light Recording",
      checkbox: false,
    },
    {
      text: "Recording Preview",
      checkbox: false,
    },
  ];
  const textStyle = {
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    color: "grey",
  };
  return (
    <Container maxWidth="sm" sx={{ background: "white", height: "100%" }}>
      <Typography
        sx={{
          fontWeight: "800",
          color: "grey",
          textAlign: "left",
          marginLeft: "65px",
          paddingTop: "5px",
          fontSize: "12px",
        }}
      >
        Recoding Prefrences
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <Box sx={{}}>
            <Box sx={{ display: "flex", margin: 0, padding: 0 }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography alignItems="center" sx={textStyle}>
                Display Notification
              </Typography>
              </ListItem>
            </Box>
            <Box sx={{ display: "flex" , margin: 0, padding: 0 }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Show recording controls</Typography>
              </ListItem>
            </Box>
            <Box sx={{ display: "flex"  , margin: 0, padding: 0 }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Enable nots auto scroll</Typography>
              </ListItem>
            </Box>
            <Box sx={{ display: "flex"  , margin: 0, padding: 0  }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Enable lite recording</Typography>
              </ListItem>
            </Box>
          </Box>
          <Box sx={{}}>
            <Box sx={{ display: "flex"   , margin: 0, padding: 0 }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Copy link to clipboard</Typography>
              </ListItem>
            </Box>
            <Box sx={{ display: "flex" }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Disable HD recording</Typography>
              </ListItem>
            </Box>
            <Box sx={{ display: "flex" }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Mirror Camera</Typography>
              </ListItem>
            </Box>
            <Box sx={{ display: "flex" }}>
            <ListItem disablePadding>
              <Checkbox size="small" />{" "}
              <Typography sx={textStyle}>Recording preview</Typography>
              </ListItem>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: "800",
          color: "grey",
          textAlign: "left",
          marginLeft: "65px",
          paddingTop: "15px",
          fontSize: "12px",
        }}
      >
        Keyboard Shortcuts
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "left", marginLeft: "65px", marginTop: "10px" }}>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <Box sx={{}}>
            <Box sx={{ display: "flex", }}>
              <Typography sx={textStyle}>Pause = Cntrl + Shift + 1</Typography>
            </Box>
            <Box sx={{ display: "flex",marginTop: "10px" }}>
              <Typography sx={textStyle}>Stop = Cntrl + Shift + 2</Typography>
            </Box>
          </Box>
          <Box sx={{}}>
            <Box sx={{ display: "flex" }}>
              <Typography sx={textStyle}>
                Restart = Cntrl + Shift + 2
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: "10px", }}>
              <Typography sx={textStyle}>Learn More</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: "800",
          color: "grey",
          textAlign: "left",
          marginLeft: "65px",
          paddingTop: "15px",
          fontSize: "12px",
        }}
      >
        Help & Support
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "left", marginLeft: "65px", marginTop: "10px" }}>
       
        <Typography sx={textStyle}> Having problems? Try reloading Vidyard or updating the browser to the latest version. Email support here.</Typography>
      </Box>
      <Box sx = {{marginLeft: "65px",  marginTop: "10px", gap: "8px", display: "flex", justifyContent: 'spaceBetween'}}>
        <Button variant = "contained">Reload</Button>
        <Button variant = "outlined">Help center</Button>
        <Box sx = {{marginTop: "20px"}}><Typography sx={textStyle}> Version 3.13.20</Typography></Box>
        
      </Box>
      <Box sx = {{backgroundColor: "white", marginTop: "10px"}}>
      <Typography
        sx={{
          fontWeight: "800",
          color: "grey",
          textAlign: "left",
          marginLeft: "65px",
          paddingTop: "15px",
          fontSize: "12px",
        }}
      >
        Account
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "spaceBetween", marginLeft: "65px", paddingBottom: "10px",  gap: "100px",  }}>
       
       <Typography sx={textStyle}> konveyteam@gmail.com</Typography>
       <Button variant = "contained">Signout</Button>
     </Box>
      </Box>
    </Container>
  );
};

export default Settings;
