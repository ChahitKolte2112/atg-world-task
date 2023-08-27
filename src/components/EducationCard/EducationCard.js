import React from 'react';
import { BsEye } from 'react-icons/bs'
import { BsFillShareFill } from 'react-icons/bs'
import article1 from '../../assets/article1.png'
import sarah_west from '../../assets/sarah_west.png'

const EducationCard = () => {
    return (
        <div className='mt-4'>
            <div className="card">
                <img src={article1} class="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title">🔬️ Education</h5>
                    <h1 className='fw-bold'>Tax Benefits for Investment under National Pension Scheme launched by Government</h1>
                    <p className="card-text fs-4">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className='d-flex align-items-center justify-content-between my-3'>
                        <div className='d-flex align-items-center'>
                            <img src={sarah_west} alt="" className='me-3 fw-bold' />
                            <h3>Sarah West</h3>
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

export default EducationCard;