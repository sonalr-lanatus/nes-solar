import React from "react";
import Box from "@mui/material/Box/Box";

export default function FormComponent() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          minWidth: "500px",
          marginTop: "20px",
          border: "1px solid #203F69",
          color: "#203F69",
          boxShadow: "0 20px 40px 0 rgba(0,0,0,.1)",
          height: "200px",
          margin: "auto",
        }}
      >
        Hello
      </Box>
    </div>
  );
}
