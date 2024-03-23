import React from 'react'
import Slider from 'react-slick'
import a1 from '../../assets/images/ava-1.jpg'
// import a2 from '../../assets/images'
// import a3 from '../../assets/images'


const Testimonial = () => {

    const setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // dots: true,
                    // infinite: true,
                },
            },
        ]
    }

    return (
        <div>
            <Slider {...setting}>
                <div className="testimonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, nobis a? Sit distinctio ducimus praesentium alias aliquid ipsa, voluptas labore.</p>

                    <div className="d-flex align-itms-center gap-4 mt-3">
                        <img src={a1} className='w-25 h-25 rounded-2' alt="" />
                        <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, nobis a? Sit distinctio ducimus praesentium alias aliquid ipsa, voluptas labore.</p>

                    <div className="d-flex align-itms-center gap-4 mt-3">
                        <img src={a1} className='w-25 h-25 rounded-2' alt="" />
                        <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, nobis a? Sit distinctio ducimus praesentium alias aliquid ipsa, voluptas labore.</p>

                    <div className="d-flex align-itms-center gap-4 mt-3">
                        <img src={a1} className='w-25 h-25 rounded-2' alt="" />
                        <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, nobis a? Sit distinctio ducimus praesentium alias aliquid ipsa, voluptas labore.</p>

                    <div className="d-flex align-itms-center gap-4 mt-3">
                        <img src={a1} className='w-25 h-25 rounded-2' alt="" />
                        <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, nobis a? Sit distinctio ducimus praesentium alias aliquid ipsa, voluptas labore.</p>

                    <div className="d-flex align-itms-center gap-4 mt-3">
                        <img src={a1} className='w-25 h-25 rounded-2' alt="" />
                        <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Testimonial
