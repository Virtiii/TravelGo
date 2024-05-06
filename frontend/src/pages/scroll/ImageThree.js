import { Parallax } from 'react-parallax';
// import i3 from '../../assets/images/tour.jpg';
import i3 from '../../assets/images/img3.jpg';
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={i3} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageThree