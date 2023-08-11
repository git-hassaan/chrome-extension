import "./App.css";
import { Box } from "@mui/system";
import Index from "./Pages/Index";
function App() {
  return (
    <Box
      sx={{
        margin: "50px",
        width: "400px",
        height: "450px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0, 0.5)",
      }}
    >
      <Index />
    </Box>
  );
}

export default App;
