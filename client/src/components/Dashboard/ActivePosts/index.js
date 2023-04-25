import Stack from "react-bootstrap/Stack"
import Form from "react-bootstrap/Form"
import EmployeeHome from "../../EmployeeHome"
import { isValidElement, useEffect, useState } from "react"

import Internship from "./Internship"
import Fresher from "./Fresher"
import Experience from "./Experience"
import Cookies from "js-cookie"

function Accountsetting() {
  const [activeFilter, setActiveFilter] = useState("Internship")
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      /*  const token = Cookies.get("employeeToken")
      const userId = localStorage.getItem("userId")

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      }
 */
      const response = await fetch("http://localhost:5000/candidate/jobs")
      const data = await response.json()
      if (response.ok) {
        setApplications(data)
        setLoading(false)
      } else {
        console.log(data)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleOptionChange = (event) => {
    setActiveFilter(event.target.name)
  }

  const InternApplications = applications.filter(
    (application) => application.type === "Internship"
  )

  const FresherApplications = applications.filter(
    (application) => application.type === "Fresher"
  )

  const ExperienceApplications = applications.filter(
    (application) => application.type === "Experience"
  )

  const renderActiveJob = () => {
    switch (activeFilter) {
      case "Internship":
        return <Internship InternApplications={InternApplications} />
      case "Fresher":
        return <Fresher FresherApplications={FresherApplications} />
      case "Experience":
        return <Experience ExperienceApplications={ExperienceApplications} />
      default:
        return null
    }
  }

  return (
    <>
      <EmployeeHome />
      <div className="col-lg-8 col-md-8 search-course-right   mb-4 mt-5 p-2 rounded container reveal border  p-3 mb-5">
        <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-4 p-1 rounded container reveal  p-2 mb-5  border">
          <Form.Group className="mb-0 mt-0 fs-10" controlId="formBasicText">
            <Stack direction="horizontal" gap={3}>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-0">
                  <Form.Check
                    inline
                    label="Internship"
                    name="Internship"
                    type={type}
                    id={`inline-${type}-1`}
                    checked={activeFilter === "Internship"}
                    onChange={handleOptionChange}
                  />

                  <Form.Check
                    className=""
                    inline
                    label="Fresher"
                    name="Fresher"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={activeFilter === "Fresher"}
                    onChange={handleOptionChange}
                  />

                  <Form.Check
                    className=""
                    inline
                    label="Experience"
                    name="Experience"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={activeFilter === "Experience"}
                    onChange={handleOptionChange}
                  />
                </div>
              ))}
            </Stack>
          </Form.Group>
        </div>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>{renderActiveJob()}</div>
        )}
      </div>
    </>
  )
}

export default Accountsetting
