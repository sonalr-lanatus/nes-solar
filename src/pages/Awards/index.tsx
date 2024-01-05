import React from "react";
import Fancybox from "../../components/common/Fancybox";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import HeroImageSection from "../../components/common/HeroImageSection";
import Footer from "../../components/Footer";
import "./Awards.css";
export default function Awards() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <HeroImageSection title="Awards" imgSrc={"../assets/Our+Approach.jpg"} />
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="container mb-20 mt-20">
          <div className="row">
            <div
              className="xl:basis-1/3 col-xl-4"
              style={{ marginBottom: "15px" }}
            >
              <div className="single-excellent-project">
                <div className="img-holder">
                  <img
                    src="../assets/Awards/platinum-rated-solar-company-89820220911.jpg"
                    alt="Awesome Image"
                  />
                  <div className="overlay-content">
                    <div className="inner-content">
                      <ul className="links-icons">
                        <li>
                          <a
                            data-fancybox="gallery"
                            href="../assets/Awards/platinum-rated-solar-company-89820220911.jpg"
                          >
                            <span>
                              <i
                                className="fa-solid fa-circle-plus text-8xl"
                                style={{ color: "#10213e" }}
                              ></i>
                            </span>
                          </a>
                          {/* <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="../assets/Awards/platinum-rated-solar-company-89820220911.jpg"
                          ></a> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl:basis-1/3 col-xl-4"
              style={{ marginBottom: "15px" }}
            >
              <div className="single-excellent-project">
                <div className="img-holder">
                  <img
                    alt=""
                    src="../assets/Awards/leader-of-future-award-2021-29520220912.jpg"
                  />
                  <div className="overlay-content">
                    <div className="inner-content">
                      <ul className="links-icons">
                        <li>
                          <a
                            data-fancybox="gallery"
                            href="../assets/Awards/leader-of-future-award-2021-29520220912.jpg"
                          >
                            <span>
                              <i
                                className="fa-solid fa-circle-plus text-8xl"
                                style={{ color: "#10213e" }}
                              ></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl:basis-1/3 col-xl-4"
              style={{ marginBottom: "15px" }}
            >
              <div className="single-excellent-project">
                <div className="img-holder">
                  <img
                    alt=""
                    src="../assets/Awards/best-solar-epc-16220220912.jpg"
                  />
                  <div className="overlay-content">
                    <div className="inner-content">
                      <ul className="links-icons">
                        <li>
                          <a
                            data-fancybox="gallery"
                            href="../assets/Awards/best-solar-epc-16220220912.jpg"
                          >
                            <span>
                              <i
                                className="fa-solid fa-circle-plus text-8xl"
                                style={{ color: "#10213e" }}
                              ></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl:basis-1/3 col-xl-4"
              style={{ marginBottom: "15px" }}
            >
              <div className="single-excellent-project">
                <div className="img-holder">
                  <img
                    alt=""
                    src="../assets/Awards/solar-epc-7-award-52720220913.jpg"
                  />
                  <div className="overlay-content">
                    <div className="inner-content">
                      <ul className="links-icons">
                        <li>
                          <a
                            data-fancybox="gallery"
                            href="../assets/Awards/solar-epc-7-award-52720220913.jpg"
                          >
                            <span>
                              <i
                                className="fa-solid fa-circle-plus text-8xl"
                                style={{ color: "#10213e" }}
                              ></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xl:basis-1/3 col-xl-4"
              style={{ marginBottom: "15px" }}
            >
              <div className="single-excellent-project">
                <div className="img-holder">
                  <img
                    src="../assets/Awards/innovative-business-award-57920220913.jpg"
                    alt="Awards"
                  />
                  <div className="overlay-content">
                    <div className="inner-content">
                      <ul className="links-icons">
                        <li>
                          <a
                            data-fancybox="gallery"
                            href="../assets/Awards/innovative-business-award-57920220913.jpg"
                          >
                            <span>
                              <i
                                className="fa-solid fa-circle-plus text-8xl"
                                style={{ color: "#10213e" }}
                              ></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fancybox>
      <Footer />
    </div>
  );
}
