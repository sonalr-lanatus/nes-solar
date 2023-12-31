"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import styled from "@mui/system/styled";
import { Tooltip } from "@mui/material";
import EnquireFormComponent from "./common/EnquireFormComponent";
import CounterSection from "./CounterSection";
import Marquee from "react-fast-marquee";
import { imageData } from "../data/About/ImageData";
import { imageData2 } from "../data/About/ImageData2";

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
  fontWeight: 500,
  fontSize: "16px",
  color: "#203F69",
  "&:hover": {
    fontWeight: 600,
    border: "1px solid #203F69",
    color: "#203F69",
    boxShadow: "0 20px 40px 0 rgba(0,0,0,.1)",
  },
}));

const TILES = [
  "Residence Solar",
  "Non-Residence Solar",
  "Wind Solar Hybrid",
  "Cleaning System",
  "O & M",
];

function Hero() {
  const [open, setOpen] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [tiles, setTiles] = useState(
    TILES.map((tile) => ({ label: tile, hidden: false }))
  );
  const toggleDrawer = (open: any, event: any) => {
    const interactedTile = event.target.outerText;
    setFormTitle(interactedTile);
    setTiles((prev: any) =>
      prev.map((tile: any) => {
        if (tile.label !== interactedTile) {
          return { ...tile, hidden: true };
        } else {
          return tile;
        }
      })
    );
    setOpen(open);
  };

  useEffect(() => {
    !open &&
      setTiles((prev) => prev.map((tile) => ({ ...tile, hidden: open })));
  }, [open]);

  return (
    <>
      <div className="flex flex-col py-16 lg:h-[65vh] lg:justify-end lg:pb-12 ">
        <div className="items-center text-center flex flex-col h-full justify-center w-full z-10 relative ">
          <h1 className="text-white font-medium mt-0 mr-0 mb-10 text-center font-serif text-4xl leading-5 md:leading-10 sm:leading-10 ">
            One Stop Solutions for Design,Execution and O&M
          </h1>

          <div className="flex items-center">
            <div className="text-lg text-white">
              <p>We</p>
            </div>

            <div
              className="before:border-l-2 before:absolute before:h-2 before:w-4 before:top-0 before:border-t-2 before:border-solid before:rounded-t before:border-white before:-left-0.5 items-center border-x-white border-white border-2 border-solid rounded-md border-t-0 flex min-w-190 relative pt-1 pr-4 pl-4 pb-1.5 mt-0 mb-0 mr-4 ml-1 after:border-r-2 "
              style={{ width: "190px", height: "46px" }}
            >
              <div className="text-white before:mr-2.5 before:border-white before:h-0.5 before:w-3  items-center  flex text-sm  left-1 absolute right-0.5 -top-2.5 after:ml-3 after:w-full after:h-0.5 after:bg-white">
                Action
              </div>

              <div className="typewriter  text-yellow-400 text-lg font-medium max-w-full pr-2"></div>
            </div>

            <div className=" text-white text-lg">
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
            spacing={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {tiles.map((tile) => (
              <Grid
                key={tile.label}
                xs={2.4}
                sx={{ visibility: tile.hidden ? "hidden" : "visible" }}
              >
                <Tooltip title="Click & Enquire now">
                  <Item
                    onClick={(e) => {
                      toggleDrawer(true, e);
                    }}
                  >
                    {tile.label}
                  </Item>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div className="absolute top-20 left-0 h-[95vh] w-full md:h-[45vh] sm:h-[40vh] \ lg:h-[100vh]">
          <div className="slide">
            <div style={{ backgroundImage: "url(/assets/New1.png)" }}></div>
            <div style={{ backgroundImage: "url(/assets/New2.png)" }}></div>
            <div style={{ backgroundImage: "url(/assets/New3.png)" }}></div>
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
      {open ? <EnquireFormComponent title={formTitle} setOpen={setOpen} /> : ""}
      <div className="pt-20">
        <CounterSection />
      </div>
      <div className="brand-wrapper gradient-bg pt-12">
        <div className=" mb-14 text-center">
          <h2 className="text-4xl">
            <span className="text-line" style={{ color: "black" }}>
              Our{" "}
              <span
                className="text-bold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Client
              </span>
            </span>
          </h2>
        </div>
        <div className="Marquee">
          <Marquee
            direction="right"
            autoFill={true}
            speed={50}
            pauseOnHover={true}
            style={{ overflow: "hidden" }}
          >
            {imageData.map((data) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Marquee-tag">
                  <img
                    src={data.clientele}
                    alt="Flexibond"
                    style={{ padding: "15px" }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="Marquee">
          <Marquee
            direction="left"
            autoFill={true}
            speed={50}
            pauseOnHover={true}
          >
            {imageData2.map((data) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Marquee-tag">
                  <img
                    src={data.clientele}
                    alt="Flexibond"
                    style={{ padding: "15px" }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Hero;
