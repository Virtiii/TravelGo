import React from 'react'
import './commonsection.css'
import {Container,Row,Col} from "reactstrap"
const CommonSection = ({title}) => {
  return (
    <div>
      <section className="common_section">
        <Row>
            <Col lg="12">
            <h1>{title}</h1>
            </Col>
        </Row>
      </section>
    </div>
  )
}

export default CommonSection
