import React from 'react'
import './searchbar.css'
import { useRef } from 'react';
import { Col, Form, FormGroup } from "reactstrap";
const SearchBar = () => {

    const locref = useRef('')
    const disref = useRef(0)
    const maxref = useRef(0)


    const AlertMessage = ({ message, type, onClose }) => {
        return (
            <div className={`alert ${type}`}>
                <span className="closebtn" onClick={onClose}>&times;</span>
                {message}
            </div>
        );
    }


    const searchHandler = () => {
        const loc = locref.current.value
        const dis = locref.current.value
        const max = locref.current.value

        if (loc == '' || dis == '' || max == '') {
            // return <AlertMessage message="All fields are required!" type="warning" onClose={() => { }} />;
            return alert('All fields are required!');
        }
    }

return (
    <div>
        <Col lg="12">
            <div className="search_bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form_group form_group-fast">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder='Where are you going?' ref={locref} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form_group form_group-fast">
                        <span>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder='Distance k/m' ref={disref} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form_group form_group-last">
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='0' ref={maxref} />
                        </div>
                    </FormGroup>

                    <span className="search_icon" type="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    </div>
)
}

export default SearchBar
