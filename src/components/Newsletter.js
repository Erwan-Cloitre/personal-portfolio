import { Col, Row} from "react-bootstrap";
import Typed from "react-typed";

export const Newsletter = ({ status, message, onValidated }) => {

  return (
      <Col lg={12} className="newsletter-container">
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={12} xl={12}>
              <h3>
                <Typed
                loop
                typeSpeed={50}
                backSpeed={80}
                strings={[
                  "For more information, contact me &#x1F4A1;...",
                  "See you soon &#x1F596;",
                ]} 
                />
                </h3>
            </Col>
          </Row>
        </div>
      </Col>
  )
}