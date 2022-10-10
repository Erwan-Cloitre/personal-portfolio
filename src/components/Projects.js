import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
 
export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      URLS: "https://www.twitch.tv/teuf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      URLS: "https://www.twitch.tv/teuf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      URLS: "https://www.twitch.tv/teuf",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
        <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInUp": ""}>
          <h2>Projects</h2>
          <p>Do you want to know more about me ? Explore my path.</p>
          </div>}
            </TrackVisibility>
          <Tab.Container id="project-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">All projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Web2 projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Web3 projects</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard 
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</Tab.Pane>
            <Tab.Pane eventKey="third">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</Tab.Pane>
          </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroundRight"/>
    </section>
  )
}