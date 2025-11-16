import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Typography
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomerSessions() {
  const columns = [
    { field: "id", headerName: "Session ID", width: 140 },
    { field: "name", headerName: "Customer Name", width: 170 },
    { field: "channel", headerName: "Channel", width: 130 },
    { field: "status", headerName: "Status", width: 180 },
    { field: "sentiment", headerName: "Sentiment", width: 150 },
    { field: "intent", headerName: "Intent", width: 200 },
    { field: "rating", headerName: "Rate", width: 100 },
  ];

  const rows = [
    {
      id: "S1001",
      name: "Sarah Ahmed",
      channel: "WhatsApp",
      status: "Resolved by AI",
      sentiment: "Positive",
      intent: "Shipping & Delivery",
      rating: "5/5",
    },
    {
      id: "S1002",
      name: "Mohammed Ali",
      channel: "Email",
      status: "Escalated to Human",
      sentiment: "Angry",
      intent: "Payments & Billing",
      rating: "3/5",
    },
    {
      id: "S1003",
      name: "Reem Saad",
      channel: "Call",
      status: "Pending",
      sentiment: "Neutral",
      intent: "Refund & Return",
      rating: "—",
    },
    {
      id: "S1004",
      name: "Fahad Salem",
      channel: "WhatsApp",
      status: "Failed",
      sentiment: "Stressed",
      intent: "Shipping & Delivery",
      rating: "2/5",
    },
    {
      id: "S1005",
      name: "Nora Ali",
      channel: "Email",
      status: "Resolved by AI",
      sentiment: "Positive",
      intent: "Payments & Billing",
      rating: "4/5",
    },
    {
      id: "S1006",
      name: "Hadi Omar",
      channel: "Call",
      status: "Escalated to Human",
      sentiment: "Neutral",
      intent: "Refund & Return",
      rating: "—",
    },
  ];

  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        background: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          mb: 2,
          color: "#081C59",
        }}
      >
        Customer Sessions
      </Typography>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          sx={{
            width: "220px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />

        <TextField
          select
          label="Channel"
          variant="outlined"
          size="small"
          sx={{ width: "180px", borderRadius: "10px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
          <MenuItem value="WhatsApp">WhatsApp</MenuItem>
          <MenuItem value="Call">Call</MenuItem>
        </TextField>

        <TextField
          select
          label="Status"
          variant="outlined"
          size="small"
          sx={{ width: "200px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Resolved by AI">Resolved by AI</MenuItem>
          <MenuItem value="Escalated to Human">Escalated to Human</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Failed">Failed</MenuItem>
        </TextField>
      </Box>

      {/* Table */}
      <div style={{ height: 430, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{
            borderRadius: "12px",
            border: "1px solid #e3e9f3",
            background: "#ffffff",

            // Header
            "& .MuiDataGrid-columnHeaders": {
              background: "#F4F7FB",
              color: "#081C59",
              fontWeight: "700",
              borderBottom: "1px solid #dbe2ec",
            },

            // Header titles
            "& .MuiDataGrid-columnHeaderTitle": {
              fontSize: "14px",
              fontWeight: 700,
            },

            // Rows
            "& .MuiDataGrid-row": {
              fontSize: "14px",
              color: "#004386",
            },

            // Row hover
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#F0F7FF",
            },

            // Cells
            "& .MuiDataGrid-cell": {
              paddingLeft: "12px",
              paddingRight: "12px",
              borderBottom: "1px solid #f2f4f8",
            },

            // Pagination
            "& .MuiTablePagination-root": {
              color: "#081C59",
            },
          }}
        />
      </div>
    </Box>
  );
}
