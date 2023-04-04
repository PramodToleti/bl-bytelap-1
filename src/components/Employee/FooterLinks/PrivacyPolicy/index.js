import { useLocation } from "react-router-dom"

import EmployeeFooter from "../../EmployeeFooter"
import UnregisteredNavBar from "../../UnregisteredNavBar"
import EmployeeHome from "../../../EmployeeHome"

const PrivacyPolicy = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  return (
    <>
      {isRegistered ? <EmployeeHome /> : <UnregisteredNavBar />}
      <div className="container mt-5">
        <h3 className="mb-5">Privacy Policy:</h3>
        <p className="mb-5">
          <span style={{ color: "#f07014" }}>Company</span> is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and disclose your personal information. By using our website,
          products, or services, you consent to the terms of this Privacy
          Policy.
        </p>

        <p className="mb-5">
          1. <span style={{ fontWeight: "600" }}> Information Collection:</span>{" "}
          We collect personal information when you use our website, products, or
          services. The information we collect may include your name, email
          address, mailing address, phone number, resume and other information
          that you provide to us.
        </p>

        <p className="mb-5">
          2. <span style={{ fontWeight: "600" }}>Information Use:</span> We use
          the information we collect to provide and improve our products and
          services, to communicate with you, to respond to your inquiries, and
          to personalize your experience. We may also use your information for
          marketing purposes, but you can opt-out of such communications at any
          time.
        </p>

        <p className="mb-5">
          3.{" "}
          <span style={{ fontWeight: "600" }}> Information Disclosure: </span>
          We may disclose your personal information to third parties who provide
          services to us, such as hosting providers, payment processors, and
          email service providers. We may also disclose your information if
          required by law or if we believe it is necessary to protect our
          rights, property, or safety.
        </p>

        <p className="mb-5">
          4.{" "}
          <span style={{ fontWeight: "600" }}>
            Confidentiality and Security :
          </span>{" "}
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. At{" "}
          <span style={{ color: "#f07014" }}>Company</span>, we place great
          emphasis on safeguarding the confidentiality and security of your
          Personal Information. We have allocated substantial resources to
          ensure that your personal data is stored and protected in a secure
          manner. When utilizing external service providers to act as
          processors, we hold them to the same rigorous standards that we abide
          by. Regardless of the location where your Personal Information is
          being stored or transferred. We are not responsible for the privacy
          practices of these third-party websites or platforms but we take all
          reasonable measures to ensure that your personal data remains secure.
          We encourage you to read their privacy policies before providing any
          personal information. Our aim is to adhere to the provisions outlined
          in the Information Technology Act, 2000, and any related rules and
          regulations to ensure the safeguarding and preservation of your
          privacy.
        </p>

        <p className="mb-5">
          5. <span style={{ fontWeight: "600" }}>Cookies: </span> We may use
          cookies and similar technologies to enhance your experience and
          personalize your interactions with us. You can adjust your browser
          settings to refuse cookies, but this may limit your ability to use our
          website, products, or services.
        </p>

        <p className="mb-5">
          6. <span style={{ fontWeight: "600" }}>Third Part Content :</span> Our
          website may contain links to other websites and We are not responsible
          for the privacy practices or content of these websites.
        </p>

        <p className="mb-5">
          7. <span style={{ fontWeight: "600" }}> Social Media :</span> We
          utilizes social media channels, pages, and accounts to engage and
          communicate with its customers. In an effort to enhance its products
          and services, <span style={{ color: "#f07014" }}>Company</span>{" "}
          monitors and reviews comments and posts made on these channels that
          are related to itself. It is important to note that sensitive personal
          information, including special categories of personal data such as
          information that reveals racial or ethnic origin, political opinions,
          religious or philosophical beliefs, trade union membership, genetic or
          biometric data, data concerning health or a person's sexual
          orientation, as well as other sensitive personal data, such as
          criminal convictions and national identification numbers, should not
          be communicated to <span style={{ color: "#f07014" }}>Company</span>{" "}
          through social media channels. Additionally, any excessive,
          inappropriate, offensive, or defamatory content is prohibited.{" "}
          <span style={{ color: "#f07014" }}>Company</span> cannot be held
          responsible for any information or content posted on these sites by
          anyone other than its own employees.{" "}
          <span style={{ color: "#f07014" }}>Company</span> is solely
          accountable for its own use of the Personal Information obtained
          through these social media sites.
        </p>

        <p className="mb-5">
          8. <span style={{ fontWeight: "600" }}> Children's Privacy </span>:
          Our website, products, and services are not intended for use by
          children under the age of 13, We do not knowingly collect personal
          information from children under the age of 13
        </p>

        <p className="mb-5">
          9. <span style={{ fontWeight: "600" }}>Disclaimer :</span>{" "}
          <span style={{ color: "#f07014" }}>Company</span>
          ensures that it doesn't retain any personal account information or
          credit/debit card details of its users.{" "}
          <span style={{ color: "#f07014" }}>Company</span> cannot be held
          responsible for any loss or damage incurred by users due to the
          accidental or intentional disclosure of their account, credit card or
          debit card information during online transactions or payments made for
          any products or services offered on the platform. If any user shares
          personal information with{" "}
          <span style={{ color: "#f07014" }}>Company</span> that is not
          requested during the registration process, whether mandatory or
          optional, <span style={{ color: "#f07014" }}>Company</span> will not
          be held responsible for any information security breaches or
          disclosures related to such information...
        </p>

        <p className="mb-5">
          10.{" "}
          <span style={{ fontWeight: "600" }}> Information Collection:</span> We
          collect personal information when you use our website, products, or
          services. The information we collect may include your name, email
          address, mailing address, phone number, resume and other information
          that you provide to us.
        </p>
      </div>
      <EmployeeFooter />
    </>
  )
}

export default PrivacyPolicy
