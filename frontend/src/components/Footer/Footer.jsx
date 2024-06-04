import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo1 from '../../assets/images/logo-removebg-preview.png'

const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]


const year = new Date().getFullYear();


const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo1} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur similique ad porro? Eos, molestias.</p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <ListGroup className='footer_quick-links'>
              <h5 className="footer_link-title">Discover</h5>
              {
                quick_links.map((item, index) => (
                  <ListGroupItem className="ps-0 border-0 gray">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                )
                )}
            </ListGroup>
          </Col>

          <Col lg="3">
            <ListGroup className='footer_quick-links'>
              <h5 className="footer_link-title">Discover</h5>
              {
                quick_links2.map((item, index) => (
                  <ListGroupItem className="ps-0 border-0 gray">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>

                )
                )}
            </ListGroup>
          </Col>

          <Col lg="3">
            <ListGroup className='footer_quick-links'>
              <h5 className="footer_link-title">Contact</h5>
              {

                <><ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3 gray">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0">Lorem, ipsum.</p>

                </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3 gray ">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span>
                        <i className="ri-mail-line"></i>
                      </span>
                      Email:
                    </h6>
                    <p className="mb-0">abc@gmail.com</p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3 gray">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span>
                        <i className="ri-phone-fill"></i>
                      </span>
                      Email:
                    </h6>
                    <p className="mb-0">+91 12345-67890</p>
                  </ListGroupItem>
                </>
              }
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright {year}, All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Footer
