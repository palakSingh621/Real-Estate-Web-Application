import React from 'react'
import './slider.scss'

function Slider({images}) {
    return (
    <div className='slider'>
        <div className="fullSlider">
            <div className="arrow">
                <img src="/arrow.png" alt=""/>
            </div>
            <div className="image">
                <img src={images[0]} alt=""/>
            </div>
            <div className="arrow">
                <img src="/arrow.png" className='right' alt=""/>
            </div>
            <div className="close">x</div>
        </div>
        <div className="bigImage">
            <img src={images[0]} alt=""/>
        </div>
        <div className="smallImage">
            {images.slice(1).map((image,index)=>(
                <img src={image} alt="" key={index}/>
            ))}
        </div>
    </div>
    )
}

export default Slider
