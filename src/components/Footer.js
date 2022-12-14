import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Newsletter />
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" className="logo-icon"/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/erwan-cloitre/"><img src={navIcon1} alt="social-icon1"/></a>
              <a href=""><img src={navIcon2} alt="social-icon2"/></a>
              <a href=""><img src={navIcon3} alt="social-icon3"/></a>
            </div>
            <p>Copyright &copy; 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}