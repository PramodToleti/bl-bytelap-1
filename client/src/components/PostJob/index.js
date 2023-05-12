import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import Slider from "react-slick"
import Popup from "reactjs-popup"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import FloatingLabel from "react-bootstrap/FloatingLabel"

import "./index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import EmployeeFooter from "../Employee/EmployeeFooter"
import ChooseFile from "../../assets/ChooseFile"

const PostJob = () => {
  const [isNext, setIsNext] = useState(false)

  const [activeLink, setActiveLink] = useState(null)

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [jobs, setJobs] = useState([
    "IT Engineering",
    "BPO & KPO",
    "Operations",
    "Sales & BD",
    "Marketing",
    "Finance",
  ])

  const renderSteps = () => {
    if (!isNext) {
      return (
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          style={{ width: "100%" }}
        >
          <Form action="" noValidate>
            <Row className="mb-3">
              <p className="text-end mt-1">Step 1-2</p>
              <p className="text-center mt-3">Create Employer Account</p>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <FloatingLabel controlId="floatingText" label="Company Name">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Demo Solution inc"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your company name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mt-3"
                controlId="validationCustom01"
              >
                <FloatingLabel
                  controlId="floatingText"
                  label="Official Email ID"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="Info@company.com"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter official email ID.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <button className=" mt-1 text-center btn btn-outline-primary">
              Get Code
            </button>
            <button className=" mt-1 mx-1 text-center btn btn-outline-secondary">
              Enter Code
            </button>
            <p className="text-start mt-1">
              {" "}
              <Link to="" style={{ textDecoration: "none", color: "blue" }}>
                Resend again{" "}
              </Link>
            </p>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
                onClick={() => setIsNext(true)}
              >
                Verify & Next
              </Button>
            </div>
          </Form>
        </div>
      )
    }

    return (
      <div
        className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2    border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ width: "100%" }}
      >
        <p className="text-end">Step 2-2</p>
        <p className="text-center">Company Info</p>

        <Form action="" noValidate>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter you last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label> You Role </Form.Label>
              <Form.Select>
                <option> Select an option </option>
                <option> Owner </option>
                <option>Human Resource</option>
                <option>Junior Human Resource</option>
                <option>Marketing Specialist</option>
                <option>Junior Marketing Specialist</option>
                <option>CEO</option>
                <option>CTO</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Company website</Form.Label>
              <Form.Control
                required
                type="link"
                placeholder="Paste URL"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Enter your company website URL.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label className="mt-2">Upload Company Logo </Form.Label>
              <Stack
                direction="horizontal"
                gap={3}
                style={{
                  marginTop: "7px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <input className="d-none" type="file" />
                <ChooseFile />
              </Stack>
              <Form.Control.Feedback type="invalid">
                Please upload company logo.
              </Form.Control.Feedback>
            </Form.Group>
            <small className="text-start text-muted mt-3">
              PDF,Doc,Docx, | Max:2MB
            </small>

            <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={2}
                placeholder=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-2"
              controlId="validationCustom01"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="link"
                placeholder="Create password"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please create your password
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="link"
                placeholder="confirm password"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please confirm your password
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 mt-4">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-2">
            <Link to="/employee">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    )
  }

  const renderEmployeeHome = () => {
    switch (activeLink) {
      case "About us":
        return <AboutUs />
      case "Blog":
        return (
          <Blog setIsPostActive={setIsPostActive} isPostActive={isPostActive} />
        )
      case "Contact us":
        return <ContactUs />
      case "Media":
        return <Media />
      case "Privacy Policy":
        return <PrivacyPolicy />
      case "Terms & Condition":
        return <TermsAndConditions />
      case "Startup Hiring":
        return <Startup />
      case "Enterprise Hiring":
        return <Enterprise />

      default:
        return (
          <>
            <div className="post-job-content">
              <Link to="/employee/post-job">
                <Button variant="outline-primary">Post</Button>
              </Link>

              <div className="post-job-options">
                <div
                  className="option-container"
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <h4 className="count-style">1</h4>
                  <h6>Create Account</h6>
                </div>
                <div
                  className="option-container"
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <h4 className="count-style">2</h4>
                  <h6>Post Job</h6>
                </div>
                <div
                  className="option-container"
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <h4 className="count-style">3</h4>
                  <h6>Select Resume's & Hire</h6>
                </div>
              </div>
            </div>

            <div className="landing-page-content container mb-5 p-5">
              <h2>Get Started in 3 easy steps</h2>
              <div className="skeleton-content mb-5">
                <div className="desktop-text">
                  <h4 className="count-style" style={{ color: "orange" }}>
                    1
                  </h4>
                  <p style={{ fontSize: "1.4rem", maxWidth: "350px" }}>
                    Create Account & Get Verified
                  </p>
                </div>
                {/* <SkeletonContainer /> */}
                <Card
                  className="shadow-sm rounded-lg"
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #dee2e6",
                    boxShadow: "3px 3px 3px 3px whitesmoke",
                    height: "250px",
                  }}
                >
                  <Card.Body
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "1.4rem",
                        textAlign: "center",
                        maxWidth: "280px",
                      }}
                    >
                      Instantly Verify Your{" "}
                      <span style={{ color: "red" }}>
                        {" "}
                        Company's Official Mail ID with OTP
                      </span>{" "}
                      and Start Hiring Top Talent
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className="mobile-text">
                  <h4 className="count-style" style={{ color: "orange" }}>
                    1
                  </h4>
                  <p
                    style={{
                      fontSize: "1.4rem",
                      maxWidth: "350px",
                      textAlign: "center",
                    }}
                  >
                    Create Account & Get Verified
                  </p>
                </div>
              </div>

              <div className="skeleton-content mb-5">
                {/* <SkeletonContainer /> */}
                <Card
                  className="shadow-sm rounded-lg"
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #dee2e6",
                    boxShadow: "3px 3px 3px 3px whitesmoke",
                    height: "250px",
                  }}
                >
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Title
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        marginBottom: "0px",
                      }}
                    >
                      Post Job
                    </Card.Title>
                    <p style={{ fontSize: "1.3rem" }} className="mb-2 mt-3">
                      Get relevent CV'S
                    </p>
                    <ul className="list-unstyled mt-4">
                      <li className="bullet-point">
                        <span className="bullet"></span> Intern
                      </li>
                      <li className="bullet-point">
                        <span className="bullet"></span> Fresher
                      </li>
                      <li className="bullet-point">
                        <span className="bullet"></span> Experience
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h4 className="count-style" style={{ color: "orange" }}>
                    2
                  </h4>
                  <p
                    style={{
                      fontSize: "1.4rem",
                      maxWidth: "350px",
                      textAlign: "center",
                    }}
                  >
                    Hire Top Talent in a Flash Post Your Job in Just{" "}
                    <span style={{ color: "red" }}>5 Minutes!</span>
                  </p>
                </div>
              </div>

              <div className="skeleton-content mb-5">
                <div className="desktop-text">
                  <h4 className="count-style" style={{ color: "orange" }}>
                    3
                  </h4>
                  <div>
                    <ul style={{ fontSize: "1.4rem" }}>
                      <li style={{ marginBottom: "8px" }}>Download CV's</li>
                      <li style={{ marginBottom: "8px" }}>Get Call's</li>
                      <li style={{ marginBottom: "8px" }}>
                        Find Candidate Availability
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <SkeletonContainer /> */}
                <Card
                  className="shadow-sm rounded-lg"
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #dee2e6",
                    boxShadow: "3px 3px 3px 3px whitesmoke",
                    height: "250px",
                    marginRight: "0px",
                  }}
                >
                  <Card.Body
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "1.4rem",
                        textAlign: "center",
                        maxWidth: "280px",
                      }}
                    >
                      Connect with Connect with{" "}
                      <span style={{ color: "red" }}>Relevant Candidates</span>{" "}
                      Within an Hour or Browse Our Database
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className="mobile-text">
                  <h4 className="count-style" style={{ color: "orange" }}>
                    3
                  </h4>
                  <ul>
                    <li style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                      Download CV's
                    </li>
                    <li style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                      Get Call's
                    </li>
                    <li style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                      Find Candidate Availability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="media-coverage-container">
              <h4>Product Recommendations</h4>
              <div className="carousel-container">
                <div className="carousel-card">
                  <Slider {...settings}>
                    <div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="recommendation-card"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <div className="product-review">
                            <img
                              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1678802253~exp=1678802853~hmac=7ee8e42d48509b8eb6f7cdfcb4b505a2048d44c09c79e90ff0460f3133224223"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "100%",
                                boxShadow: "0px 0px 10px 0px #ccc",
                                marginTop: "5px",
                              }}
                            />
                            <p style={{ textAlign: "start" }}>
                              They are logical and simple to work with, quietly
                              listen to your requirement, and provide you with
                              excellent counsel from a distance. At the core of
                              their customer-centricity is the automation
                              technology they use, which entails bringing the
                              Talent closer to each stage of the process.
                            </p>
                          </div>
                          <div className="user-role-container mt-3">
                            <h6 style={{ fontWeight: "600" }}>Nilesh Ranjan</h6>
                            <p>Founder of Demo Technologies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="recommendation-card"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <div className="product-review">
                            <img
                              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1678802253~exp=1678802853~hmac=7ee8e42d48509b8eb6f7cdfcb4b505a2048d44c09c79e90ff0460f3133224223"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "100%",
                                boxShadow: "0px 0px 10px 0px #ccc",
                                marginTop: "5px",
                              }}
                            />
                            <p style={{ textAlign: "start" }}>
                              They are logical and simple to work with, quietly
                              listen to your requirement, and provide you with
                              excellent counsel from a distance. At the core of
                              their customer-centricity is the automation
                              technology they use, which entails bringing the
                              Talent closer to each stage of the process.
                            </p>
                          </div>
                          <div className="user-role-container mt-3">
                            <h6 style={{ fontWeight: "600" }}>Nilesh Ranjan</h6>
                            <p>Founder of Demo Technologies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="recommendation-card"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <div className="product-review">
                            <img
                              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1678802253~exp=1678802853~hmac=7ee8e42d48509b8eb6f7cdfcb4b505a2048d44c09c79e90ff0460f3133224223"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "100%",
                                boxShadow: "0px 0px 10px 0px #ccc",
                                marginTop: "5px",
                              }}
                            />
                            <p style={{ textAlign: "start" }}>
                              They are logical and simple to work with, quietly
                              listen to your requirement, and provide you with
                              excellent counsel from a distance. At the core of
                              their customer-centricity is the automation
                              technology they use, which entails bringing the
                              Talent closer to each stage of the process.
                            </p>
                          </div>
                          <div className="user-role-container mt-3">
                            <h6 style={{ fontWeight: "600" }}>Nilesh Ranjan</h6>
                            <p>Founder of Demo Technologies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            {/*             <div className="media-coverage-container">
              <h4 className="mb-3">Media Coverage</h4>
              <div className="carousel-container">
                <div className="carousel-card">
                  <Slider {...settings}>
                    <div>
                      <a href="">
                        <img
                          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1678801388~exp=1678801988~hmac=b59f7c1ce0a7d8492213ac8a906d3b102361d3977b4d03631ab3703c3ae28b66"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img
                          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1678801388~exp=1678801988~hmac=b59f7c1ce0a7d8492213ac8a906d3b102361d3977b4d03631ab3703c3ae28b66"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img
                          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1678801388~exp=1678801988~hmac=b59f7c1ce0a7d8492213ac8a906d3b102361d3977b4d03631ab3703c3ae28b66"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>
            </div> */}

            <div className="job-categories-container mb-4">
              <h4 className="mb-3 job-categories-heading">
                Hire instant from Trending job categories
              </h4>
              <div className="job-categories">
                {jobs.map((job, index) => (
                  <div key={index} className="job-name">
                    {job}
                  </div>
                ))}
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <Link to="/employee/post-job">
                <button className="btn btn-primary mb-5 mt-4">Post Job</button>
              </Link>
            </div>
          </>
        )
    }
  }

  return (
    <>
      <div className="employee-post-job-container">{renderEmployeeHome()}</div>

      <EmployeeFooter isRegistered={true} />
    </>
  )
}

export default PostJob
