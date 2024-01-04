import React from "react";
import Header from "../../components/Header";
import HeroImageSection from "../../components/common/HeroImageSection";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import "../SolarPlanningInstallation/SolarPlanningInstallation.css";

export default function SolarOperationAndMaintenance() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <HeroImageSection
        title="Solar Operations And Maintenance"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <section className="single-service-area py-10 sm:py-20  md:py-32 2xl:py-56 px-8">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top">
                <h1> Solar Operations and maintenance</h1>
                <div className="remove_li text mt-2">
                  <div style={{ textAlign: "justify" }}>
                    A system’s lifetime operation and maintenance are just as
                    essential as its&nbsp;
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      construction. At NES Energy Solutions, we provide our
                      customers with a full&nbsp;
                    </span>
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      array of O&amp;M services.
                    </span>
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      <br />
                    </span>
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      <ul>
                        <b>Rapid Response</b>
                        <li style={{ textAlign: "justify" }}>
                          Our Rapid Response coverage helps reduce downtime,
                          increases ROI, and gives our&nbsp;
                          <span style={{ fontSize: "1rem" }}>
                            customers peace of mind.
                          </span>
                        </li>
                        <br />
                        <b>Scheduled Maintenance</b>
                        <li style={{ textAlign: "justify" }}>
                          We provide scheduled maintenance services to detect,
                          prevent, or proactively correct any&nbsp;
                          <span style={{ fontSize: "1rem" }}>
                            problem issues.
                          </span>
                        </li>
                        <br />
                        <b>Performance Optimization</b>
                        <li style={{ textAlign: "justify" }}>
                          To ensure we exceed our customers’ expectations, we
                          provide an overall balance of system&nbsp;
                          <span style={{ fontSize: "1rem" }}>
                            inspection/analysis, string circuit performance,
                            thermal imaging, and storm damage repairs.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:basis-1/3 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full ">
              <div className="single-service-sidebar">
                <div className="sidebar-contact-box text-center">
                  <div className="img-holder">
                    <img
                      src="../assets/Expertice/call-us-pijwndl5c2fb8gw92zlpuwtn22cp7srf70rqgqkhly.png"
                      alt="Awesome Image"
                    />
                  </div>
                  <div className="inner-content">
                    <div className="icon-holder">
                      <img
                        src="../assets/Expertice/message.png"
                        alt="Awesome Image"
                        className="w-2/5"
                      />
                      <span className="icon-question-2"></span>
                    </div>
                    <h3>Consult with expert &amp; Start today</h3>
                    <div className="bottom-box">
                      <h2>
                        <a
                          href="tel:9825071551"
                          target="_blank"
                          style={{ color: "#ffffff !important" }}
                        >
                          +91 9825071551
                        </a>
                      </h2>
                      <span>
                        <a
                          href="mailto:sales@nessolar.in"
                          target="_blank"
                          style={{ color: "#ffffff !important" }}
                        >
                          sales@nessolar.in
                        </a>
                      </span>
                    </div>
                    <div className="button">
                      <a
                        className="btn-three wow slideInUp animated animated"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                        href="https://nessolar.in/contact-us"
                        style={{
                          visibility: "visible",
                          animationDuration: "1500ms",
                        }}
                      >
                        Schedule for Call
                        <span className="icon-null">
                          <i
                            className="fa fa-arrow-right text-sm"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
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
