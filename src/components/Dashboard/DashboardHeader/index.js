import React from "react"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import { Link } from "react-router-dom"

import "./index.css"

class DashboardHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div className="dashboard-header-container">
        <Navbar bg="" expand="sm" className="mb-3 pt-3">
          <Container>
            <NavbarToggle
              aria-controls={`offcanvasNavbar-expand-sm`}
              onClick={this.toggle}
            />
            <div className="navbar-offcanvas-container">
              <NavbarOffcanvas
                className="offcanvas-styles"
                style={{ width: "55%" }}
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="start"
                isOpen={this.state.isOpen}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Website
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <div className="justify-content-end flex-grow-1 pe-3 nav-link-container">
                    <Link
                      to="/employee/dashboard/active-posts"
                      className="fs-5 mr-5 nav-link"
                    >
                      Active Posts
                    </Link>
                    <Link
                      to="/employee/dashboard/cv-alerts"
                      className="fs-5 nav-link"
                    >
                      CV Alerts
                    </Link>
                    <Link
                      to="/employee/dashboard/subscription"
                      className="fs-5 nav-link"
                    >
                      Subscription
                    </Link>
                  </div>
                </Offcanvas.Body>
              </NavbarOffcanvas>
            </div>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default DashboardHeader
