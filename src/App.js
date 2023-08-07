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
    <Box sx={{ width: "450px" }}>
      {/* <Box>
      <Navbar />
    </Box> */}
      {/* <Box sx = {{backgroundColor: "#E6E6E3", height: "100vh"}}> */}
      {/* <Homepage /> */}
      {/* <AddRequest /> */}
      {/* <Recordings /> */}
      {/* <Notifications /> */}
      {/* <Settings /> */}
      {/* </Box> */}
      <Index />
    </Box>
  );
}

export default App;
