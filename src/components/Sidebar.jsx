import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Logo from "../assets/logo.png";
import TuneIcon from "@mui/icons-material/Tune";
import HubIcon from "@mui/icons-material/Hub";

const menu = [
  { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { title: "Escalation Center", icon: <WarningAmberIcon />, path: "/EscalationCenter" },
  { title: "Customization", icon: <TuneIcon />, path: "/customization" },
  { title: "Integrations", icon: <HubIcon />, path: "/integrations" },
];

export default function Sidebar() {
  const location = useLocation(); 

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#071F3D",
        color: "white",
        padding: "20px 0",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "130px",
            height: "auto",
            objectFit: "contain",
            opacity: 0.95,
          }}
        />
      </Box>

      {/* MENU ITEMS */}
      <List>
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  mx: 2,
                  mb: 1,
                  borderRadius: "8px",

                  background: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "transparent",

                  "&:hover": {
                    background: "rgba(255,255,255,0.10)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  sx={{ color: "white", fontSize: "14px" }}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
