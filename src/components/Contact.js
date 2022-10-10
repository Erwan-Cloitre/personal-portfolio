import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  const [ sent, setSent ] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rqwq189', 'template_yoaku6d', form.current, 'hgA6eU5_bi7kSp9QJ')
      .then((result) => {
          setSent(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <label>First Name</label>
                  <input type="text" name="first_name" required="required"/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <label>Last Name</label>
                  <input type="text" name="last_name" required="required"/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <label>Email</label>
                  <input type="email" name="user_email" required="required"/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <label>Phone No.</label>
                  <input type="TEL" name="phone" required="required"/>
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <label>Message</label>
                  <textarea rows="6" name="message" required="required"/>
                  {!sent ? (
                    <button type="submit"><span>Send</span></button>
                  ) : (
                    <h1 className="px-1">Email Sent &#x2728;</h1>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}