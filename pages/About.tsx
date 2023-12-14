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
      {/* <section className="whowe-are-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="single-whowe-are-box text-center">
                <div className="icon">
                  <span className="icon-career"></span>
                </div>
                <div className="text">
                  <h3>Mission</h3>
                  <p>
                    We take pride in delivering reliable, efficient and cost
                    effective solar solutions with agility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="single-whowe-are-box text-center">
                <div className="icon">
                  <span className="icon-null-2"></span>
                </div>
                <div className="text">
                  <h3>Vision</h3>
                  <p>
                    To be the preferred destination for comprehensive solar
                    power plant solutions at large scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="single-whowe-are-box text-center">
                <div className="icon">
                  <span className="icon-null-3"></span>
                </div>
                <div className="text">
                  <h3>Core Value</h3>
                  <p>Committed to highest customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
