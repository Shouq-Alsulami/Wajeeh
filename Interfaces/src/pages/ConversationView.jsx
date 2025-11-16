import React, { useState, useRef, useEffect } from "react";
import {Link } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";

export default function ConversationView() {
  const bottomRef = useRef(null);
    

  const [humanMessage, setHumanMessage] = useState("");

  const [messages, setMessages] = useState([
    { id: 1, sender: "customer", text: "Hello, I need help with a return request." },
    { id: 2, sender: "ai", text: "Sure! Could you provide your order number please?" },
    { id: 3, sender: "customer", text: "Yes, it’s order #55631." },
    { id: 4, sender: "ai", text: "Thank you. What seems to be the issue with the item?" },
    { id: 5, sender: "customer", text: "The product arrived damaged and I want a refund." },
    { id: 6, sender: "ai", text: "I’m sorry to hear that. Can you describe the damage?" },
    { id: 7, sender: "customer", text: "The left side is broken and the screen is cracked." },
    { id: 8, sender: "ai", text: "I understand. Let me check your eligibility for a refund." },
    { id: 9, sender: "ai", text: "Please wait while I review your order policy…" },
    { id: 10, sender: "customer", text: "Okay, I'm waiting." },
    { id: 11, sender: "customer", text: "Hello? I’ve been waiting for a while." },
    { id: 12, sender: "customer", text: "Is anyone there? This is urgent." },
    { id: 13, sender: "ai", text: "I'm still processing your request, thank you for your patience." },
    { id: 14, sender: "customer", text: "You’re not answering. I want to speak to a human." },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!humanMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "human",
      text: humanMessage,
    };
    setMessages((prev) => [...prev, newMsg]);
    setHumanMessage("");
  };

  return (
    <Box sx={{ padding: "5px" }}>

      {/* Back Button */}
      <Box sx={{ textAlign: "left", mb: 2 }}>
        <Link to="/EscalationCenter" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: "#006BA7",
              borderColor: "#006BA7",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": { borderColor: "#004F7D", color: "#004F7D" },
            }}
          >
            Back to Escalation List
          </Button>
        </Link>
      </Box>

{/* SESSION DETAILS - FULL WIDTH DISTRIBUTED CARDS */}
<Paper
  sx={{
    padding: "18px",
    borderRadius: "12px",
    background: "#FFFFFF",
    mb: 3,
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  }}
>
  <Typography
    sx={{
      fontWeight: 700,
      color: "#081C59",
      mb: 2,
      fontSize: "16px",
    }}
  >
    Session Overview
  </Typography>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
      width: "100%",
    }}
  >
    {[
      { label: "Customer", value: "Ahmed Ali", icon: "🧑" },
      { label: "Channel", value: "WhatsApp", icon: "💬" },
      { label: "Sentiment", value: "Angry", icon: "😠" },
      { label: "Intent", value: "Refund & Return", icon: "🎯" },
      { label: "Reason", value: "AI Policy Limitation", icon: "⚠️" },
    ].map((item, idx) => (
      <Box
        key={idx}
        sx={{
          flex: 1,                    
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #E2E8F0",
          background: "#FAFCFF",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          minHeight: "70px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>{item.icon}</Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#64748B",
            }}
          >
            {item.label}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#081C59",
              lineHeight: 1.2,
            }}
          >
            {item.value}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Paper>




      {/* AI SUMMARY */}
      <Paper
        sx={{
          padding: "18px",
          borderRadius: "12px",
          background: "#FFFFFF",
          mb: 3,
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Typography sx={{ fontWeight: 700, color: "#081C59", mb: 1 }}>
          AI Summary
        </Typography>
        <Typography sx={{ color: "#003566", lineHeight: 1.6 }}>
          The customer requested a refund for order #55631 due to a damaged product.
          AI collected information correctly but failed to complete the refund flow.
          Customer sentiment dropped to **negative**, causing escalation.
        </Typography>
      </Paper>

      {/* CHAT BOX */}
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          borderRadius: "12px",
          maxHeight: "50vh",
          overflowY: "auto",
          background: "#F8FAFF",
          mb: 2,
        }}
      >
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: "flex",
              justifyContent:
                msg.sender === "customer"
                  ? "flex-start"
                  : msg.sender === "ai"
                  ? "flex-end"
                  : "flex-end",
              mb: 2,
            }}
          >
            <Box
              sx={{
                maxWidth: "70%",
                padding: "12px 16px",
                borderRadius: "12px",
                fontSize: "15px",
                lineHeight: 1.4,
                color:
                  msg.sender === "customer"
                    ? "#003566"
                    : msg.sender === "ai"
                    ? "white"
                    : "#fff",
                background:
                  msg.sender === "customer"
                    ? "#DCEBFF"
                    : msg.sender === "ai"
                    ? "#006BA7"
                    : "#00A884",
              }}
            >
              {msg.text}
            </Box>
          </Box>
        ))}

        <div ref={bottomRef}></div>
      </Paper>

      {/* HUMAN SEND BOX */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          background: "white",
          padding: "12px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <TextField
          fullWidth
          placeholder="Write a message..."
          value={humanMessage}
          onChange={(e) => setHumanMessage(e.target.value)}
        />
        <IconButton
          onClick={handleSend}
          sx={{
            background: "#006BA7",
            color: "white",
            "&:hover": { background: "#004F7D" },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
