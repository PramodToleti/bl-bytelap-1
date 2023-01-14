import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./index.css"

const ResumeTemplate = () => {
  return (
    <div className="main-container">
      <Container className="my-5 body">
        <h1 className="mb-2 create-resume-heading">
          Select Resume Template and Edit
        </h1>
        <Row className="row-container">
          <Col xs={6} md={4} className="my-4 justify-content-center">
            <Link to="create-resume/template/1" className="template-navlink">
              <Card className="card-item card-1">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <button className="use-template-btn">
                    Use this Template
                  </button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4} className="my-4 justify-content-center">
            <Link to="create-resume/template" className="template-navlink">
              <Card className="card-item">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  template
                  <button className="use-template-btn">
                    Use this Template
                  </button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4} className="my-4 justify-content-center">
            <Link to="create-resume/template" className="template-navlink">
              <Card className="card-item">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  template
                  <button className="use-template-btn">
                    Use this Template
                  </button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4} className="my-4 justify-content-center">
            <Link to="create-resume/template" className="template-navlink">
              <Card className="card-item">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  template
                  <button className="use-template-btn">
                    Use this Template
                  </button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4} className="my-4 justify-content-center">
            <Link to="create-resume/template" className="template-navlink">
              <Card className="card-item">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  template
                  <button className="use-template-btn">
                    Use this Template
                  </button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4} className="my-4 justify-content-center">
            <Link to="create-resume/template" className="template-navlink">
              <Card className="card-item">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  template
                  <button className="use-template-btn">
                    Use this Template
                  </button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeTemplate
