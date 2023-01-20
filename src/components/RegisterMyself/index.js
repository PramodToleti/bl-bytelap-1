import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"

function RegisterMyself() {
  return (
    <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5    rounded">
      <p className="text-center mb-5">
        {" "}
        <Dropdown>
          <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
            Internship
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Internship</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Fresher</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Experience</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </p>

      <Form action="">
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Are you actively looking for job"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Form.Label>Job Tittle</Form.Label>
          <Form.Control
            type="email"
            placeholder="software developer , digital marketing"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-2">
          <Form.Label>Looking for full time or part time </Form.Label>
          <Form.Select>
            <option> Select an option </option>
            <option> Full-Time </option>
            <option>Part-Time</option>
            <option>Both</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-2">
          <Form.Label>What is the schedule of this internship</Form.Label>
          <Form.Select>
            <option>Select an option </option>
            <option> Office </option>
            <option>Remote</option>
            <option>Both</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-2">
          <Form.Label>Duration of Internship </Form.Label>
          <Form.Select>
            <option>Select an option </option>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
            <option> 6 </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Form.Label>
            Which location do you prefer looking for internship ?
          </Form.Label>
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>

        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Form.Label>Any more location </Form.Label>
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>

        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Stack direction="horizontal" gap={3}>
            <label className="mx-1">Upload Resume </label>
            <input className="d-none" type="file" />
            <button className="btn btn-outline-primary">Upload</button>
            <div className="">
              {" "}
              <p>OR</p>
            </div>
            <button className=" btn btn-outline-secondary">Create</button>
          </Stack>
        </Form.Group>

        <div className="d-grid gap-2 mt-5">
          <Button variant="primary" size="lg">
            Save & Next
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterMyself
