import Stack from "react-bootstrap/Stack"
import Form from "react-bootstrap/Form"
import EmployeeHome from "../../EmployeeHome"
import { useState } from "react"

import Internship from "./Internship"
import Fresher from "./Fresher"
import Experience from "./Experience"

function Accountsetting() {
  const [activeFilter, setActiveFilter] = useState("Internship")

  const handleOptionChange = (event) => {
    setActiveFilter(event.target.name)
  }

  const renderActiveJob = () => {
    switch (activeFilter) {
      case "Internship":
        return <Internship />
      case "Fresher":
        return <Fresher />
      case "Experience":
        return <Experience />
      default:
        return null
    }
  }

  return (
    <>
      <EmployeeHome />
      <div className="col-lg-8 col-md-8 search-course-right   mb-4 mt-5 p-2  border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-4 p-1   border-secondary rounded container reveal  p-2 mb-5   rounded border border-secondary">
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

        {renderActiveJob()}
      </div>
    </>
  )
}

export default Accountsetting
