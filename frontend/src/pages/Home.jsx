import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import Subtitle from './../shared/Subtitle';
import '../styles/home.css';
import worldimg from '../assets/images/worldimg.jpg';
import worldimg1 from '../assets/images/worldimg-removebg-preview.png';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero from '../assets/images/hero.mp4';
import herovid from '../assets/images/hero-video.mp4';
import SearchBar from '../shared/SearchBar';
import ServiceCard from '../services/ServiceCard';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experience from '../assets/images/experience.png'
import MasonryImages from '../components/imagegallery/MasonryImages';
import Testimonial from '../components/Testimonial/Testimonial'
import CountUp from 'react-countup';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, FadeUp } from "react-scroll-motion";

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100); // Adjusted delta for smoother animation
    const toRotate = [" memories.", " adventures.", " experiences.", " friendships."];
    const period = 1500; // Adjusted period for smoother animation

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5); // Adjusted delta for smoother deletion animation
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100); // Reset delta for smoother reset animation
        }
    }

    return (

        <div className="full">
            <ScrollContainer>

                <video autoPlay muted loop className='fullscreen-video'>
                    <source src={herovid} type="video/mp4" />
                </video>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero_content">
                                <div className="hero_subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Know Before You Go'} />
                                    <img src={worldimg1} alt="" className="hero_subtitle_img" />
                                </div>
                                <section className="banner" id="home">
                                    <TrackVisibility>
                                        {({ isVisible }) => (
                                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                <h1>Travelling opens the door to creating
                                                    <span className="highlight txt-rotate" dataPeriod="1500" data-rotate='[ " memories."," adventures."," experiences."," friendships."]'>

                                                        <span className="wrap">{text}</span>
                                                    </span>
                                                </h1>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptas minus et laudantium totam eveniet velit quod deserunt libero dolorum at, minima harum exercitationem sed.</p>
                                            </div>
                                        )}
                                    </TrackVisibility>
                                </section>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero_image-box">
                                <img src={hero1} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero_image-box mt-4">
                                <img src={hero2} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero_image-box mt-5">
                                <video src={hero} alt="" controls />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>


                <section>
                    <Container>

                        <Row>
                            <Col lg="3">
                                <h5 className="services_subtitle">What we serve</h5>
                                <h2 className="services_title">We offer our best services</h2>
                            </Col>

                            <React.Fragment>
                                <ServiceCard />
                            </React.Fragment>
                        </Row>
                    </Container>


                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className='mb-4'>
                                <Subtitle subtitle={'Explore'} />
                                <h2 className="featured_tour-title" style={{ color: 'black' }}>Our Featured Tours</h2>
                            </Col>
                            <FeaturedTourList />
                        </Row>
                    </Container>
                </section>


                <section>
                    <Container>
                        <Row>
                            <Col lg='6'>
                                <div className="experience_content">
                                    <Subtitle subtitle={'Experience'} />
                                    <h2 style={{ color: 'black' }}>With our all experience <br /> we will serve you</h2>
                                    <p style={{ color: 'black' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className="counter_wrapper d-flex align-items center gap-5">
                                    <div className="counter_box">
                                        <CountUp start={0} end={12203} duration={2} separator="," />
                                        <h6>Successful Trips</h6>
                                    </div>
                                    <div className="counter_box">
                                        <CountUp start={0} end={2087} duration={2} separator="," />
                                        <h6>Regular Clients</h6>
                                    </div>
                                    <div className="counter_box">
                                        <CountUp start={0} end={15} duration={2} />
                                        <h6>Years Experience</h6>
                                    </div>
                                </div>
                            </Col>

                            <Col lg='6'>
                                <div className="experienceimg">
                                    <img src={experience} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <Subtitle subtitle={'Gallery'} />
                                <h2 className="gallery_title">
                                    Visit our customers tour gallery
                                </h2>
                            </Col>
                            <Col lg='12'>
                                <MasonryImages />
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <Subtitle subtitle={'Customers Love'} />
                                <h2 className="testimonial_title">
                                    What our customers say about us
                                </h2>
                            </Col>
                            <Col lg='12'>
                                <Testimonial />
                            </Col>
                        </Row>
                    </Container>
                </section>

            </ScrollContainer>

        </div>
    );
}

export default Home;
