import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import { RiShoppingBagFill } from "react-icons/ri"
import { MdLocationOn } from "react-icons/md"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import Popup from "reactjs-popup"
import PostTime from "../../../../PostTime"

const FresherJob = (props) => {
  const fresherJobs = props.jobs

  if (fresherJobs === null) {
    return null
  }

  return fresherJobs.map((data, index) => (
    <div className="d-flex flex-row container justify-content-start">
      <div
        className="text-dark mb-3   div-card rounded container reveal p-2 rounded "
        style={{
          maxWidth: "620px",
          backgroundColor: "white",
          border: "1px solid grey",
          margin: "0px",
        }}
      >
        <>
          <div className="header">
            <h4 className="mb-3">{data.jobTitle}</h4>
            <img
              src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1677222848/Screenshot_20230224_124108_e09oie.png"
              className="company-image"
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }} className="mb-1">
            <FaBuilding style={{ color: "grey", fontSize: "18px" }} />
            <p style={{ color: "grey" }}>Wiro Tech Limited</p>
          </div>
        </>

        <div className="job-details-container-2">
          {data.jobTime !== "" && (
            <div className="job-card-container-fresher">
              <MdShoppingBag className="icon-styles" />
              <p className="details-heading">{data.jobTime}</p>
            </div>
          )}

          {data.jobType !== "" && data.jobTime !== "" && (
            <div className="job-card-container-fresher">
              <BsFillSunFill className="icon-styles" />
              <p className="details-heading">Day Shift</p>
            </div>
          )}

          {data.jobType !== "" && (
            <div
              className={`job-card-container-fresher ${
                data.jobType === "Office" ? "location-style" : ""
              }`}
            >
              <p
                className={` ${
                  data.jobType !== "Office" ? "home-heading" : "details-heading"
                }`}
                style={{ whiteSpace: "nowrap" }}
              >
                {data.jobType === "Work from Home" ? (
                  <>
                    <FaHome
                      className="icon-styles"
                      style={{ marginTop: "9px" }}
                    />
                    <p
                      style={{
                        color: "grey",
                      }}
                      className="home-text"
                    >
                      Work from Home
                    </p>
                  </>
                ) : data.city.length !== 0 ? (
                  <>
                    <MdLocationOn style={{ fontSize: "19px", color: "grey" }} />
                    {data.city.length > 3
                      ? `${data.city[0].label}, ${data.city[1].label}, ${data.city[2].label}  ...`
                      : data.city.map((each) => each.label)}
                  </>
                ) : (
                  data.jobType
                )}
              </p>
            </div>
          )}

          <div className="job-card-container-fresher">
            <RiShoppingBagFill className="icon-styles" />
            <p className="details-heading">Fresher</p>
          </div>

          {data.salaryType !== "" && (
            <div className="job-card-container-fresher">
              <p className="details-heading">
                <BiRupee className="icon-styles" />
                {/*{data.salaryType === "Lac"
                      ? `${Math.floor(data.salaryRange.from)}L - ${Math.floor(
                          data.salaryRange.to
                        )}L PA`
                      : data.salaryType === "Per Month"
                      ? `${Math.floor(
                          data.salaryRange.from / 1000
                        )}k - ${Math.floor(
                          data.salaryRange.to / 1000
                        )}k / month`
                      : data.salaryType === "Fixed"
                      ? `${Math.floor(data.salaryRange)}k / month`
                        : data.salaryType}*/}
                {data.salaryType === "Lac"
                  ? `${data.salaryRange.from}L - ${data.salaryRange.to}L PA`
                  : data.salaryType === "Per Month"
                  ? `${data.salaryRange.from}k - ${data.salaryRange.to}k / month`
                  : data.salaryType === "Fixed"
                  ? `${data.salaryRange}k / month`
                  : data.salaryType}
              </p>
              {data.incentives && data.salaryType === "Fixed" && (
                <>
                  {" "}
                  <p
                    className="details-text"
                    style={{
                      color: "grey",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <span className="incentives-text">+ Incentives </span>
                    <Popup
                      trigger={
                        <button
                          className="popup-button mt-1"
                          style={{ marginLeft: "0px" }}
                        >
                          {" "}
                          ?
                        </button>
                      }
                      position="right center"
                    >
                      <p>
                        This is a performance-based internship. In addition to
                        the minimum-assured stipend, you will also be paid a
                        performance-linked incentive{" "}
                        {`(₹ ${data.incentivesValue}
                          per sale)`}
                      </p>
                    </Popup>
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        <hr className="hr-line" style={{ marginTop: "0px" }} />

        <div className="perks-mobile">
          {data.skills.length > 3 ? (
            <>
              <h6 className="preview-perks">{data.skills[0]}</h6>
              <h6 className="preview-perks">{data.skills[1]}</h6>
              <h6 className="preview-perks">{data.skills[2]} </h6> ...
            </>
          ) : (
            data.skills.map((each, i) => (
              <h6 className="preview-perks" key={i}>
                {each}
              </h6>
            ))
          )}
        </div>

        <div className="perks-desktop ">
          {data.skills.length > 3 ? (
            <>
              <h6 className="preview-perks">{data.skills[0]}</h6>
              <h6 className="preview-perks">{data.skills[1]}</h6>
              <h6 className="preview-perks">{data.skills[2]} </h6> ...
            </>
          ) : (
            data.perks.map((each, i) => (
              <h6 className="preview-perks" key={i}>
                {each.value}
              </h6>
            ))
          )}
        </div>

        <div className="d-flex flex-row justify-content-between mt-2">
          <p style={{ fontSize: "11px", marginBottom: "0px" }}>
            <PostTime time={data.time} />
          </p>
          <Link to={`/candidate/job-details/fresher/${index + 1}`}>
            <button
              type="button"
              style={{
                border: "0",
                background: "transparent",
                color: "blue",
                cursor: "pointer",
                marginBottom: "0px",
              }}
              key={index}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  ))
}

export default FresherJob
