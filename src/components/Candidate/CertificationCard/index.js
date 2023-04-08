import { useParams } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { createRoot } from "react-dom/client"
import Popup from "reactjs-popup"

import HomeHeader from "../CandidateHome"
import CandidateFooter from "../CandidateFooter"

import "./index.css"
import "reactjs-popup/dist/index.css"

const CerfCard = ({ data }) => {
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom(zoom + 0.1)
  }

  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.1)
    }
  }

  useEffect(() => {
    let toggles = document.getElementsByClassName("toggle")
    let contentDiv = document.getElementsByClassName("content")
    let icons = document.getElementsByClassName("icon")

    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener("click", () => {
        if (
          parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight
        ) {
          contentDiv[i].style.height = contentDiv[i].scrollHeight + "px"
          toggles[i].style.color = "#0084e9"
          createRoot(icons[i]).render(<IoIosArrowUp />)
        } else {
          contentDiv[i].style.height = "0px"
          toggles[i].style.color = "#111130"
          createRoot(icons[i]).render(<IoIosArrowDown />)
        }

        for (let j = 0; j < contentDiv.length; j++) {
          if (j !== i) {
            contentDiv[j].style.height = 0
            toggles[j].style.color = "#111130"
            createRoot(icons[j]).render(<IoIosArrowDown />)
          }
        }
      })
    }
  }, [])

  const renderSamplePopup = () => <p>View Sample</p>

  return (
    <>
      <div
        className="container border rounded   align-items-center p-4 w-100 m-0"
        style={{
          fontFamily: "Roboto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 className="mb-3">{data.title}</h3>
        <p style={{ textAlign: "center" }}>{data.about}</p>
        <div className="card-buy-container">
          <div className="price-container">
            <p className="original-price">₹ {data.originalPrice}</p>
            <p className="discount-price">₹ {data.discountPrice}</p>
          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      <div
        className="container border rounded   align-items-center p-4 w-100 m-0 mt-5"
        style={{
          fontFamily: "Roboto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5 className="mb-3">FAQ (Frequently Asked Questions)</h5>

        {data.faq.map((each, i) => (
          <div className="wrapper" key={i}>
            <button className="toggle">
              {each.ques}
              <span className="icon">
                <IoIosArrowDown />
              </span>
            </button>
            <div className="content">
              <p>{each.ans}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="salary-range-container">
        <h5 className="mb-4">Salary Range</h5>
        <div className="salary-cards">
          {data.salaryRange.map((each, i) => (
            <div className="salary-range" key={i}>
              <h5 className="mb-3 mt-4">{each.title}</h5>
              <h6 style={{ fontWeight: "600px" }}>{each.salary}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="container border rounded p-4 w-100 m-0 mt-5">
        <div className="download-container mb-4">
          <p className="completion-heading">Completion of Certificate</p>
          <button className="btn btn-secondary" style={{ marginRight: "8px" }}>
            Download
          </button>
          {renderSamplePopup()}
        </div>
        {/* Modules */}
        {data.modules.map((each, i) => (
          <div className="wrapper" key={i}>
            <button className="toggle">
              {each.title}
              <span className="icon">
                <IoIosArrowDown />
              </span>
            </button>
            <div className="content">
              {each.points.map((each, i) => (
                <li key={i}>{each}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const CertificationCard = () => {
  const { id } = useParams()

  const cardData = {
    seo: {
      title: "SEO",
      about:
        "Unlock Your SEO Potential: Learn Strategies for Driving Online Growthand Launching Your Career",
      originalPrice: 1850,
      discountPrice: 999,
      faq: [
        {
          ques: "What is SEO and why is it important?",
          ans: "SEO stands for search engine optimization and it is the practice of optimizing a website to rank higher in search engine results pages (SERPs). It is important because the majority of online experiences begin with a search engine, and ranking higher in SERPs can drive more traffic to a website.",
        },
        {
          ques: "What are the main components of SEO?",
          ans: "The main components of SEO are on-page optimization, off-page optimization,Technical SEO. On-page optimization includes factors such as keyword research, meta tags, and content optimization. Off-page optimization includes factors such as link building and social media. Technical SEO includes factors such as site structure, page speed, and mobile optimization.",
        },
        {
          ques: "How does SEO differ from paid search?",
          ans: "SEO is the practice of optimizing a website to rank higher in organic search results, while paid search is the practice of placing ads on search engines to appear higher in search results. Paid search can be effective for driving traffic quickly, while SEO requires a longer-term strategy and investment.",
        },
        {
          ques: "How can SEO benefit to any business or website?",
          ans: "SEO can benefit a business or website by driving more targeted traffic to the site, improving brand visibility, and increasing conversions and revenue. It can also help to build trust and authority with potential customers, as appearing at the top of search results can signal credibility and expertise.",
        },
        {
          ques: "How can learning SEO benefit my career as a marketer or web developer?",
          ans: "Learning SEO can be beneficial for a marketer or web developer's career in a few ways. It is a highly in-demand skill in the digital marketing industry, and can lead to job opportunities or higher salaries. Additionally, understanding SEO can help with website design and development, as well as other aspects of digital marketing such as content creation and social media. Finally, the experience of learning a new skill can help professionals build their problem-solving and learning skills.",
        },
        {
          ques: "Who is this SEO course for?",
          ans: "This course is designed for intermediate to advanced marketers, business owners, and webmasters who want to take their SEO knowledge to the next level.	",
        },
      ],
      salaryRange: [
        {
          title: "Entry-level SEO",
          salary: "2 to 3.5 LPA",
        },
        {
          title: "Mid-level SEO",
          salary: "3.5 to 6 LPA",
        },
        {
          title: "Senior-level SEO",
          salary: "6 to 15 LPA",
        },
      ],
      modules: [
        {
          title: "Module 1: Introduction to Advanced SEO",
          points: [
            "Types of SEO: On-page and Off-page",
            "Keyword research and selection",
            "Creating an SEO strategy and setting goals",
            "Tools for SEO analysis and measurement",
          ],
        },
        {
          title: "Module 2: On-page SEO",
          points: [
            "Understanding website structure and navigation",
            "Conducting a website audit and identifying on-page SEO opportunities",
            "Conducting keyword research and identifying target keywords",
            "Optimizing website content for search engines and users",
            "Writing effective meta titles and descriptions",
            "Using header tags and optimizing images for search engines",
            "Optimizing website speed and mobile-friendliness",
            "Using structured data to improve search engine visibility",
          ],
        },
        {
          title: "Module 3: Off-page SEO",
          points: [
            "Understanding the importance of off-page SEO and building a backlink profile",
            "Understanding link building techniques and how to acquire high-quality backlinks",
            "Creating a social media strategy for improved off-page SEO",
            "Identifying opportunities for online reputation management",
            "Creating and optimizing Google My Business listings for local SEO",
            "Using local citations to improve local SEO",
            "Conducting a competitor analysis and identifying off-page SEO opportunities",
          ],
        },
        {
          title: "Module 4: Technical SEO",
          points: [
            "Understanding the basics of technical SEO and how it impacts search engine rankings",
            "Conducting a technical SEO audit and identifying opportunities for improvement",
            "Identifying crawl errors and fixing them",
            "Optimizing website speed and page load times",
            "Understanding website security and HTTPS implementation",
            "Implementing XML sitemaps and robots.txt files",
            "Using schema markup to improve search engine visibility",
          ],
        },
        {
          title: "Module 5: Advanced SEO Techniques",
          points: [
            "Understanding voice search optimization and how to conduct keyword research for voice search",
            "Optimizing videos for search engines and creating a video SEO strategy",
            "Conducting e-commerce SEO and optimizing product pages",
            "Creating a global SEO strategy for international and multilingual websites",
            "Conducting advanced analytics and tracking for improved SEO performance",
            "Using Google Search Console for improved SEO management and reporting",
          ],
        },
        {
          title: "Module 6: SEO Strategy and Management ",
          points: [
            "Creating and executing an SEO strategy that aligns with business goals",
            "Conducting keyword research and creating a content marketing plan for SEO",
            "Using project management tools for improved collaboration and communication",
            "Implementing automation tools for improved SEO management and reporting",
            "Measuring and reporting on SEO performance and making data-driven decisions",
          ],
        },
      ],
    },
  }

  const renderCertificationCard = () => {
    switch (id) {
      case "seo":
        return <CerfCard data={cardData.seo} />

      default:
        null
    }
  }

  return (
    <>
      <HomeHeader />
      <div className="certification-card-container container pt-5 pb-5">
        <div className="certification-card">{renderCertificationCard()}</div>
      </div>
      <CandidateFooter />
    </>
  )
}

export default CertificationCard
