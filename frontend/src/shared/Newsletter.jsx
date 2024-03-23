import React from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import n from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="newsletter content">
                <div>
                  <h2>Subscribe to get all the updates.</h2>
                </div>
                <div>
                  <input type="email" placeholder='Enter your mail!' />
                </div>
                <div>
                  <button className="btn newsletter_btn">Subscribe</button>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque repellendus autem maxime architecto distinctio officia exercitationem sequi aliquam non?</p>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="newsletter_img">
                <img src={n} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Newsletter;
