import { Box, Typography, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import RecordRTC from "recordrtc";

const Homepage = () => {
  const [isScreen, setIsScreen] = useState(false);
  const [isCam, setIsCam] = useState(true);
  const [isCamAndScreen, setIsCamAndScreen] = useState(false);
  const [microPhone, setMicroPhone] = useState(false);

  const [recording, setRecording] = useState(false);
  const [recordInstance, setRecordInstance] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

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
        color: "rgba(0, 100, 240, 0.7)",
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

  const handleScreenToggle = () => {
    setIsScreen((prevIsScreen) => !prevIsScreen);
  };

  const handleCamToggle = () => {
    setIsCam((prevIsCam) => !prevIsCam);
  };

  const handleCamAndScreenToggle = () => {
    setIsCamAndScreen((prevIsCamAndScreen) => !prevIsCamAndScreen);
  };
  const handleStartRecording = async () => {
    if (!recording) {
      const isRecordingScreen = isScreen || isCamAndScreen;
      const isRecordingCam = isCam || isCamAndScreen;

      if (isRecordingScreen && !isRecordingCam) {
        // Request screen stream
        try {
          const screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
          });

          const recorder = new RecordRTC(screenStream, {
            type: "video",
            mimeType: "video/webm",
          });

          recorder.startRecording();

          setRecording(true);
          setRecordInstance(recorder);
        } catch (error) {
          console.error("Error accessing screen media:", error);
        }
      } else if (!isRecordingScreen && isRecordingCam) {
        // Request camera stream
        const constraints = {
          video: true,
          audio: microPhone,
        };

        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);

          const recorder = new RecordRTC(stream, {
            type: "video",
            mimeType: "video/webm",
          });

          recorder.startRecording();

          setRecording(true);
          setRecordInstance(recorder);
        } catch (error) {
          console.error("Error accessing camera media:", error);
        }
      } else if (isRecordingScreen && isRecordingCam) {
        // Request both camera and screen streams
        const constraints = {
          video: true,
          audio: microPhone,
        };

        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          const screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
          });

          const combinedStream = new MediaStream([
            ...stream.getTracks(),
            ...screenStream.getTracks(),
          ]);

          const recorder = new RecordRTC(combinedStream, {
            type: "video",
            mimeType: "video/webm",
          });

          recorder.startRecording();

          setRecording(true);
          setRecordInstance(recorder);
        } catch (error) {
          console.error("Error accessing media devices:", error);
        }
      } else {
        console.warn("No recording options selected.");
      }
    } else {
      // Stop recording
      setShowVideo(true);
      recordInstance.stopRecording(() => {
        // Get the recorded blob
        const recordedBlob = recordInstance.getBlob();

        // Create a URL for the blob
        const videoUrl = URL.createObjectURL(recordedBlob);

        // Display the recorded video
        const videoElement = document.createElement("video");
        videoElement.src = videoUrl;
        videoElement.controls = true; // Add video controls
        videoElement.style.width = "100%"; // Set the video width

        // Append the video element to your component's DOM
        const videoContainer = document.getElementById("video-container");
        videoContainer.innerHTML = ""; // Clear existing content
        videoContainer.appendChild(videoElement);

        // Reset state variables
        setRecording(false);
        setRecordInstance(null);
      });
    }
  };

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
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={isScreen}
                onChange={handleScreenToggle}
              />
            }
            label="Screen"
          />
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={isCam}
                onClick={handleCamToggle}
              />
            }
            label="Camera"
          />
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={isCamAndScreen}
                onChange={handleCamAndScreenToggle}
              />
            }
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
          onClick={() => setMicroPhone(!microPhone)}
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
            <b>{microPhone ? "On" : "Off"}</b>
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
          disabled={!isCam && !isCamAndScreen && !isScreen}
          onClick={handleStartRecording}
        >
          <Typography
            sx={{
              fontSize: "22px",
            }}
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </Typography>
        </Button>
      </Box>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={showVideo}
        onClose={() => setShowVideo(false)}
      >
        <div
          id="video-container"
          style={{
            width: "50%",
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </Modal>
    </div>
  );
};

export default Homepage;
