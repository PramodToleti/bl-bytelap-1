import React from "react"

import "./index.css"

const FraudAlert = () => {
  return (
    <div className="fraud-alert-container container">
      <div className="fraud-alert-wrapper">
        <div className="fraud-alert-title">
          <h1 className="mb-4">Fraud Alert</h1>
        </div>
        <div className="fraud-alert-content fs-5">
          <p className="mb-3 fs-4" style={{ fontWeight: "500" }}>
            Don't Get Scammed: Beware of Fraudulent Requests for Payment in
            Exchange for Job Offers
          </p>

          <p className="mb-4 fs-5">
            At Company, we believe that finding a job should be a safe and
            secure experience for all job seekers. We are committed to providing
            a trustworthy platform where job seekers can connect with reputable
            employers and find meaningful employment opportunities. <br />
            However, with the rise of online job portals, there has also been an
            increase in fraudulent activity aimed at taking advantage of
            unsuspecting job seekers. That's why we take the safety and security
            of our users seriously and want to provide some important tips to
            help you stay safe while searching for jobs online.
          </p>

          <p className="mb-5 fs-5">
            {" "}
            Our top priority is to make sure you can trust the job search
            process on Company. We recommend that you always research the
            company and job opportunity thoroughly, be wary of unsolicited job
            offers, and never share personal information until you have verified
            the job offer. Trust your instincts and report any suspicious
            activity to us immediately.
            <br />
            We want you to have a safe and successful job search experience, and
            we are committed to providing a platform where you can find
            legitimate job opportunities with peace of mind.
          </p>

          <h3 className="mb-4">
            {" "}
            7 Signs of a Fake Job Offer You Shouldn't Ignore{" "}
          </h3>
          <ol className="mb-4">
            <li>
              {" "}
              Looking for confidential information ( Credit Card / OTP / Aadhar
              / PAN, etc).
            </li>
            <li>
              {" "}
              Job offers that promise unrealistic compensation or benefits.
            </li>
            <li>
              {" "}
              Requests for personal or financial information upfront, before the
              employer has verified your qualifications or before you have had
              an interview.
            </li>
            <li>
              Lack of detail about the job responsibilities, company culture, or
              specific qualifications required for the position.
            </li>
            <li>
              {" "}
              Poor grammar or unprofessional communication from the employer.{" "}
            </li>
            <li>
              Immediate job offers without any interview process or reference
              checks.
            </li>{" "}
            <li> Requests for payment or fees to secure the job offer. </li>
          </ol>

          <h3 className="mb-4">6 Ways to Protect</h3>
          <ol className="mb-5">
            <li>
              Yourself Against Job Scams and Frauds Research the company and job
              opportunity thoroughly before applying or accepting an offer.{" "}
            </li>
            <li>
              Verify the legitimacy of the employer by checking their website,
              contact information, and social media profiles.
            </li>
            <li>
              {" "}
              Be cautious of unsolicited job offers or requests for personal
              information.
            </li>
            <li>
              {" "}
              Never share personal or financial information until you have
              confirmed the job opportunity is legitimate.
            </li>
            <li>
              {" "}
              Trust your instincts and be wary of anything that seems too good
              to be true or raises red flags.{" "}
            </li>
            <li>
              Report any suspicious activity or job offers to the job portal or
              relevant authorities.
            </li>
          </ol>

          <p style={{ fontWeight: "500" }} className="fs-4 mb-4">
            If you have any concerns or questions regarding a job offer or
            communication that you have received, please contact us at
            fraudalert,
            <span style={{ textDecoration: "underline" }}>@company.com.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FraudAlert
