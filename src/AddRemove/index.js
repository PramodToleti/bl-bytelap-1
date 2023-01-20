import { useState } from "react"
function AddRemove() {
  const [inputFields, setInputFields] = useState([
    {
      fullName: "",
      emailAddress: "",
      salary: "",
    },
  ])

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fullName: "",
        emailAddress: "",
        salary: "",
      },
    ])
  }
  const removeInputFields = (index) => {
    const rows = [...inputFields]
    rows.splice(index, 1)
    setInputFields(rows)
  }
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target
    const list = [...inputFields]
    list[index][name] = value
    setInputFields(list)
  }
  return (
    <div
      className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal shadow-sm p-3 mb-5 bg-white rounded border border-secondary"
      style={{ width: "97%" }}
    >
      <div className="row">
        <div className="col-sm-12">
          {inputFields.map((data, index) => {
            const { fullName, emailAddress, salary } = data
            return (
              <div className="row my-3" key={index}>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={fullName}
                      name="fullName"
                      className="form-control"
                      placeholder="Degree"
                    />
                  </div>
                </div>
                <div className="col-sm-12 mt-3">
                  <input
                    type="text"
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={salary}
                    name="salary"
                    className="form-control"
                    placeholder="Field of Study"
                  />
                </div>
                <div className="col mt-1">
                  {inputFields.length !== 1 ? (
                    <button
                      className="btn btn-outline-danger"
                      onClick={removeInputFields}
                    >
                      Remove
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )
          })}

          <div className="row">
            <div className="col-sm-12">
              <button
                className="btn btn-outline-success "
                onClick={addInputField}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  )
}
export default AddRemove
