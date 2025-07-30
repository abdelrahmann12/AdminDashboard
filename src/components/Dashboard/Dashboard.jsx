import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header/Header";

export default function Dashboard() {
  const theme = useTheme();
  return (
    <div>
      <Header title={"Dashboard"} subTitle={"welcome to your dashboard"} ></Header>

      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{
            marginBottom: "10px",
            padding: "6px 8px",
            textTransform: "capitalize",
          }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined></DownloadOutlined>
          Download Reports
        </Button>
      </Box>

      <Row1></Row1>
      <Row2></Row2>
      <Row3></Row3>
    </div>
  );
}
