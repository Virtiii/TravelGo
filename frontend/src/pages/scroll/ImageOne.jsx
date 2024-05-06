import { Parallax } from 'react-parallax';
import img1 from '../../assets/images/img1.jpg';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../../shared/CommonSection';
import '../../styles/Tours.css';
import SearchBar from '../../shared/SearchBar';

const ImageOne = () => (
  <Parallax className='image' blur={0} bgImage={img1} strength={800} bgImageStyle={{minHeight: "100vh"}}>
    <div className='content'>
      <div className="wrapper">
        
        <div className="centered">
          <CommonSection title={"All Tours"}  />
          </div>

          <section className='first'>
            <Container>
              <Row>
                <Col>
                  <div className="searchbar-wrapper">
                    <SearchBar />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
      </div>
    </div>
  </Parallax>
);

export default ImageOne;
