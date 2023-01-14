import { Link } from "react-router-dom"

import "./index.css"

const TemplateView = () => (
  <div className="template-view-container">
    <div className="view-container">
      <img
        src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1673701789/WhatsApp_Image_2023-01-14_at_18.06.53_y90vxe.jpg"
        className="template-image"
      />
      <div className="edit-container">
        <Link to="/create-resume/template/1/edit">
          <button type="button" className="edit-btn edit-text">
            Edit
          </button>
        </Link>
        <button type="button" className="next-text edit-btn">
          Next
        </button>
      </div>
    </div>
  </div>
)

export default TemplateView
