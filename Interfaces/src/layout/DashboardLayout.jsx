import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#081C59",
          color: "#fff",
        }}
      >
        <Sidebar />
      </Box>

      {/*right */}
      <Box sx={{ marginLeft: "250px", width: "100%" }}>
        
        {/* Header */}
        <Box sx={{ position: "sticky", top: 0, zIndex: 10 }}>
          <Header />
        </Box>

        {/* Content */}
        <Box sx={{ padding: "20px" }}>{children}</Box>
      </Box>

    </Box>
  );
}
