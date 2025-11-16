import React from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export default function EscalationCenter() {
  const rows = [
    {
      id: 1,
      sessionId: "SESS-10122",
      customer: "Ahmed Ali",
      channel: "WhatsApp",
      status: "Escalated",
      sentiment: "Angry",
      intent: "Refund & Return",
      reason: "AI Policy Limitation",
    },
    {
      id: 2,
      sessionId: "SESS-10167",
      customer: "Sara Khalid",
      channel: "Email",
      status: "Pending",
      sentiment: "Stressed",
      intent: "Payments & Billing",
      reason: "Sentiment Spike",
    },
    {
      id: 3,
      sessionId: "SESS-10201",
      customer: "Nora",
      channel: "Call",
      status: "Resolved",
      sentiment: "Neutral",
      intent: "Shipping & Delivery",
      reason: "Missing Knowledge",
    },
    {
      id: 4,
      sessionId: "SESS-10244",
      customer: "Maha",
      channel: "WhatsApp",
      status: "Escalated",
      sentiment: "Angry",
      intent: "Refund & Return",
      reason: "Unsupported Intent",
    },
    {
      id: 5,
      sessionId: "SESS-10311",
      customer: "Khaled",
      channel: "Email",
      status: "Failed",
      sentiment: "Neutral",
      intent: "Payments & Billing",
      reason: "AI Misunderstanding",
    },
    {
      id: 6,
      sessionId: "SESS-10355",
      customer: "Reem",
      channel: "Call",
      status: "Resolved",
      sentiment: "Positive",
      intent: "Shipping & Delivery",
      reason: "Missing Data",
    },
  ];

  const columns = [
    { field: "sessionId", headerName: "Session ID", flex: 1.1, headerClassName: "dg-header" },
    { field: "customer", headerName: "Customer Name", flex: 1.2, headerClassName: "dg-header" },
    { field: "channel", headerName: "Channel", flex: 1, headerClassName: "dg-header" },
    { field: "status", headerName: "Status", flex: 1, headerClassName: "dg-header" },
    { field: "sentiment", headerName: "Sentiment", flex: 1, headerClassName: "dg-header" },
    { field: "intent", headerName: "Intent", flex: 1.4, headerClassName: "dg-header" },
    { field: "reason", headerName: "Escalation Reason", flex: 1.6, headerClassName: "dg-header" },
    {
    field: "view",
    headerName: "View",
    flex: 0.5,
    headerClassName: "dg-header",
    renderCell: (params) => (
        <Link to={`/conversation/${params.row.sessionId}`}
        state={{ row: params.row }}>
        <IconButton sx={{ color: "#006BA7" }}>
            <VisibilityIcon />
        </IconButton>
        </Link>
    ),
    },
  ];

  return (
    <Box sx={{ padding: "5px" }}>
      
      {/* PAGE HEADER */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "700",
          color: "#081C59",
          textAlign: "center",
          marginBottom: "4px",
        }}
      >
        Escalation Center
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#004386",
          fontSize: "15px",
          marginBottom: "25px",
        }}
      >
        This page helps you review, analyze, and resolve conversations that the AI was unable to handle.
        Track escalation causes, customer sentiment, and agent resolutions to improve system performance.
      </Typography>

      {/* FILTERS CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          background: "rgba(255,255,255,0.9)",
          padding: "18px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* DATE RANGE */}
        <TextField
          select
          label="Date Range"
          defaultValue="this_week"
          sx={{ minWidth: "180px" }}
        >
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="this_week">This Week</MenuItem>
          <MenuItem value="this_month">This Month</MenuItem>
        </TextField>

        {/* CHANNEL */}
        <TextField
          select
          label="Channel"
          defaultValue=""
          sx={{ minWidth: "180px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="whatsapp">WhatsApp</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="call">Call</MenuItem>
        </TextField>

        {/* SENTIMENT */}
        <TextField
          select
          label="Customer Sentiment"
          defaultValue=""
          sx={{ minWidth: "200px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="angry">Angry</MenuItem>
          <MenuItem value="stressed">Stressed</MenuItem>
          <MenuItem value="neutral">Neutral</MenuItem>
          <MenuItem value="positive">Positive</MenuItem>
        </TextField>

        {/* ESCALATION REASON */}
        <TextField
          select
          label="Escalation Reason"
          defaultValue=""
          sx={{ minWidth: "220px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="ai_confusion">AI Misunderstanding</MenuItem>
          <MenuItem value="missing_data">Missing Knowledge</MenuItem>
          <MenuItem value="sentiment_spike">Sentiment Spike</MenuItem>
          <MenuItem value="unsupported_intent">Unsupported Intent</MenuItem>
        </TextField>

        {/* STATUS */}
        <TextField
          select
          label="Agent Status"
          defaultValue=""
          sx={{ minWidth: "180px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="resolved">Resolved</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="failed">Failed</MenuItem>
        </TextField>

        {/* APPLY BUTTON */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#006BA7",
            fontWeight: "600",
            textTransform: "none",
            height: "40px",
            mt: "5px",
            "&:hover": { backgroundColor: "#004F7D" },
          }}
        >
          Apply Filters
        </Button>
      </Box>

      {/* ================= TABLE SECTION ================= */}
      <Box
        sx={{
          height: 520,
          width: "100%",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "15px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          sx={{
            border: "none",
            "& .dg-header": {
              backgroundColor: "#F5F8FF",
              color: "#081C59",
              fontWeight: 700,
              fontSize: "14px",
            },
            "& .MuiDataGrid-cell": {
              fontSize: "14px",
              color: "#003566",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(0,107,167,0.06)",
            },
          }}
        />
      </Box>

    </Box>
  );
}
