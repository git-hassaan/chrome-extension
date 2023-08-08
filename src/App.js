import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import AddRequest from "./Pages/AddRequest";
import { Box } from "@mui/system";
import Recordings from "./Pages/Recordings";
import Notifications from "./Pages/Notifications";
import Settings from "./Pages/Settings";
import Index from "./Pages/Index";
function App() {
  return (
    <Box
      sx={{
        margin: "50px",
        width: "400px",
        height: "450px",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0,0,0, 0.5)",
      }}
    >
      <Index />
    </Box>
  );
}

export default App;
