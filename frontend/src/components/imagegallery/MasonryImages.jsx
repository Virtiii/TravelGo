import React from 'react'
import gallery from './gallery'
// import '../../styles/home.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const MasonryImages = () => {
    return (
        <div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
                <Masonry gutter='1rem'>
                    {gallery.map((item, index) => (
                        <img  className='masonry_img'  src={item}
                            key={index}
                            alt=""
        style = {{ width: "100%", display: "block", borderRadius: "10px" }}
        />
    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default MasonryImages
