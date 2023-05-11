import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import EmployeeHome from "../EmployeeHome"
import { Link } from "react-router-dom"
import ChooseFile from "../../assets/ChooseFile"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import ChooseCity from "../../assets/ChooseCity"

function CompanySetting() {
  const [validated, setValidated] = useState(false)
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    officialEmail: "",
    firstName: "",
    lastName: "",
    role: "",
    companyWebsite: "",
    city: "",
    aboutCompany: "",
    companyAddress: "",
  })

  const handleFileUpload = (e) => {
    setFile(e)
  }

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("employeeToken")}`,
      },
      body: JSON.stringify({
        employeeId: localStorage.getItem("userId"),
      }),
    }

    fetch("http://localhost:5000/employee/company-info", options)
      .then((res) => res.json())
      .then((res) => {
        setCompanyInfo({
          companyName: res.companyName,
          officialEmail: res.officialEmail,
          firstName: res.firstName,
          lastName: res.lastName,
          role: res.role,
          companyWebsite: res.companyWebsite,
          city: res.city,
          aboutCompany: res.aboutCompany,
          companyAddress: res.companyAddress,
        })
      })
      .catch((err) => console.log(err))
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const token = Cookies.get("employeeToken")

    const formdata = new FormData()

    formdata.append("employeeId", localStorage.getItem("userId"))
    formdata.append("companyName", companyInfo.companyName)
    formdata.append("officialEmail", companyInfo.officialEmail)
    formdata.append("firstName", companyInfo.firstName)
    formdata.append("lastName", companyInfo.lastName)
    formdata.append("role", companyInfo.role)
    formdata.append("companyWebsite", companyInfo.companyWebsite)
    formdata.append("city", companyInfo.city)
    formdata.append("aboutCompany", companyInfo.aboutCompany)
    formdata.append("companyAddress", companyInfo.companyAddress)
    formdata.append("file", file)

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    }

    console.log(options)

    const response = await fetch(
      "http://localhost:5000/employee/update-company-info",
      options
    )

    const data = await response.json()
    if (response.ok) {
      toast.success("Updated Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setIsLoading(false)
    } else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setIsLoading(false)
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const onChangeCity = (e) => {
    setCompanyInfo({ ...companyInfo, city: e })
  }

  console.log(companyInfo)

  return (
    <>
      <ToastContainer />
      <EmployeeHome />
      <div
        className="col-lg-6 col-md-6 search-course-right   mb-0 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ backgroundColor: "white" }}
      >
        <p className="text-center mb-5 fs-3"> Company Profile </p>

        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3 mt-2" controlId="companyName">
            <Form.Label>Company Name </Form.Label>
            <Form.Control
              required
              value={companyInfo.companyName}
              type="Email ID"
              placeholder="Info@demo.com"
              onChange={(e) => {
                setCompanyInfo({ ...companyInfo, companyName: e.target.value })
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your company name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="officialEmail">
            <Form.Label>Officail Mail ID </Form.Label>
            <Form.Control
              required
              value={companyInfo.officialEmail}
              type="Email ID"
              placeholder="Info@demo.com"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  officialEmail: e.target.value,
                })
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your official email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="companyWebsite">
            <Form.Label>Company URL </Form.Label>
            <Form.Control
              required
              value={companyInfo.companyWebsite}
              type="link"
              placeholder="URL"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  companyWebsite: e.target.value,
                })
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your company website
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>City</Form.Label>
            <ChooseCity
              onChangeCity={(e) => onChangeCity(e)}
              value={companyInfo.city}
            />
          </Form.Group>
          {companyInfo.city === "" && validated && (
            <p
              style={{
                color: "#dc3545",
                marginTop: "10px",

                fontSize: ".875rem",
              }}
            >
              Please select a city.
            </p>
          )}

          <Form.Group className="mb-3 mt-2">
            <Form.Label>You are </Form.Label>
            <Form.Select
              required
              value={companyInfo.role}
              onChange={(e) => {
                setCompanyInfo({ ...companyInfo, role: e.target.value })
              }}
            >
              <option> Select an option </option>
              <option> Owner </option>
              <option>Human Resources</option>
              <option>Junior Human Resources</option>
              <option> Marketing Specialis </option>
              <option> Junior Marketing Specialist </option>
              <option> CEO </option>
              <option> CTO </option>
              <option> Other </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select your role
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="aboutCompany">
            <Form.Label>About Company</Form.Label>
            <Form.Control
              required
              value={
                companyInfo.aboutCompany !== "undefined"
                  ? companyInfo.aboutCompany
                  : ""
              }
              type="text"
              as="textarea"
              rows={4}
              placeholder=""
              onChange={(e) => {
                setCompanyInfo({ ...companyInfo, aboutCompany: e.target.value })
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your company description
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="companyAddress">
            <Form.Label>Company Address</Form.Label>
            <Form.Control
              required
              value={companyInfo.companyAddress}
              type="text"
              as="textarea"
              rows={3}
              placeholder=""
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  companyAddress: e.target.value,
                })
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your company address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" className="mt-3" controlId="companyLogo">
            <Form.Label className="mt-2">Upload Logo </Form.Label>
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
              <ChooseFile handleFileUpload={handleFileUpload} />
            </Stack>
            <Form.Control.Feedback type="invalid">
              Please upload company logo.
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2 mt-5">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              style={{ width: "100%", display: "grid", placeItems: "center" }}
              onClick={handleUpdate}
            >
              {isLoading ? (
                <Oval
                  height="20"
                  width="20"
                  radius="9"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default CompanySetting
