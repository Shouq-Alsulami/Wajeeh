import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Modal,
  CircularProgress,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Customization() {
  const [files, setFiles] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);


    setFiles((prev) => [...prev, ...selectedFiles]);

    setOpenModal(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setOpenModal(false);
        setSuccess(false);
      }, 1500);
    }, 2000);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ padding: "5px" }}>
      {/* PAGE HEADER */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "700",
          color: "#081C59",
          textAlign: "center",
          mb: 1,
        }}
      >
        Customization
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#004386",
          fontSize: "15px",
          marginBottom: "25px",
        }}
      >
        Upload company-specific files to enhance the AI’s knowledge. 
        This data helps the model learn your tone, rules, workflows, and customer handling style.
      </Typography>

      {/* UPLOAD BOX */}
      <Paper
        sx={{
          padding: "25px",
          borderRadius: "12px",
          background: "#FFFFFF",
          mb: 3,
          textAlign: "center",
          border: "2px dashed #006BA7",
          boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 60, color: "#006BA7", mb: 1 }} />

        <Typography sx={{ fontWeight: 600, color: "#003566", mb: 1 }}>
          Drag & Drop your files here
        </Typography>

        <Typography sx={{ color: "#64748B", fontSize: "14px", mb: 2 }}>
          Supported: PDF, TXT, DOCX, CSV, JSON
        </Typography>

        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: "#006BA7",
            textTransform: "none",
            paddingX: 3,
            "&:hover": { backgroundColor: "#004F7D" },
          }}
        >
          Browse Files
          <input hidden type="file" multiple onChange={handleUpload} />
        </Button>
      </Paper>

      {/* UPLOADED FILES LIST */}
      {files.length > 0 && (
        <Paper
          sx={{
            padding: "20px",
            borderRadius: "12px",
            background: "#FFFFFF",
            boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
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
            Uploaded Files
          </Typography>

          <List>
            {files.map((file, index) => (
              <React.Fragment key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton onClick={() => removeFile(index)} sx={{ color: "#FF6B6B" }}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <InsertDriveFileIcon sx={{ color: "#006BA7", mr: 1 }} />
                  <ListItemText
                    primary={file.name}
                    secondary={`${(file.size / 1024).toFixed(1)} KB`}
                    primaryTypographyProps={{ fontSize: "14px", fontWeight: 600 }}
                    secondaryTypographyProps={{ fontSize: "12px", color: "#64748B" }}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}

      {/* UPLOAD MODAL */}
      <Modal open={openModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            bgcolor: "white",
            borderRadius: "12px",
            textAlign: "center",
            p: 4,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          {loading && (
            <>
              <CircularProgress sx={{ color: "#006BA7", mb: 2 }} />
              <Typography sx={{ fontWeight: 600, color: "#003566" }}>
                Uploading...
              </Typography>
            </>
          )}

          {success && (
            <>
              <CheckCircleIcon sx={{ fontSize: 60, color: "#00A884", mb: 1 }} />
              <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#081C59" }}>
                File Uploaded!
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
