import { useState } from "react"
import { useLocation } from "react-router-dom"

import "./index.css"
import data from "./postData"
import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeHome from "../../../EmployeeHome"
import EmployeeFooter from "../../EmployeeFooter"

const Blog = (props) => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  const [recentPost, setRecentPost] = useState(0)
  const [currentIndex1, setCurrentIndex1] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)

  const mainPosts = data.slice(0, 8)
  const relatedPostData = data.slice(3)

  const numContainers = 8
  const containerWidth = 300 // adjust this value to match the width of your containers
  const sliderWidth1 = numContainers * containerWidth
  const sliderWidth2 = numContainers * containerWidth

  const handlePreviousClick1 = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex - 1 + numContainers) % numContainers
    )
  }

  const handleNextClick1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % numContainers)
  }

  const handlePreviousClick2 = () => {
    setCurrentIndex2(
      (prevIndex) => (prevIndex - 1 + numContainers) % numContainers
    )
  }

  const handleNextClick2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % numContainers)
  }
  const renderRelatedPosts = () => {
    return (
      <div className="related-post-container">
        <h3 align="center" className="mb-3">
          Related Posts
        </h3>
        <div
          className="recent-post-sub"
          style={{
            transform: `translateX(${-currentIndex1 * containerWidth}px)`,
            width: `${sliderWidth1}px`,
            transition: "transform 0.5s ease",
          }}
        >
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
            <button
              className="recent-post-controllers-btn"
              onClick={handlePreviousClick1}
            >
              &lt; Previous
            </button>
            <button
              className="recent-post-controllers-btn"
              onClick={handleNextClick1}
            >
              Next &gt;
            </button>
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

  return (
    <>
      {isRegistered ? <EmployeeHome /> : <UnregisteredNavBar />}
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
          <div
            className="recent-post-sub "
            style={{
              transform: `translateX(${-currentIndex2 * containerWidth}px)`,
              width: `${sliderWidth2}px`,
              transition: "transform 0.5s ease",
            }}
          >
            {mainPosts.slice(1).map((e, i) => (
              <div
                className="recent-post-sub-main"
                onClick={() => {
                  setRecentPost(i + 1)
                  props.setIsPostActive(true)
                }}
              >
                <img
                  src={mainPosts[i + 1].imageUrl}
                  className="mb-3 post-image"
                />
                <p>{mainPosts[i + 1].heading}</p>
              </div>
            ))}
          </div>
          <div className="d-flex  flex-row justify-content-end mb-4">
            <div className="recent-post-controllers">
              <button
                className="recent-post-controllers-btn"
                onClick={handlePreviousClick2}
              >
                &lt; Previous
              </button>
              <button
                className="recent-post-controllers-btn"
                onClick={handleNextClick2}
              >
                Next &gt;
              </button>
            </div>
          </div>
        </div>

        {renderRelatedPosts()}
      </div>
      <EmployeeFooter isRegistered={isRegistered} />
    </>
  )
}

export default Blog
