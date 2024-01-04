import React from "react";
import Header from "../../components/Header";
import HeroImageSection from "../../components/common/HeroImageSection";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import "../SolarPlanningInstallation/SolarPlanningInstallation.css";

export default function ProjectFinance() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <HeroImageSection
        title="Project Finance"
        imgSrc={"../assets/Our+Approach.jpg"}
      />
      <section className="single-service-area py-10 sm:py-20  md:py-32 2xl:py-56 px-8">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top">
                <h1> Project Finance</h1>
                <div className="remove_li text mt-2">
                  <div>
                    We ensure that the customers get all necessary support and
                    guidance to choose the right equipment, resolve technical
                    issues at their door steps and get expeditious approvals of
                    their loans at competitive rates, it adds.
                  </div>

                  <div className="p-5">
                    <ul>
                      <li>For existing units, who switch to solar power</li>
                      <li>Capital subsidy</li>
                      <li>Interest subsidy</li>
                      <li>
                        Partners with all national and private sectors banks
                      </li>
                    </ul>
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
