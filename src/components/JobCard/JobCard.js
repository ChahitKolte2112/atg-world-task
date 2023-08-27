import React from 'react';
import { BsEye } from 'react-icons/bs'
import { BsFillShareFill } from 'react-icons/bs'
import { TfiBag } from 'react-icons/tfi'
import { RxDotsHorizontal } from 'react-icons/rx'
import joseph_gray from '../../assets/joseph_gray.png'
import location from '../../assets/location.png'


const JobCard = () => {
    return (
        <div className='mt-4'>
            <div className="card">
                <div className="card-body text-start">
                    <h5 className="card-title">💼️ Job</h5>
                    <div className='d-flex justify-content-between'>
                        <h1 className='fw-bold'>Software Developer</h1>
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
                            <TfiBag className='me-2'></TfiBag>
                            <p className='mb-0 fw-semibold'>Innovaccer Analytics Private Ltd.</p>
                        </div>
                        <div className='d-flex fs-5'>
                            <div className='d-flex  align-items-center'>
                                <img src={location} alt="" className='icon' />
                                <p className='mb-0 fw-semibold'>Noida, India</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-outline-dark w-100 my-3 text-success fw-semibold'>Apply on Timesjobs</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-3'>
                        <div className='d-flex align-items-center'>
                            <img src={joseph_gray} alt="" className='me-3 fw-bold' />
                            <h3>Joseph Gray</h3>
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

export default JobCard;