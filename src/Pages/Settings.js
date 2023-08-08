import { Typography, Checkbox, Box, Grid, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

const Settings = () => {
  const [settings, setSettings] = useState([
    {
      id: 1,
      label: "Display Notification",
      checkbox: false,
    },
    {
      id: 2,
      label: "Copy Link to Clipboard",
      checkbox: false,
    },
    {
      id: 3,
      label: "Show Recording Control",
      checkbox: false,
    },
    {
      id: 4,
      label: "Disable HD Recording",
      checkbox: false,
    },
    {
      id: 5,
      label: "Enable Notes Auto Scroll",
      checkbox: false,
    },
    {
      id: 6,
      label: "Mirror Camera",
      checkbox: false,
    },
    {
      id: 7,
      label: "Enable Light Recording",
      checkbox: false,
    },
    {
      id: 8,
      label: "Recording Preview",
      checkbox: false,
    },
  ]);

  const labelStyle = {
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    color: "grey",
    fontWeight: "bold",
  };

  const handleCheckBox = (id) => {
    setSettings((prevSettings) => {
      return prevSettings.map((setting) =>
        setting.id === id
          ? { ...setting, checkbox: !setting.checkbox }
          : setting
      );
    });
  };
  return (
    <Container
      sx={{
        background: "white",
        height: "363px",
        borderRadius: "0 0 20px 20px",
      }}
    >
      <Box sx={{ paddingX: "35px" }}>
        <Typography
          sx={{
            fontWeight: "800",
            color: "grey",
            paddingY: "5px",
            fontSize: "12px",
          }}
        >
          Recoding Prefrences
        </Typography>
        <Grid container spacing={0}>
          {settings &&
            settings.map((setting, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: index % 2 === 1 ? "3px" : -1.2,
                    height: "23px",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCheckBox(setting.id)}
                >
                  <Box>
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 17,
                        },
                        "&.Mui-checked": {
                          color: "#6059fd",
                        },
                      }}
                      checked={setting.checkbox}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      {setting.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ paddingX: "35px", marginTop: "4%" }}>
        <Typography
          sx={{
            fontWeight: "800",
            color: "grey",
            fontSize: "12px",
          }}
        >
          Keyboard Shortcuts
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "7px",
          }}
        >
          <Box sx={{ display: "flex", gap: 6 }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={labelStyle}>Pause = Ctrl+Shift+1</Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: "5px" }}>
                <Typography sx={labelStyle}>Stop = Ctrl+Shift+2</Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={labelStyle}>Restart = Ctrl+Shift+2</Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: "5px" }}>
                <Typography
                  sx={{
                    fontSize: "10px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6059fd",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                  <LaunchIcon sx={{ padding: "2%", fontSize: "17px" }} />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingX: "35px", marginTop: "4%" }}>
        <Typography
          sx={{
            fontWeight: "800",
            color: "grey",
            fontSize: "12px",
          }}
        >
          Help & Support
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "7px",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              alignItems: "center",
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Having problems? Try reloading Konvey or updating the browser to the
            latest version.{" "}
            <span
              style={{
                color: "#6059fd",
                cursor: "pointer",
                textAlign: "center",
                alignItems: "cetner",
              }}
            >
              Email support here.{" "}
              {/* <LaunchIcon sx={{ padding: "1%", fontSize: "17px" }} /> */}
            </span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingX: "35px", marginTop: "4%" }}>
        <Box
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "flex-start",
            height: "40px",
          }}
        >
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#6059fd", textTransform: "none" }}
          >
            Reload
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              borderColor: "#6059fd",
              color: "#6059fd",
              fontSize: "14px",
              whiteSpace: "nowrap",
              textTransform: "none",
            }}
          >
            Help Center
          </Button>
          <Typography
            sx={{
              fontSize: "10px",
              display: "flex",
              alignItems: "flex-end",
              color: "grey",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              textTransform: "none",
            }}
          >
            {" "}
            Version 3.13.20
          </Typography>
        </Box>
        {/* <Box sx={{ backgroundColor: "white", marginTop: "10px" }}>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "spaceBetween",
              marginLeft: "65px",
              paddingBottom: "10px",
              gap: "100px",
            }}
          >
            <Typography sx={labelStyle}> konveyteam@gmail.com</Typography>
            <Button variant="contained">Signout</Button>
          </Box>
        </Box> */}
      </Box>
    </Container>
  );
};

export default Settings;
