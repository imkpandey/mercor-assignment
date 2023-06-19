import { Box, CssBaseline, Divider } from "@mui/material";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Box sx={{display: "flex"}}>
          <Sidebar />
          <Divider orientation="vertical" />
        </Box>
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Topbar />
            <Canvas />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
