import React, { useState } from "react"; 
import { Routes, Route, useLocation } from "react-router-dom"; 
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import Widget from "./scenes/Widget"; 
import Sign from "./scenes/Sign"; 

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"; 

function App() {
  const [theme, colorMode] = useMode(); 
  const [isSidebar, setIsSidebar] = useState(true); 
  const location = useLocation(); 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* Conditionally render Sidebar and Topbar based on the route */}
          {location.pathname !== "/" && location.pathname !== "/reg" && (
            <Sidebar isSidebar={isSidebar} />
          )}
          <main className="content">
            {location.pathname !== "/" && location.pathname !== "/reg" && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}
            <Routes>
              <Route path="/" element={<Widget />} />
              <Route path="/reg" element={<Sign />} />

              <Route path="/home" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
