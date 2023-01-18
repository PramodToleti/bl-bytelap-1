import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function FormFloatingstep1() {
  return (
    <>
      <div class="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal shadow-sm p-3 mb-5 bg-white rounded border border-secondary">
        <h5 class="black  text-center black p-3">Step 1-2 </h5>
        <h3 class="black  text-center black p-3">Create your account. </h3>
        <FloatingLabel controlId="floatingText" label="First Name">
          <Form.Control type="text" placeholder="text" />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingText" label="Last Name">
          <Form.Control type="text" placeholder="text" />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingEmail" label="Email id">
          <Form.Control type="email" placeholder="email" />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingNumber" label="Number">
          <Form.Control type="Number" placeholder="Number" />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingCity" label="City">
          <Form.Control type="Text" placeholder="City" />
        </FloatingLabel>
        <br></br>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload Resume</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <h6>OR</h6>
        <Button variant="outline-primary">Create New Resume</Button>{" "}
        <div className="d-grid gap-2 mt-5">
          <Button variant="primary" size="lg">
            Save & Next
          </Button>
        </div>
        <p class="black  text-center black p-3">
          Already Registered? <a href="login.html">Login </a>
        </p>
      </div>
    </>
  )
}

export default FormFloatingstep1
