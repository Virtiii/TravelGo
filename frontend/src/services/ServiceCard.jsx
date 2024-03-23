import React, { useState, useEffect } from 'react';
import './servicecard.css';
import i1 from '../assets/images/download-removebg-preview.png';
import i2 from '../assets/images/download__2_-removebg-preview.png';
import i3 from '../assets/images/download__3_-removebg-preview.png';

const ServiceCard = () => {
    const [activeCard1, setActiveCard1] = useState(false);
    const [activeCard2, setActiveCard2] = useState(false);
    const [activeCard3, setActiveCard3] = useState(false);

    const handleFlip = (cardNumber) => {
        if (cardNumber === 1) {
            setActiveCard1(true);
            setTimeout(() => setActiveCard1(false), 6000); 
        } else if (cardNumber === 2) {
            setActiveCard2(true);
            setTimeout(() => setActiveCard2(false), 6000); 
        } else if (cardNumber === 3) {
            setActiveCard3(true);
            setTimeout(() => setActiveCard3(false), 6000); 
        }
    };

return (
   <div>
        <React.Fragment>
            <main>
                <div className='h-screen centered'>
                    <div className="card-container">
                        <div
                            onClick={() => handleFlip(1)}
                            className={`relative card ${activeCard1 ? 'cardFlip' : ''}`}>
                            {/* front */}
                            <div className='front'>
                                <div className="content">
                                    <h3>Calculate Weather</h3>
                                    <img src={i1} alt="" className="i1"/>
                                </div>
                            </div>

                            {/* back */}
                            <div className="absolute top-0 back">
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim cupiditate cum sed ut reprehenderit nemo amet necessitatibus laboriosam asperiores minima!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="card-container">
                        <div
                            onClick={() => handleFlip(2)}
                            className={`relative card ${activeCard2 ? 'cardFlip' : ''}`}>
                            {/* front */}
                            <div className='front'>
                                <div className="content">
                                <h3>Best Tour Guide</h3>
                                    <img src={i2} alt="" className="i2"/>
                                </div>
                            </div>

                            {/* back */}
                            <div className="absolute top-0 back">
                                <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim cupiditate cum sed ut reprehenderit nemo amet necessitatibus laboriosam asperiores minima!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="card-container">
                        <div
                            onClick={() => handleFlip(3)}
                            className={`relative card ${activeCard3 ? 'cardFlip' : ''}`}>
                            {/* front */}
                            <div className='front'>
                                <div className="content">
                                <h3>Customization</h3>
                                    <img src={i3} alt="" className="i3" />
                                </div>
                            </div>

                            {/* back */}
                            <div className="absolute top-0 back">
                                <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim cupiditate cum sed ut reprehenderit nemo amet necessitatibus laboriosam asperiores minima!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
</div>
  )
}

export default ServiceCard;
