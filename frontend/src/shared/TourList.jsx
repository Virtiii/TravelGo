import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour.css';
import calcrating from '../utils/avgRating';

const TourList = ({ tour }) => {
    const { id, title, city, photo, price, featured, reviews } = tour;

    const { totalrating, avgRating } = calcrating(reviews);

    const [isHeartSolid, setIsHeartSolid] = useState(false);
    const [changeCount, setChangeCount] = useState(
        parseInt(localStorage.getItem(`changeCount_${id}`)) || 0
    );

    useEffect(() => {
        const savedIsHeartSolid = localStorage.getItem(`isHeartSolid_${id}`) === 'true';
        setIsHeartSolid(savedIsHeartSolid);
    }, [id]);

    const toggleHeartIcon = () => {
        const newIsHeartSolid = !isHeartSolid;
        setIsHeartSolid(newIsHeartSolid);
        const newChangeCount = newIsHeartSolid ? changeCount + 1 : changeCount;
        setChangeCount(newChangeCount);
        localStorage.setItem(`changeCount_${id}`, newChangeCount);
        localStorage.setItem(`isHeartSolid_${id}`, newIsHeartSolid);
    };

    return (
        <div className='tour_card'>
            <Card className="custom-card">
                <div className="tour_img">
                    <img src={photo} alt="tour-img" />

                    <div className="icon" onClick={toggleHeartIcon} style={{ position: 'relative', top: '-72%', right: '-80%', fontSize: '24px' }}>
                        <i id="heartIcon" className={isHeartSolid ? "fas fa-heart" : "far fa-heart"}></i>
                        <p id="changeCount" style={{ position: 'relative', top: '-36px', right: '-28px' }}>{changeCount}</p>
                    </div>

                    {/* {featured && <span>Featured</span>} */}
                </div>
                <CardBody>
                    <div className="card_bottom_wrapper">
                        <div className="card_top d-flex align-items-center justify-content-center">
                            <span className="tour_location d-flex align-items-center gap-1">
                                <i className="ri-map-pin-line"></i> {city}
                            </span>
                            <span className="tour_rating d-flex align-items-center gap-1">
                                <i className="ri-star-fill"></i>
                                {avgRating === 0 ? null : avgRating}
                                {totalrating === 0 ?
                                    ("Not rated.")
                                    : (<span>({reviews.length})</span>)
                                }
                            </span>
                        </div>

                        <h5 className="tour_title"><Link to={`/tours/${id}`}>{title}</Link></h5>

                        <div className="card_bottom d-flex align-items-center justify-content-center mt-3">
                            <h5>${price} <span>/per person</span></h5>
                            <button className="btn booking_btn">
                                <Link to={`/tours/${id}`}>Book Now</Link>
                            </button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourList;
