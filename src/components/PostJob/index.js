import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./index.css"

const PostJob = () => {
  return (
    <div className="post-job-container">
      <div className="post-job-body">
        <Link to="/employee/post-job">
          <Button>Post Job</Button>
        </Link>
      </div>
    </div>
  )
}

export default PostJob
