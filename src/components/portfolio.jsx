import React from "react";

//import stock
import budget from "../img/budget1.png";
import budget1 from "../img/budget2.png";
import workout from "../img/workout.png";
import workout1 from "../img/workout1.png";
import workout2 from "../img/workout2.png";
import workout3 from "../img/workout3.png";
import news from "../img/news.png";
import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import note from "../img/note.png";
import note1 from "../img/note1.png";
import note2 from "../img/note2.png";
import daycare from "../img/daycare.png";
import daycare1 from "../img/daycare1.png";
import daycare2 from "../img/daycare2.png";
import daycare3 from "../img/daycare3.png";
import daycare4 from "../img/daycare4.png";
import directory from "../img/directory.png";
import directory1 from "../img/directory1.png";
import directory2 from "../img/directory2.png";
import directory3 from "../img/directory3.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below is a showcase of some of my recent work.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={budget} data-lightBox="gallery-budget">
                  <div className="work-img">
                    <img src={budget1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Budget Tracker</h2>
                        <div className="w-more">
                          <span className="w-category">

                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>

                    </div>
                  </div>
                </a>

                <a
                  href={budget1}
                  data-lightBox="gallery-budget"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={workout} data-lightBox="gallery-workout">
                  <div className="work-img">
                    <img src={workout3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Workout Tracker</h2>
                        <div className="w-more">
                          <span className="w-category">

                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={workout1}
                  data-lightBox="gallery-workout"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={workout2}
                  data-lightBox="gallery-workout"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={workout3}
                  data-lightBox="gallery-workout"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={news} data-lightBox="gallery-news">
                  <div className="work-img">
                    <img src={news2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">News/Weather Blog</h2>
                        <div className="w-more">
                          <span className="w-category">

                          </span>

                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={news1}
                  data-lightBox="gallery-news"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={news2}
                  data-lightBox="gallery-news"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={note} data-lightBox="gallery-note">
                  <div className="work-img">
                    <img src={note} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Note Taker</h2>
                        <div className="w-more">
                          <span className="w-category">

                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={note1}
                  data-lightBox="gallery-note"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={note2}
                  data-lightBox="gallery-note"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={daycare} data-lightBox="gallery-daycare">
                  <div className="work-img">
                    <img src={daycare} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Day Care Admin Tool</h2>
                        <div className="w-more">
                          <span className="w-category">

                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={daycare1}
                  data-lightBox="gallery-daycare"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={daycare2}
                  data-lightBox="gallery-daycare"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={daycare3}
                  data-lightBox="gallery-daycare"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={daycare4}
                  data-lightBox="gallery-daycare"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={directory} data-lightBox="gallery-directory">
                  <div className="work-img">
                    <img src={directory} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Employee Directory</h2>
                        <div className="w-more">
                          <span className="w-category">

                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={directory1}
                  data-lightBox="gallery-directory"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={directory2}
                  data-lightBox="gallery-directory"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={directory3}
                  data-lightBox="gallery-directory"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
