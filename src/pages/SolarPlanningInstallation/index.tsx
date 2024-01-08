import React, { useEffect } from "react";
import Header from "../../components/Header";
import HeroImageSection from "../../components/common/HeroImageSection";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import "./SolarPlanningInstallation.css";

export default function SolarPlanningInstallation() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <HeroImageSection
        title="Solar Planning & Installation"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      {/* <section className="single-service-area md:py-32 px-8 xl:py-56 2xl:py-56"> */}
      <section className="single-service-area sm:py-20  md:py-32 2xl:py-56 px-8">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top">
                <h1> Solar planning &amp; Installation</h1>
                <div className="remove_li text mt-2">
                  <div>
                    Our expertise in engineering, procurement, and construction
                    services&nbsp;
                    <span style={{ fontSize: "1rem" }}>
                      ensure your solar project is cohesively completed and
                      managed by the&nbsp;
                    </span>
                    <span style={{ fontSize: "1rem" }}>
                      same team of experts from design through implementation.
                    </span>
                  </div>

                  <div className="p-8">
                    <div>
                      <b>Engineering</b>
                    </div>
                    <ul>
                      <li>Site feasibility</li>
                      <li>Drawing submission</li>
                      <li>Structure design</li>
                      <li>Earthing ,cabling and electrical engineering</li>
                    </ul>
                    <div>
                      <b>Procurement</b>
                    </div>
                    <ul>
                      <li>
                        Established buying power to handle full system
                        procurement for projects of all sizes
                      </li>
                      <li>Best in className Solar Panels &amp; Solar cells</li>
                    </ul>
                    <div>
                      <b>Construction</b>
                    </div>
                    <ul>
                      <li>Module Installation</li>
                      <li>Fixed mount</li>
                      <li>Tracking</li>
                      <li>Electrical Balance of System</li>
                      <li>Testing and Commissioning</li>
                    </ul>
                    <div>
                      <b>Payback</b>
                    </div>
                    <ul>
                      <li>Cost effective solar panel price</li>
                      <li>
                        Experienced to achieve minimum Solar plant installation
                        cost
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:basis-1/3 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full ">
              <div className="single-service-sidebar">
                <div className="sidebar-contact-box text-center">
                  {/* <div className="img-holder">
                    <img
                      src="../assets/Expertice/call-us-pijwndl5c2fb8gw92zlpuwtn22cp7srf70rqgqkhly.png"
                      alt="Awesome Image"
                    />
                  </div> */}
                  <div className="inner-content">
                    <div className="card-header one">
                      <div className="text-front">
                        {" "}
                        <h3>Consult with expert &amp; Start today</h3>
                      </div>

                      <div className="img-holder">
                        <img
                          src="../assets/Expertice/call-us-pijwndl5c2fb8gw92zlpuwtn22cp7srf70rqgqkhly.png"
                          alt="Awesome Image"
                          height={20}
                          width={360}
                        />
                      </div>
                    </div>

                    {/* <div className="Circle"></div>
                    <div className="Circle"></div> */}
                    <div className="box">
                      <div className="content">
                        <p>
                          It’s our mission to provide every client with
                          competitively-priced renewable energy systems paired
                          with top-quality service.
                        </p>
                      </div>
                    </div>

                    {/* <h3>Consult with expert &amp; Start today</h3> */}
                    <div className="bottom-content">
                      <div className="icon-holder">
                        <h1 className="text-2xl after:border-b-2 after:border-b-[#3b8ce9] after:border-solid after:w-36 after:absolute after:bottom-7 after:ml-3">
                          Our Services
                        </h1>
                      </div>
                      <div className="upk-container">
                        <div className="upk-featured-list">
                          <div className="upk-featured-list-item">
                            <div className="upk-featured-list-item-box">
                              <div className="upk-featured-list-content">
                                <div className="upk-featured-list-counter">
                                  <a
                                    href="https://www.instagram.com/imsanketbodke/"
                                    target="blank"
                                  >
                                    <img
                                      src={"../assets/Expertice/6802629.png"}
                                      alt=""
                                      className="h-full w-full object-fit-cover rounded-bl-lg"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <h4 className="upk-featured-list-title">
                                    <a
                                      className="title-animation-underline"
                                      href="#"
                                      title="Club La Costa World Welcomes Back Guests"
                                    >
                                      Solar Planning & Installation
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="upk-featured-list-item">
                            <div className="upk-featured-list-item-box">
                              <div className="upk-featured-list-content">
                                <div className="upk-featured-list-counter">
                                  <a
                                    href="https://www.instagram.com/imsanketbodke/"
                                    target="blank"
                                  >
                                    <img
                                      src={
                                        "../assets/Expertice/2086345-200.png"
                                      }
                                      alt=""
                                      className="h-full w-full object-fit-cover rounded-bl-lg"
                                    />
                                  </a>
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                  }}
                                >
                                  <h4 className="upk-featured-list-title">
                                    <a
                                      className="title-animation-underline"
                                      href="#"
                                      title="Business women having a brainstor meeting"
                                    >
                                      Project Finance
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="upk-featured-list-item">
                            <div className="upk-featured-list-item-box">
                              <div className="upk-featured-list-content">
                                <div className="upk-featured-list-counter">
                                  <a
                                    href="https://www.instagram.com/imsanketbodke/"
                                    target="blank"
                                  >
                                    <img
                                      src={"../assets/Expertice/sol-pl-01.svg"}
                                      alt=""
                                      className="h-full w-full object-fit-cover rounded-bl-lg"
                                    />
                                  </a>
                                </div>
                                <div>
                                  <h3 className="upk-featured-list-title">
                                    <a
                                      className="title-animation-underline"
                                      href="#"
                                      title="The Most Beautiful Beaches In Goa"
                                    >
                                      Solar Operations And Maintenance
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary">
                        <a
                          className=" wow slideInUp animated animated"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                          href="/Contact"
                          style={{
                            visibility: "visible",
                            animationDuration: "1500ms",
                          }}
                        >
                          <span className="btn-label">
                            Schedule for Call
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </button>

                      <div className="bottom-box">
                        <div className="card-header-two">
                          {" "}
                          <h5 className="font-white after:border-r-2 after:h-20  after:border-b-[#3b8ce9] after:border-solid  after:absolute after:-bottom-0 after:ml-14">
                            Contact Us
                          </h5>
                          <ul className=" space-y-1 text-sm w-3/6">
                            <li>
                              <a
                                className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                href="mailto:sales@nessolar.in"
                              >
                                <div className="icon social fb">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 font-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <p className="flex-1 font-white text-sm">
                                  sales@nessolar.in
                                </p>
                              </a>
                            </li>

                            <li>
                              <a
                                className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                href="tel:9825071551"
                              >
                                <div className="icon social fb">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 font-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                  </svg>
                                </div>

                                <p className="flex-1 font-white text-sm">
                                  +91 9825071551
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* <h2>
                          <a
                            href="tel:9825071551"
                            target="_blank"
                            // style={{ color: "#ffffff !important" }}
                          >
                            +91 9825071551
                          </a>
                        </h2>
                        <span>
                          <a
                            href="mailto:sales@nessolar.in"
                            target="_blank"
                            // style={{ color: "#ffffff !important" }}
                          >
                            sales@nessolar.in
                          </a>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card-wrap">
              <div className="card-header one">
                <i className="fas fa-code"></i>
              </div>
              <div className="card-content">
                <h1 className="card-title">Title</h1>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="card-btn one">code</button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
