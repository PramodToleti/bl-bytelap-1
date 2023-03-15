import "./index.css"

const Blog = () => {
  return (
    <div className="blog-container container">
      <div className="blog-main-container">
        <div className="blog-content">
          <div className="blog-cells mb-4">
            <div className="blog-cell"></div>
            <div className="blog-cell"></div>
            <div className="blog-cell"></div>
            <div className="blog-cell"></div>
            <div className="blog-cell"></div>
            <div className="blog-cell"></div>
          </div>
          <div className="recent-posts-container">
            <p>Recent Post</p>
            <div className="recent-post-main mb-3"></div>
            <div className="recent-post mb-2"></div>
            <div className="recent-post mb-3"></div>
            <div className="recent-post-controllers d-flex flex-row justify-content-between mb-3">
              <button type="button" className="controller-btns">
                &lt; Previous
              </button>
              <button type="button" className="controller-btns">
                Next &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="blog-side-container">
          <div className="blog-side-content p-4">
            <p className="mb-3">Category: </p>
            <p className="mb-3">Skills Development</p>
            <p className="mb-3">Communication Skills</p>
            <p className="mb-3">Personally Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
