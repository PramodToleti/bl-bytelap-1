import "./index.css"

const Media = () => {
  return (
    <div className="container">
      <h3 className="mb-4">Recent</h3>
      <div className="main-image-container mb-3">
        <p>Image</p>
      </div>
      <p
        align="end"
        style={{ color: "blue", fontSize: "16px" }}
        className="mb-5"
      >
        Read More...
      </p>

      <div className="media-sub-images-container mb-5">
        <div className="media-sub-images">
          <p>Image</p>
        </div>
        <div className="media-sub-images">
          <p>Image</p>
        </div>
        <div className="media-sub-images">
          <p>Image</p>
        </div>
      </div>
    </div>
  )
}

export default Media
