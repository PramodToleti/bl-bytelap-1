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
  const [activeJobs, setActiveJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDataChanged, setIsDataChanged] = useState(false)

  const handleDataChange = () => {
    setIsDataChanged(!isDataChanged)
  }

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true)
      const response = await fetch("http://localhost:5000/candidate/jobs")
      const data = await response.json()
      if (response.ok) {
        setActiveJobs(data)
        setLoading(false)
      } else {
        console.log(data)
        setLoading(false)
      }
    }

    async function fetchApplications() {
      setLoading(true)
      const token = Cookies.get("employeeToken")
      const userId = localStorage.getItem("userId")

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      }
      const response = await fetch(
        "http://localhost:5000/candidate/applications",
        options
      )
      const data = await response.json()
      if (response.ok) {
        setApplications(data)
        setLoading(false)
      } else {
        console.log(data)
        setLoading(false)
      }
    }

    fetchApplications()
    fetchJobs()
  }, [isDataChanged])

  const handleOptionChange = (event) => {
    setActiveFilter(event.target.name)
  }

  const InternJobs = activeJobs.filter((job) => job.type === "Internship")

  const FresherJobs = activeJobs.filter((job) => job.type === "Fresher")

  const ExperienceJobs = activeJobs.filter((job) => job.type === "Experience")

  let InternApplications = applications.filter(
    (application) => application.type === "Internship"
  )

  let FresherApplications = applications.filter(
    (application) => application.type === "Fresher"
  )

  let ExperienceApplications = applications.filter(
    (application) => application.type === "Experience"
  )

  for (const obj of InternApplications) {
    for (const obj2 of InternJobs) {
      if (obj.jobName === obj2.jobTitle) {
        obj2.applications = obj2.applications || []
        if (!obj2.applications.includes(obj)) {
          obj2.applications.push(obj)
        }
      }
    }
  }

  for (const obj of FresherApplications) {
    for (const obj2 of FresherJobs) {
      if (obj.jobName === obj2.jobTitle) {
        obj2.applications = obj2.applications || []
        if (!obj2.applications.includes(obj)) {
          obj2.applications.push(obj)
        }
      }
    }
  }

  for (const obj of ExperienceApplications) {
    for (const obj2 of ExperienceJobs) {
      if (obj.jobName === obj2.jobTitle) {
        obj2.applications = obj2.applications || []
        if (!obj2.applications.includes(obj)) {
          obj2.applications.push(obj)
        }
      }
    }
  }

  const renderActiveJob = () => {
    switch (activeFilter) {
      case "Internship":
        return (
          <Internship
            InternJobs={InternJobs}
            handleDataChange={handleDataChange}
          />
        )
      case "Fresher":
        return (
          <Fresher
            FresherJobs={FresherJobs}
            handleDataChange={handleDataChange}
          />
        )
      case "Experience":
        return (
          <Experience
            ExperienceJobs={ExperienceJobs}
            handleDataChange={handleDataChange}
          />
        )
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
