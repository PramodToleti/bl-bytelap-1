import { useLocation, Link } from "react-router-dom"

import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Theme from "../../../../assets/Theme"
import CandidateFooter from "../../CandidateFooter"

const TermsAndConditons2 = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  return (
    <>
      {isRegistered ? (
        <HomeHeader />
      ) : (
        ["sm"].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="mb-3 nav-bar">
            <Container>
              <p className="website-name">Website</p>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header className="dark-mode-active" closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Website
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="dark-mode-active">
                  <div className="justify-content-end flex-grow-1 nav-link-container">
                    <Link
                      to="/login/candidate"
                      style={{
                        textDecoration: "none",
                        marginRight: "5px",
                        color: "#333333",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      to="/candidate/create-account/step-1"
                      style={{
                        marginRight: "8px",
                        color: "#333333",
                        textDecoration: "none",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Candidate
                    </Link>
                    <Link
                      to="/employee/home"
                      style={{
                        marginRight: "8px",
                        color: "#333333",
                        textDecoration: "none",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Employer / Post Job
                    </Link>
                    <Theme />
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))
      )}
      <div className="container mt-4">
        <h3 className="mb-5">Terms & Conditions:</h3>
        <p className="mb-4">1. USE OF PLATFORM AND SERVICES</p>
        <ol
          style={{ listStyleType: "none", fontSize: "17px" }}
          className="mb-5"
        >
          <li className="mb-3">
            1.1 Our platform and services are provided for your personal use
            only. You may not use our platform or services for any commercial
            purpose without our prior written consent.
          </li>
          <li className="mb-3">
            1.2 You must be at least 18 years old to use our platform or
            services. If you are under 18 years old, you must obtain the consent
            of your parent or legal guardian before using our platform or
            services.
          </li>
          <li className="mb-3">
            1.3 You may not use our platform or services in any way that
            violates any applicable laws or regulations or infringes upon the
            rights of any third party.
          </li>
          <li className="mb-3">
            1.4. We reserve the right to modify or discontinue our platform or
            services at any time without notice to you. We will not be liable to
            you or any third party for any modification, suspension or
            discontinuance of our platform or services.
          </li>
        </ol>
        <p className="mb-4">2. USER ACCOUNTS</p>
        <ol
          style={{ listStyleType: "none", fontSize: "17px" }}
          className="mb-5"
        >
          <li className="mb-3">
            2.1 In order to use certain features of our platform or services,
            you may be required to create a user/ employer account. You agree to
            provide accurate and complete information when creating your user/
            employer account and to keep your account information up to date.
          </li>
          <li className="mb-3">
            2.2 You are solely responsible for maintaining the confidentiality
            of your user account login information and for all activities that
            occur under your account.
          </li>
          <li className="mb-3">
            2.3 We reserve the right to suspend or terminate your user/employer
            account at any time without notice to you if we believe that you
            have violated these Terms or any applicable laws or regulations.
          </li>
        </ol>
        <p className="mb-4">3. INTELLECTUAL PROPERTY</p>
        <ol
          style={{ listStyleType: "none", fontSize: "17px" }}
          className="mb-5"
        >
          <li className="mb-3">
            3.1 Our platform and services, including all content and materials
            made available on or through our. platform or services, are the
            property of our company or our licensors and are protected by
            copyright, trademark, and other intellectual property laws. 3.2. You
            may not use, reproduce, modify, distribute, transmit, display,
            perform, publish, or create derivative works of any part of our
            platform or services without our prior written consent.
          </li>
          <li className="mb-3">
            3.2 You may not use, reproduce, modify, distribute, transmit,
            display, perform, publish, or create derivative works of any part of
            our platform or services without our prior written consent
          </li>
        </ol>
        <p className="mb-4">4. LIMITATION OF LIABILITY</p>
        <ol
          style={{ listStyleType: "none", fontSize: "17px" }}
          className="mb-5"
        >
          <li>
            4.1, To the maximum extent permitted by law, we will not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses resulting from:
          </li>
          <li>(a) your use or inability to use our platform or services.</li>
          <li>
            (b) any unauthorized access to or alteration of your transmissions
          </li>
          <li>
            (c) any statements or conduct of any third party on our platform or
            services.
          </li>
          <li className="mb-3">
            (d) any other matter relating to our platform or services.
          </li>
          <li className="mb-3">
            4.2. Our total liability to you for any damages or losses arising
            out of or in connection with these Terms or your use of our platform
            or services shall not exceed the amount paid by you, if any, for
            accessing our platform or using our services.
          </li>
        </ol>
      </div>
      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default TermsAndConditons2
