import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"

import HomeHeader from "../HomeHeader"
import ChooseFile from "../../ChooseFile"

import "./index.css"

function Accountsetting() {
  const onClickNavLink = () => {
    //setActiveLink
  }

  return (
    <>
      <HomeHeader />

      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/my-info" onClick={onClickNavLink}>
              My Info
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/graduation">Graduation </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/account-setting/internship">
              Register Myself
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
          <p className="text-center mb-5">
            {" "}
            <Dropdown>
              <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
                Internship
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/account-setting/internship">
                  Internship
                </Dropdown.Item>
                <Dropdown.Item href="/account-setting/fresher">
                  Fresher
                </Dropdown.Item>
                <Dropdown.Item href="/account-setting/experience">
                  Experience
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </p>
        </div>
      </div>
    </>
  )
}

export default Accountsetting
