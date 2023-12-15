import Header from "@/components/Header";
import React from "react";
import "../app/globals.css";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <section className="relative py-24 px-4 before:absolute  before:top-0 before:left-0 before:h-full before:w-full before:-z-10 before:bg-gray-100 ">
        <div className="z-20 relative text-[#002f63] container mx-auto">
          <p className=" font-bold text-4xl ">About Us</p>
        </div>
        <div className={`absolute inset-0 h-[55vh] z-10`}>
          <img
            src="..\assets\New3.png"
            alt=""
            className="h-full w-full object-fit-cover"
          />
          <div className="absolute inset-0 h-[55vh] z-20 bg-white bg-opacity-20" />
        </div>
      </section>
      <section className="relative block pt-48 pr-0 pl-0 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mr-4 -ml-4">
            <div className="relative w-full pr-4 pl-4 md:flex-1 max-w-4xl">
              <div className="relative block mt-2.5">
                <img
                  src="https://nessolar.in/uploads/about/about-image-59220220128.jpg"
                  alt="Awesome Image"
                  style={{
                    height: "500px",
                    width: "100%",
                    borderTopLeftRadius: "20%",
                    borderBottomRightRadius: "20%",
                    boxShadow: `rgba(16, 33, 62, 1) -5px 5px, rgba(16, 33, 62, 0.8) -10px 10px, rgba(16, 33, 62, 0.6) -15px 15px, rgba(16, 33, 62, 0.4) -20px 20px, rgba(16, 33, 62, 0.3) -25px 25px`,
                  }}
                />
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:flex-1 max-w-4xl">
              <div className="relative block mt-12">
                <div className="relative block">
                  <div className="table-cell align-middle">
                    <h2 className="text-[#002f63] font-bold m-0 text-3xl before:absolute before:w-60 before:pt-6 before:left-0 before:right-0 before:-bottom-2.5 before:border-b-4 before:border-b-solid before:border-b-black">
                      Commitment to excellence
                    </h2>
                  </div>
                </div>
                <div className="relative block pt-8 pb-4">
                  <ul>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      Our team’s collective understanding of the solar industry,
                      the financial advantages &amp; nuances of solar investment
                      allows us to{" "}
                      <strong>
                        design, construct, and maintain large, complex solar
                        projects.
                      </strong>
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      It’s our mission to provide every client with
                      competitively-priced renewable energy systems paired with{" "}
                      <strong>top-quality service.</strong>
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      Every project we take on is assigned a{" "}
                      <strong>designated professional </strong>to ensure we
                      continually meet all of our clients needs and
                      expectations.
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      <strong>Safety </strong>is one of our top priorities. No
                      job is more important than the safety of our employees and
                      partners. Our moral obligation and organizational
                      standards &amp; employ only the industry best practices
                      for safety.
                    </li>
                  </ul>

                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 px-0  ">
        <div className="container pr-4 pl-4 mr-auto ml-auto md:max-w-7xl ">
          <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm ">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block">
                  <img
                    src="../assets/mission.png"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10 "></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Mission
                  </h3>
                  <p className="m-0 text-black">
                    We take pride in delivering reliable, efficient and cost
                    effective solar solutions with agility.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm ">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block">
                  <img
                    src="../assets/vision.png"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10"></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Vision
                  </h3>
                  <p className="m-0 text-black">
                    To be the preferred destination for comprehensive solar
                    power plant solutions at large scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block ">
                  <img
                    src="../assets/work.png"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10"></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Core Value
                  </h3>
                  <p className="m-0 text-black">
                    Committed to highest customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative block pt-28 pb-24 px-0"
        style={{ background: "#002f630a" }}
      >
        <div className="container pr-4 pl-4 mr-auto ml-auto md:max-w-7xl">
          <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
            <div className="relative w-full pr-4 pl-4">
              <div className="relative block">
                <div className="pb-9 relative block -mt-1 text-center">
                  <p
                    style={{ color: "#333" }}
                    className="text-sm leading-5 font-bold uppercase mx-0 mb-3 mt-0"
                  >
                    Offering
                  </p>
                  <div
                    style={{ color: "#333" }}
                    className="relative block text-[#002f63] text-5xl leading-10 font-bold capitalize z-10 mb-5 mx-0 mt-0"
                  >
                    What We Offer
                    <p className="fa_tt_span">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                  <div className="relative block w-20 h-2"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4">
              <div className="relative block">
                <div className="flex flex-wrap -mr-4 -ml-4">
                  <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded bg-clip-border">
                      <div className="flex flex-nowrap">
                        <div
                          className="relative"
                          style={{
                            textAlign: "center",
                            margin: "auto",
                            display: "block",
                          }}
                        >
                          <img
                            src="https://nessolar.in/uploads/what-we-offer/what-we-offer-70520220620.png"
                            className="rounded-sm p-2"
                            alt="Quality"
                            style={{ width: "64px" }}
                          />
                        </div>
                        <div className="relative w-full">
                          <div className="p-5 flex-1 flex-shrink h-full">
                            <h5 className="mb-3 text-[#002f63] font-bold m-0 text-xl">
                              Quality
                            </h5>
                            <p className="card-text"></p>
                            <p>
                              Structure - GI box pipe{" "}
                              <b>to withstand high wind velocity</b> &amp; SS
                              304 bolts &amp; nuts
                            </p>
                            <p>
                              Cabling - EN type double insulated DC cable for
                              maximum power output
                            </p>
                            <p>
                              Civil work - Epoxy resin material for
                              waterproofing &amp; PCC for structure strength
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl">
                    {/* <style>
                                                    @media  only screen and (min-width: 1200px) and (max-width: 1920px) {
                                                        .responsive_after_service {
                                                            height: 285px;
                                                        }
                                                    }
                                                </style> */}

                    <div className="relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded  bg-clip-border responsive_after_service ">
                      <div className="flex flex-nowrap">
                        <div
                          className="relative"
                          style={{
                            textAlign: "center",
                            margin: "auto",
                            display: "block",
                          }}
                        >
                          <img
                            src="https://nessolar.in/uploads/what-we-offer/what-we-offer-37920220621.png"
                            className="rounded-sm p-2"
                            alt="After Sales Service"
                            style={{ width: "64px" }}
                          />
                        </div>
                        <div className="relative w-full">
                          <div className="p-5 flex-1 flex-shrink h-full">
                            <h5 className="mb-3 text-[#002f63] font-bold m-0 text-xl">
                              After Sales Service
                            </h5>
                            <p className="card-text"></p>
                            <p>
                              Communication with customers for{" "}
                              <b>plant remote monitoring and efficiency</b>{" "}
                            </p>
                            <p>
                              <b>Quick response</b> to customer service calls
                              and on-site visit{" "}
                            </p>
                            <p>
                              <b>Service report</b> preparation and submission
                              to the customer
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded bg-clip-border">
                      <div className="flex flex-nowrap">
                        <div
                          className="relative"
                          style={{
                            textAlign: "center",
                            margin: "auto",
                            display: "block",
                          }}
                        >
                          <img
                            src="https://nessolar.in/uploads/what-we-offer/what-we-offer-30920221203.png"
                            className="rounded-sm p-2"
                            alt="Innovations , Commitment &amp; Safety"
                            style={{ width: "64px" }}
                          />
                        </div>
                        <div className="relative w-full">
                          <div className="p-5 flex-1 flex-shrink h-full ">
                            <h5 className="mb-3 text-[#002f63] font-bold m-0 text-xl">
                              Innovations , Commitment &amp; Safety
                            </h5>
                            <p className="card-text"></p>
                            <p>
                              <b>Power optimization</b> technology for any roof
                              orientations and directions
                            </p>
                            <p>
                              <b>Maximum energy output</b> through the selection
                              of PERC and bi-facial solar cell technology
                            </p>
                            <p>
                              AC-DC <b>separate and parallel earthing</b> for
                              the highest safety
                            </p>
                            <p>
                              <b>Robotic thermography</b> - voltage current
                              tracing, electroluminescence testing for solar
                              panels
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl">
                    {/* <style>
                                                    @media  only screen and (min-width: 1200px) and (max-width: 1920px) {
                                                        .responsive_skill {
                                                            height: 354px;
                                                        }
                                                    }
                                                </style> */}

                    <div className="relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded bg-clip-border  responsive_skill ">
                      <div className="flex flex-nowrap">
                        <div
                          className="relative"
                          style={{
                            textAlign: "center",
                            margin: "auto",
                            display: "block",
                          }}
                        >
                          <img
                            src="https://nessolar.in/uploads/what-we-offer/what-we-offer-46920220620.png"
                            className="rounded-sm p-2"
                            alt="Skill"
                            style={{ width: "64px" }}
                          />
                        </div>
                        <div className="relative w-full">
                          <div className="p-5 flex-1 flex-shrink h-full">
                            <h5 className="mb-3 text-[#002f63] font-bold m-0 text-xl">
                              Skill
                            </h5>
                            <p className="card-text"></p>
                            <p>
                              Pre site visit- <b>feasibility study</b> with
                              solar module placement drawing as rooftop area{" "}
                            </p>
                            <p>
                              <b>3D</b> modeling <b>design</b>{" "}
                            </p>
                            <p>
                              <b>Shadow analysis</b> report
                            </p>
                            <p>
                              Month-wise solar energy generation report with{" "}
                              <b>payback calculation</b>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded bg-clip-border">
                      <div className="flex flex-nowrap">
                        <div
                          className="relative"
                          style={{
                            textAlign: "center",
                            margin: "auto",
                            display: "block",
                          }}
                        >
                          <img
                            src="https://nessolar.in/uploads/what-we-offer/what-we-offer-11420221200.png"
                            className="rounded-sm p-2"
                            alt="Return on Investment"
                            style={{ width: "64px" }}
                          />
                        </div>
                        <div className="relative w-full">
                          <div className="p-5 flex-1 flex-shrink h-full">
                            <h5 className="mb-3 text-[#002f63] font-bold m-0 text-xl">
                              Return on Investment
                            </h5>
                            <p className="card-text"></p>
                            <p>
                              Committed to achieving <b>3-4 years</b> of system{" "}
                              <b>Payback</b> period
                            </p>
                            <p>
                              <b>Savings</b> on electricity bills{" "}
                              <b>for the next 22 years</b>
                            </p>
                            <p>
                              Material selection for{" "}
                              <b>25 years of performance</b>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full pr-4 pl-4 mt-3 xl:basis-1/2 xl:max-w-xl">
                    {/* <style>
                                                    @media  only screen and (min-width: 1200px) and (max-width: 1920px) {
                                                        .responsive_competence {
                                                            height: 234px;
                                                        }
                                                    }
                                                </style> */}

                    <div className="relative flex flex-col min-w-0 break-words bg-white border-solid border-2 border-slate-400 mb-3 rounded bg-clip-border responsive_competence ">
                      <div className="flex flex-nowrap">
                        <div
                          className="relative"
                          style={{
                            textAlign: "center",
                            margin: "auto",
                            display: "block",
                          }}
                        >
                          <img
                            src="https://nessolar.in/uploads/what-we-offer/what-we-offer-79020220620.png"
                            className="rounded-sm p-2"
                            alt="Competence"
                            style={{ width: "64px" }}
                          />
                        </div>
                        <div className="relative w-full">
                          <div className="p-5 flex-1 flex-shrink h-full ">
                            <h5 className="mb-3 text-[#002f63] font-bold m-0 text-xl">
                              Competence
                            </h5>
                            <p className="card-text"></p>
                            <p>
                              Technically competent &amp;{" "}
                              <b>experienced engineering team</b>
                            </p>
                            <p>
                              Quick troubleshooting by a{" "}
                              <b>trained service team</b>{" "}
                            </p>
                            <p>
                              Organizations <b>prudent business policies</b>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
