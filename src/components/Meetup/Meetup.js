import React from 'react';
import { BsEye } from 'react-icons/bs'
import { BsFillShareFill } from 'react-icons/bs'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { RxDotsHorizontal } from 'react-icons/rx'
import article1 from '../../assets/article1.png'
import ronal_jones from '../../assets/ronal_jones.png'
import location from '../../assets/location.png'


const Meetup = () => {
    return (
        <div className='mt-4'>
            <div className="card">
                <img src={article1} class="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title">🗓️ Meetup</h5>
                    <div className='d-flex'>
                        <h1 className='fw-bold'>Finance & Investment Elite Social Mixer @Lujiazui</h1>
                        <div class="dropdown">
                            <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <RxDotsHorizontal className='fs-3'></RxDotsHorizontal>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">Report</a></li>
                                <li><a class="dropdown-item" href="#">Option 3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center my-3'>
                        <div className='d-flex fs-5 align-items-center  me-5'>
                            <BsFillCalendarCheckFill className='me-2'></BsFillCalendarCheckFill>
                            <p className='mb-0 fw-semibold'>Fri, 12 Oct, 2018</p>
                        </div>
                        <div className='d-flex fs-5'>
                            <div className='d-flex  align-items-center'>
                                <img src={location} alt="" className='icon' />
                                <p className='mb-0 fw-semibold'>Noida, India</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-outline-dark w-100 my-3 text-danger fw-semibold'>Visit Website</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-between  my-3'>
                        <div className='d-flex align-items-center'>
                            <img src={ronal_jones} alt="" className='me-3 fw-bold' />
                            <h3>Ronal Jones</h3>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='d-flex me-5 align-items-center d-none d-lg-flex d-xl-flex d-xxl-flex d-xxl-flex'>
                                <BsEye className='fs-3 me-2'></BsEye>
                                <p className='mb-0'>1.4K Views</p>
                            </div>
                            <button className='btn btn-secondary px-3 d-flex align-items-center'>
                                <BsFillShareFill className='me-sm-2'></BsFillShareFill>
                                <span className='d-flex d-lg-none d-xl-none d-xxl-none d-xxl-none'>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meetup;