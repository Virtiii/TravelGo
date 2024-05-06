import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Tours.css';
import ImageOne from './scroll/ImageOne';
import ImageTwo from './scroll/ImageTwo';
import ImageThree from './scroll/ImageThree';
const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(5 / 4); //later we will use bac
    setPageCount(pages);
  }, [page]);
  return (
    <div>
      <br />
      <br />
      <ImageOne/>
      <ImageTwo/>
      {/* <ImageThree/> */}
      </div >
  );
};

export default Tours;
