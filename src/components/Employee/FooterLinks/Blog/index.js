import blogData from "./blogData"

import { useState } from "react"

import "./index.css"
import EditAll from "./EditAll"
import data from "./postData"

const Blog = (props) => {
  const [recentPost, setRecentPost] = useState(0)
  const [isEditClicked, setEditClicked] = useState(false)

  const renderRelatedPosts = () => {
    return (
      <div className="related-post-container">
        <h3 align="center" className="mb-3">
          Related Posts
        </h3>
        <div className="recent-post-sub">
          {data.map((e, i) => (
            <div
              className="recent-post-sub-main edit-container"
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setRecentPost(i)
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
              src={blogData[0].imageUrl}
              alt="recent post"
              className="recent-post-image"
            />
            <h1 className="mb-4">{blogData[0].title}</h1>
            <p className="recent-post-description">{blogData[0].header}</p>

            <div className="recent-post-body" style={{ paddingLeft: "20px" }}>
              {blogData[0].body.map((item) => {
                return Object.keys(item).map((key) => {
                  return (
                    <p className="recent-post-description mb-4">{item[key]}</p>
                  )
                })
              })}
            </div>
            <p className="recent-post-description">{blogData[0].footer}</p>
          </div>
        </div>
        {renderRelatedPosts()}
      </div>
    )
  }

  if (isEditClicked === true) {
    return <EditAll />
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
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg"
            alt="recent post"
            className="recent-post-image"
          />
          <p className="recent-post-description">
            The Importance of Nonverbal Communication and How to Master It
          </p>
        </div>
        <div className="recent-post-sub ">
          <div
            className="recent-post-sub-main"
            onClick={() => {
              setRecentPost(1)
              props.setIsPostActive(true)
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDvgnZjgcxSSlR0nMtbfoFAYD3uQ2UH7rwv8H0NL-&s"
              className="mb-3"
            />
            <p>
              The Importance of Nonverbal Communication and How to Master It
            </p>
          </div>

          <div
            className="recent-post-sub-main"
            onClick={() => {
              setRecentPost(2)
              props.setIsPostActive(true)
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDvgnZjgcxSSlR0nMtbfoFAYD3uQ2UH7rwv8H0NL-&s"
              className="mb-3"
            />
            <p>
              The Importance of Nonverbal Communication and How to Master It
            </p>
          </div>

          <div
            className="recent-post-sub-main "
            onClick={() => {
              setRecentPost(3)
              props.setIsPostActive(true)
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDvgnZjgcxSSlR0nMtbfoFAYD3uQ2UH7rwv8H0NL-&s"
              className="mb-3"
            />
            <p>
              The Importance of Nonverbal Communication and How to Master It
            </p>
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
