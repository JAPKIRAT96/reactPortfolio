import React from "react";
import myImage from "../img/myImage.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML&CSS_skill", content: "HTML & CSS", percentage: "80%", value: "80" },
        
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "90%",
          value: "90"
        },
        
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "mongoDb_skill",
          content: "MongoDB",
          percentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          percentage: "85%",
          value: "85"
        },
        {
          id: "express_skill",
          content: "ExpressJS & Node",
          percentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "  Hello and welcome to my profile page, i'm basically from Punjab,India. I migrated to California, USA with my family 3 Years back and so far i'hv been loving living here."
        },
        {
          id: "second-p-about",
          content:
            "I am a accounting major with with a keen interest in web development and project management and since September 2020 i've also devoted myself in getting versed and educated in them and now i'm a part of a boot-camp which is helping my interest to grow and exposing me to a brand new career path Web development."
        },
        {
          id: "third-p-about",
          content:
            "During this boot-camp i've found that web development is a very vast and interesting field which is constantly evolving and challenging people to take on new challenges which i look forward to do as a bread winner."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            src={myImage}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf" >

                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
