import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorShap from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              <p>I learned C++ at 42 (Paris) in 2019. And after, I learned Web development language (React, Symfony..), I built robust and user friendly web applications from scratch. I practiced a lot by building various websites. I also acquired new skills on different technologies (Web3, Smart Contract), learning by myself.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image"/>
                  <h5>Web2 Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"/>
                  <h5>Web3 Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"/>
                  <h5>Creativity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image"/>
                  <h5>Smart Contract</h5>
                </div>
              </Carousel>
            </h2>
          </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorShap}/>
    </section>
  )
}