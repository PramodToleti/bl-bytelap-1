import DashboardHeader from "../DashboardHeader"
import EmployeeHome from "../../EmployeeHome"

function ActivePosts() {
  return (
    <>
      <EmployeeHome />
      <div style={{ minHeight: "500px", margin: "10px" }}>
        <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
          <p className="text-start fs-5">Dashboard</p>
          <hr></hr>
          <div>
            <DashboardHeader />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "5px",
                minHeight: "200px",
              }}
            >
              <h1>Active Posts</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActivePosts
