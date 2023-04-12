import { Link } from "react-router-dom"

import Form from "react-bootstrap/Form"

const Experience3 = () => {
  const onClickSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <p className="step-text">Step 3-3</p>
      <Form className="register-form" onSubmit={onClickSubmit}>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            className="form-control"
            id="skills"
            placeholder="Eg: Digital Marketing, iOS Developer"
          />
          <p>IOS Developer</p>
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">My Portfolio & Projects (optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="React Project"
            id="portfolio"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Roles and responsibilities in the project"
          />
          <p>Add more</p>
        </div>

        <div className="form-group">
          <label htmlFor="achievements">Add Achievements (optional)</label>
          <input
            type="text"
            className="form-control"
            id="achievements"
            placeholder="Coding and Quiz competitions"
          />
          <div className="achievements">
            <p className="acheivements-text">Attach Certificate</p>
            <p>Add more</p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="languages">Languages</label>
          <input
            type="text"
            className="form-control"
            id="languages"
            placeholder="English, Hindi"
          />
        </div>
        <p>Preview</p>
        <Link to="/home" className="link-button">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </Link>
      </Form>
    </>
  )
}

export default Experience3
