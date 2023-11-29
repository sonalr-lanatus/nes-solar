"use client";
import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  margin: "auto",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 200,
  height: 100,
  fontWeight: 400,
  fontSize: "16px",
  "&:hover": {
    fontWeight: 600,
    border: "1px solid #203F69",
    color: "#203F69",
    boxShadow: "0 20px 40px 0 rgba(0,0,0,.1)",
  },
}));
function Hero() {
  return (
    <>
      <div className="flex flex-col  py-16 lg:h-[65vh] lg:justify-end lg:pb-12 ">
        <Box
          sx={{
            flexGrow: 1,
            zIndex: 119,
            position: "absolute",
            left: "5%",
            top: "72%",
            width: "90%",
            height: "auto",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            // maxWidth="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid xs={2}>
              <Item>Residence Solar</Item>
            </Grid>
            <Grid xs={2.3}>
              <Item>Non-Residence Solar</Item>
            </Grid>
            <Grid xs={2.3}>
              <Item>Repair</Item>
            </Grid>
            <Grid xs={2.3}>
              <Item>O & M</Item>
            </Grid>
            <Grid xs={2}>
              <Item>Wind Solar Hybrid</Item>
            </Grid>
          </Grid>
        </Box>
        <div className="absolute top-20 left-0 h-[95vh] w-full">
          <div className="slide">
            <div
              style={{ backgroundImage: "url(/assets/New1.png)" }}
              //   style={{ backgroundImage: "url(/assets/new_image_1.jpg)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(/assets/New2.png)" }}
              //   style={{
              //     backgroundImage: "url(/assets/new_image_2.jpg)",
              //   }}
            ></div>
            <div
              style={{ backgroundImage: "url(/assets/New3.png)" }}
              //   style={{
              //     backgroundImage:
              //       "url(/assets/solar-battery-solar-panel-renewable-alternative-energy-concept-with-glowing-low-poly-panel-on-dark-blue-background-wireframe-low-poly-design-abstract-futuristic-illustratio.jpg)",
              //   }}
            ></div>
            <div
              style={{
                backgroundImage:
                  "url(/assets/RWE_Blog_Thema-Dunkelflaute_1340x590-1340x564.jpg.webp)",
              }}
            ></div>
            <div
              style={{
                backgroundImage: "url(/assets/new_image_1.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
    // </main>
  );
}

export default Hero;
