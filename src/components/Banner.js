import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import Typed from "react-typed";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>Hi I'm Erwan &#x1F47E;<br/>
                <Typed
                loop
                typeSpeed={120}
                backSpeed={80}
                strings={[
                  "Web2 developer",
                  "Blockchain developer",
                  "UI/UX designer",
                ]} 
                />
              </h1>
              <p>A Freelance Fullstack Web & Blockchain developer who loves coding, designing & promoting websites. I will help you to achieve your web project. I help businesses to create their website and reach their goals.<br/>Any Project in mind?
              </p>
              <a href="#contact"><button>Let's connect <ArrowRightCircle size={25}/></button></a>
              </div>}
            </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img"/>
              </div>}
            </TrackVisibility>
            </Col>
          </Row>
        </Container>
    </section>
  )
}