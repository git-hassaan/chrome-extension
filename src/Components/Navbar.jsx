import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, Grid, Divider } from "@mui/material";
const Navbar = ({ handleIconClick }) => {
  let navIcons = [
    {
      icon: VideocamIcon,
      label: "video icon",
      //onClick: () => handleIconClick("VideocamIcon"),
      onClick: () => {
        alert("Screen recording request");
      },
    },
    {
      icon: ControlPointIcon,
      label: "control icon",
      onClick: () => handleIconClick("addRecording"),
    },

    {
      icon: VideoLibraryIcon,
      label: "recorded vids icon",
      onClick: () => handleIconClick("playRecording"),
    },
    {
      icon: NotificationsIcon,
      label: "notification icon",
      onClick: () => handleIconClick("notifications"),
    },
    {
      icon: SettingsIcon,
      label: "settings icon",
      onClick: () => handleIconClick("settings"),
    },
  ];
  //   const handleIconClick = (iconName) => {
  //     console.log("this icone is clicked! ", iconName);
  //   };
  return (
    <Box sx={{ width: "450px" }}>
      <Grid container sx={{ padding: "15px" }}>
        <Grid xs={6}>
          <img
            src="https://dashboard.konvey.app/img/logo.35c8c136.png"
            style={{ width: "150px", height: "50px" }}
            onClick={() => handleIconClick("homepage")}
          />
        </Grid>
        <Grid xs={6}>
          {navIcons.map((iconData, index) => (
            <iconData.icon
              onClick={iconData.onClick}
              sx={{
                color: "black",
                padding: "5px",
                paddingTop: "12px",
                fontSize: "32px",
              }}
            />
          ))}
        </Grid>
      </Grid>
      {/* <Divider sx = {{width: "100vw", height: "1px", color: "black"}}/> */}
    </Box>
  );
};

export default Navbar;
