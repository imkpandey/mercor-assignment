import {
  Box,
  CssBaseline,
  Divider,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Box sx={{ display: "flex" }}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
