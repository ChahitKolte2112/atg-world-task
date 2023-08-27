import React from "react";
import "./Banner.css";
import banner from "../../assets/banner.png";

const Banner = () => {
    return (
        <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
            style={{marginTop:"-10px"}}
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 black-tint" />
                    <div className="carousel-caption d-flex flex-column align-items-start w-100 position-absolute start-50 translate-middle navbar_padding">
                        <h5 className="fs-1 fw-bold">Computer Engineer</h5>
                        <p className="fs-6">
                            142,765 Computer Engineer follow this
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
