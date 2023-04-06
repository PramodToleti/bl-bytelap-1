import { useState } from "react"

import EmployeeHome from "../../EmployeeHome"

import "./index.css"

function CardDescription({ title, description }) {
  return (
    <div className="card-description">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function CardBilling({ price }) {
  return (
    <div className="card-billing">
      <p>
        <strong className="price">₹ {price}</strong>
      </p>
    </div>
  )
}

function CardFeatures({ data, access }) {
  return (
    <div className="card-features">
      <h6 style={{ marginLeft: "14px", marginBottom: "8px" }}>
        {access} CV Access
      </h6>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

function CardAction({ clickMe }) {
  return (
    <div className="card-action">
      <button onClick={clickMe}>BUY NOW</button>
    </div>
  )
}

function PricingCard(props) {
  const {
    type,
    title,
    description,
    price,
    access,
    mostPopular,
    data,
    clickMe,
  } = props

  return (
    <div className={`card_ pricing-card ${type}`}>
      {mostPopular ? <span className="most-popular">Most Popular</span> : null}
      <CardDescription title={title} description={description} />
      <CardBilling price={price} />
      <CardFeatures data={data} access={access} />
      <CardAction clickMe={clickMe} />
    </div>
  )
}

const Subscription = () => {
  const [toggle, setToggle] = useState(false)

  const cardsData = [
    {
      id: 1,
      type: "basic",
      title: "Basic EnterPrise",
      description: "",
      price: 3499,
      access: 170,
      mostPopular: false,
      data: ["Preview & Download", "Call", "make a Team"],
    },
    {
      id: 2,
      type: "medium",
      title: "Medium EnterPrise",
      description: "",
      price: 8999,
      access: 390,
      mostPopular: false,
      data: ["Preview & Download", "Call", "make a Team"],
    },
    {
      id: 3,
      type: "pro",
      title: "Large Enterprise",
      description: "",
      price: 13500,
      access: 890,
      mostPopular: false,
      data: ["Preview & Download", "Call", "make a Team"],
    },
  ]

  const cardsData2 = [
    {
      id: 1,
      type: "basic",
      title: "Basic EnterPrise",
      description: "",
      price: 17450,
      access: 850,
      mostPopular: false,
      data: ["Preview & Download", "Call", "make a Team"],
    },
    {
      id: 2,
      type: "medium",
      title: "Medium EnterPrise",
      description: "",
      price: 44950,
      access: 2300,
      mostPopular: false,
      data: ["Preview & Download", "Call", "make a Team"],
    },
    {
      id: 3,
      type: "pro",
      title: "Large Enterprise",
      description: "",
      price: 81000,
      access: 4700,
      mostPopular: false,
      data: ["Preview & Download", "Call", "make a Team"],
    },
  ]

  return (
    <>
      <EmployeeHome />
      <div className="container pt-5 pb-5">
        <div className="subscription-header mb-2">
          <p className="d-flex resume-database mb-3">
            NCV <span className="circle-exclamation">!</span> Resume Database
            Access Packages
          </p>
          <h3 className="mb-2" style={{ fontWeight: "400" }}>
            Search Active Candidate's with India's First{" "}
            <span style={{ color: "red" }}>NCV</span> Resume Database
          </h3>

          {/* Toggle Section */}
          <section className="toggle-section">
            <p>Medium</p>
            <div
              className={toggle ? "toggle-area monthly" : "toggle-area anually"}
              onClick={() => setToggle(!toggle)}
            >
              <div className="toggle-btn"></div>
            </div>
            <p>Large</p>
          </section>

          {/* Subscription Cards */}
          <div className="app-wrapper">
            {toggle
              ? cardsData2.map((props) => {
                  return <PricingCard {...props} key={props.id} />
                })
              : cardsData.map((props) => {
                  return <PricingCard {...props} key={props.id} />
                })}
          </div>
        </div>

        <div className="mt-4 mb-3">
          <ul>
            <li className="mb-2">
              All NCV resumes will remain same until all not used by you
            </li>
            <li className="mb-2">
              CV View / CV Download / Click to view resume / Click to view phone
              no = 1 NCV Access,
            </li>
            <li className="mb-2">
              Please note that the amounts are exclusive of taxes. Taxes will be
              added as applicable.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Subscription
