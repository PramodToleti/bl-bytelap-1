import Form from "react-bootstrap/Form"

const Experience2 = (props) => {
  const { updateStep3 } = props
  const onClickSubmit = (e) => {
    e.preventDefault()
  }
  const onClickSave = () => {
    updateStep3()
  }
  return (
    <>
      <p className="step-text">Step 2-3</p>
      <Form className="register-form" onSubmit={onClickSubmit}>
        <div className="form-group">
          <label htmlFor="headline">Headline</label>
          <textarea
            className="form-control"
            id="headline"
            placeholder="Enter headline"
            rows="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="about-us">About us</label>
          <textarea className="form-control" id="about-us" rows="5" />
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Duration of join internship!</label>
          <select className="form-control" id="deadline">
            <option>Immediately</option>
            <option>Within a week</option>
            <option>Within two weeks</option>
            <option>Custom date</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onClickSave}>
          Save & Next
        </button>
      </Form>
    </>
  )
}

export default Experience2
