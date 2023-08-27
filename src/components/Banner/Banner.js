import React from 'react';
import './Banner.css'
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-block w-100 black-tint" ></div>
                        {/* <img className="d-block w-100 black-tint" alt="..." /> */}
                        <div className="carousel-caption d-flex flex-column align-items-start w-100 position-absolute start-50 translate-middle navbar_padding">
                            <h5 className='fs-1 fw-bold'>Computer Engineer</h5>
                            <p className='fs-6'>142,765 Computer Engineer follow this</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;