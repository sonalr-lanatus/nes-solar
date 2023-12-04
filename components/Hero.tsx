"use client";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import styled from "@mui/system/styled";
import DrawerComponent from "@/common/DrawerComponent";
import FormComponent from "@/common/FormComponent";

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
  width: 150,
  textAlign: "center",
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
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <div className="flex flex-col py-16 lg:h-[65vh] lg:justify-end lg:pb-12 ">
        <div className="items-center text-center flex flex-col h-full justify-center w-full z-10 relative ">
          <h1 className=" font-bold mt-0 mr-0 mb-10 text-center font-serif text-3xl">
            One Stop Solutions for Design,Execution and O&M
          </h1>

          <div className="flex items-center">
            <div className="text-lg ">
              <p>We</p>
            </div>

            <div
              className="before:border-l-4 before:border-white before:border-solid before:rounded-md   items-center border-x-white border-white border-2 border-solid rounded-md border-t-0 flex min-w-190 relative pt-1 pr-4 pl-4 pb-1.5 mt-0 mb-0 mr-4 ml-1"
              style={{ width: "190px", height: "46px" }}
            >
              <div className=" before:mr-2.5  items-center  flex text-lg  left-1 absolute right-1 -top-3.5   after:ml-3 ">
                Action
              </div>

              <div className="typewriter   text-yellow-400 text-lg font-medium max-w-full pr-2"></div>
            </div>

            <div className=" text-lg">
              <p>solar energy.</p>
            </div>
          </div>
        </div>
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
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid xs={2}>
              <Item onClick={toggleDrawer(true)}>Residence Solar</Item>
            </Grid>
            <Grid xs={1.5}>
              <Item>Non-Residence Solar</Item>
            </Grid>
            <Grid xs={2}>
              <Item>Wind Solar Hybrid</Item>
            </Grid>
            <Grid xs={1.5}>
              <Item>Repair</Item>
            </Grid>
            <Grid xs={2}>
              <Item>O & M</Item>
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
      <FormComponent />
    </>
  );
}

export default Hero;
