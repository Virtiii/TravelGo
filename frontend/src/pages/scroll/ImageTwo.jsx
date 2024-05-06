import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';
import '../../styles/Tours.css';
import TourList from '../../shared/TourList';
import tourData from '../../assets/data/tour';
import img2 from '../../assets/images/img2.jpg';

const ImageTwo = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4); // Calculate the number of pages based on tourData length
    setPageCount(pages);
  }, []);

  return (
    <Parallax className='image' blur={0} bgImage={img2} strength={800} bgImageStyle={{ minHeight: "100vh" }}>
      <div className="two">
        <section>
          <Container>
            <Row>
              {tourData.slice(page * 4, (page + 1) * 4).map(tour => ( // Display 4 tours per page
                <Col lg="3" key={tour.id}>
                  <TourList tour={tour} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)} className={page === number ? 'active_page' : ''}>
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Parallax>
  );
};

export default ImageTwo;
