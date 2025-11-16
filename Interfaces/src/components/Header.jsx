import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
  return (
    <Box
      sx={{
        height: "70px",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        borderBottom: "1px solid #eee",
      }}
    >
      {/* LEFT — Branding */}
      <Box>
        <Typography
          sx={{
            fontWeight: "700",
            color: "#081C59",
            fontSize: "22px",
            lineHeight: 1.1,
          }}
        >
          Wajeeh
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
            fontSize: "13px",
            marginTop: "2px",
          }}
        >
          Central Hub for Tickets, Agents, and Customer Interactions
        </Typography>
      </Box>

      {/* RIGHT — Search + Notification + Avatar */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          placeholder="Search"
          size="small"
          sx={{
            width: "250px",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#999" }} />
              </InputAdornment>
            ),
          }}
        />

        <IconButton>
          <NotificationsIcon sx={{ color: "#004386" }} />
        </IconButton>

        <Avatar
          src="https://i.pravatar.cc/300"
          sx={{
            width: 40,
            height: 40,
            border: "2px solid #00E1B3",
          }}
        />
      </Box>
    </Box>
  );
}
