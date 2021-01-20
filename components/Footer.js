import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import footerStyles from "../styles/footerStyle.module.css";

export default function Footer({ footerContent }) {
  return (
    <>
      <footer
        style={{
          position: "sticky",
          width: "100%",
        }}
      >
        <Row>
          <Col sm="6" className="text-center px-5" key={"100"}>
            {footerContent.copyright_text}
          </Col>
          <Col sm="6" className="text-center" key={"200"}>
            <ul className="list-unstyled" key={"300"}>
              {footerContent.social_links.map((link) => {
                return (
                  <li
                    className="list-inline-item px-2"
                    key={link._metadata.uid.toString()}
                  >
                    <a href={link.link_url}>
                      <FontAwesomeIcon
                        icon={["fab", `${link.title}`]}
                        className={footerStyles["socialLinks"]}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </footer>
    </>
  );
}
