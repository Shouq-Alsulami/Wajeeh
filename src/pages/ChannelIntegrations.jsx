import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Modal,
  TextField,
  Divider,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcon from "@mui/icons-material/Add";

export default function ChannelIntegrations() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ padding: "5px" }}>
      
      {/* HEADER */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "700",
          color: "#081C59",
          textAlign: "center",
          mb: 1,
        }}
      >
        Channel Integrations
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#004386",
          fontSize: "15px",
          marginBottom: "25px",
        }}
      >
        Connect your communication channels so the AI assistant can respond to customers
        across WhatsApp, Email, Social Media, and more.
      </Typography>

      {/* CONNECTED CHANNELS */}
      <Typography
        sx={{
          fontWeight: 700,
          color: "#081C59",
          mb: 1,
          fontSize: "17px",
        }}
      >
        Connected Channels
      </Typography>

      <Paper
        sx={{
          padding: "20px",
          borderRadius: "12px",
          background: "#E8FFF0",
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #00A884",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <WhatsAppIcon sx={{ fontSize: 40, color: "#00A884" }} />
          <Box>
            <Typography sx={{ fontWeight: 700, color: "#003566" }}>
              WhatsApp Business API
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#006B4F" }}>
              Connected · +966 55 123 4567
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          sx={{
            color: "#00A884",
            borderColor: "#00A884",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { borderColor: "#008F70", color: "#008F70" },
          }}
        >
          Manage
        </Button>
      </Paper>

      {/* ADD MORE CHANNELS */}
      <Typography
        sx={{
          fontWeight: 700,
          color: "#081C59",
          mb: 2,
          fontSize: "17px",
        }}
      >
        Add More Channels
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        
        {/* Add Channel Card */}
        <Paper
          onClick={() => setOpenModal(true)}
          sx={{
            width: 250,
            height: 150,
            borderRadius: "12px",
            border: "2px dashed #006BA7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#F5FAFF" },
          }}
        >
          <AddIcon sx={{ fontSize: 40, color: "#006BA7" }} />
          <Typography sx={{ color: "#003566", fontWeight: 600 }}>
            Add New Channel
          </Typography>
        </Paper>
      </Box>

      {/* CONNECT MODAL */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Typography sx={{ fontWeight: 700, mb: 2, color: "#081C59" }}>
            Connect a New Channel
          </Typography>

          <Typography sx={{ color: "#003566", mb: 2 }}>
            Choose a platform and enter required credentials.
          </Typography>

          <TextField
            fullWidth
            label="API Token"
            placeholder="Enter your channel API token"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Webhook URL"
            placeholder="https://your-server.com/webhook"
            sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 2 }} />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#006BA7",
              textTransform: "none",
              "&:hover": { backgroundColor: "#004F7D" },
            }}
          >
            Connect Channel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
