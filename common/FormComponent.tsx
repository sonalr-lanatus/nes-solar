import React from "react";
import Box from "@mui/material/Box/Box";
import {
  Container,
  TextField,
  InputLabel,
  Grid,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FormComponent({ title, setOpen }: any) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container>
        <Box
          sx={{
            backgroundColor: "white",
            minWidth: "500px",
            marginTop: "80px",
            color: "#203F69",
            boxShadow: "0 5px 50px rgb(0 0 0 / 10%)",
            height: "50%",
            borderRadius: "20px",
          }}
        >
          <Grid container sx={{ padding: "24px" }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6"></Typography>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  right: 8,
                  color: "black",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                  Name
                </InputLabel>
              </Grid>
              <Grid item xs={12} sx={{ alignItems: "center" }}>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                  Address
                </InputLabel>
              </Grid>
              <Grid item xs={12} sx={{ alignItems: "center" }}>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                  Mobile No.
                </InputLabel>
              </Grid>
              <Grid item xs={12} sx={{ alignItems: "center" }}>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                  Email
                </InputLabel>
              </Grid>
              <Grid item xs={12} sx={{ alignItems: "center" }}>
                <TextField variant="outlined" />
              </Grid>
            </Grid>

            <Grid item xs={3} mt={2}>
              <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <InputLabel sx={{ fontSize: "0.9rem", color: "black" }}>
                  Attach Electricity Bill
                </InputLabel>
              </Grid>
              <Grid item xs={12} sx={{ alignItems: "center" }}>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
            <Grid item xs={3} mt={4}>
              <Grid item xs={12} sx={{ alignItems: "center" }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#0075bb !important" }}
                >
                  Submit Your Interest
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
