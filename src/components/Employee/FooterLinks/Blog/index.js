import { useState } from "react"

import "./index.css"
import EditAll from "./EditAll"
import data from "./postData"

const Blog = (props) => {
  const [recentPost, setRecentPost] = useState(0)
  const [isEditClicked, setEditClicked] = useState(false)

  const mainPosts = data.slice(0, 4)
  const relatedPostData = data.slice(4)

  const renderRelatedPosts = () => {
    return (
      <div className="related-post-container">
        <h3 align="center" className="mb-3">
          Related Posts
        </h3>
        <div className="recent-post-sub">
          {relatedPostData.map((e, i) => (
            <div
              className="recent-post-sub-main edit-container"
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setRecentPost(i + 4)
                props.setIsPostActive(true)
              }}
            >
              <img src={e.imageUrl} className="mb-3 post-image" />
              <p>{e.heading}</p>
            </div>
          ))}
        </div>
        <div className="d-flex  flex-row justify-content-end">
          <div className="recent-post-controllers">
            <button className="recent-post-controllers-btn">
              &lt; Previous
            </button>
            <button className="recent-post-controllers-btn">Next &gt;</button>
          </div>
        </div>
      </div>
    )
  }

  {
    /* Post View */
  }

  if (props.isPostActive) {
    return (
      <div className="blog-container container mb-5">
        <p
          onClick={() => props.setIsPostActive(false)}
          style={{ cursor: "pointer" }}
          className="mb-4"
        >
          &lt; Back
        </p>
        <div className="blog-header mb-3">
          <h4>Career Guidence</h4>
        </div>
        <div className="recent-post-container mb-5">
          <div className="recent-post-main mb-5">
            <img
              src={data[recentPost].imageUrl}
              alt="recent post"
              className="recent-post-image"
            />
            <h1 className="mb-4 mt-3">{data[recentPost].heading}</h1>
            {data[recentPost].description.split("\n").map((each) => (
              <p className="recent-post-description">{each}</p>
            ))}
          </div>
        </div>
        {renderRelatedPosts()}
      </div>
    )
  }

  if (isEditClicked === true) {
    return <EditAll setEditClicked={setEditClicked} />
  }

  return (
    <div className="blog-container container mb-5">
      <div className="blog-header mb-3">
        <h3>Career Guidence</h3>
        <p>Category</p>
      </div>
      <div className="recent-post-container mb-2">
        <div
          className="recent-post-main mb-5"
          style={{ cursor: "pointer" }}
          key="0"
          onClick={() => {
            setRecentPost(0)
            props.setIsPostActive(true)
          }}
        >
          <img
            src={mainPosts[0].imageUrl}
            alt="recent post"
            className="recent-post-image"
          />
          <p className="recent-post-description">{mainPosts[0].heading}</p>
        </div>
        <div className="recent-post-sub ">
          <div
            className="recent-post-sub-main"
            onClick={() => {
              setRecentPost(1)
              props.setIsPostActive(true)
            }}
          >
            <img src={mainPosts[1].imageUrl} className="mb-3" />
            <p>{mainPosts[1].heading}</p>
          </div>

          <div
            className="recent-post-sub-main"
            onClick={() => {
              setRecentPost(2)
              props.setIsPostActive(true)
            }}
          >
            <img src={mainPosts[2].imageUrl} className="mb-3" />
            <p>{mainPosts[2].heading}</p>
          </div>

          <div
            className="recent-post-sub-main "
            onClick={() => {
              setRecentPost(3)
              props.setIsPostActive(true)
            }}
          >
            <img src={mainPosts[3].imageUrl} className="mb-3" />
            <p>{mainPosts[3].heading}</p>
          </div>
        </div>
        <div className="d-flex  flex-row justify-content-end">
          <div className="recent-post-controllers">
            <button className="recent-post-controllers-btn">
              &lt; Previous
            </button>
            <button className="recent-post-controllers-btn">Next &gt;</button>
          </div>
        </div>
      </div>

      <div>
        <button
          className="edit-all-btn"
          onClick={() => {
            setEditClicked(true)
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
        >
          Edit All
        </button>
      </div>

      {renderRelatedPosts()}
    </div>
  )
}

export default Blog
