import React from 'react';
import { AiOutlineLike } from 'react-icons/ai'
import leisure from '../../assets/leisure.png'
import activism from '../../assets/activism.png'
import mba from '../../assets/mba.png'
import philosophy from '../../assets/philosophy.png'

const RecommendedGroups = () => {
    return (
        <div className='mt-3'>
            <div className='d-flex flex-nowrap mx-auto justify-content-center'>
                <AiOutlineLike className='me-3'></AiOutlineLike>
                <h5 className='fs-6 justify-content-center'>RECOMMENDED GROUPS</h5>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={leisure} alt="" />
                    <h5 className='mb-0 ms-2'>Leisure</h5>
                </div>
                <button className='btn btn-secondary btn-sm rounded mt-2'>Follow</button>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={activism} alt="" />
                    <h5 className='mb-0 ms-2'>Activism</h5>
                </div>
                <button className='btn btn-secondary btn-sm rounded mt-2'>Follow</button>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={mba} alt="" />
                    <h5 className='mb-0 ms-2'>MBA</h5>
                </div>
                <button className='btn btn-secondary btn-sm rounded mt-2'>Follow</button>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={philosophy} alt="" />
                    <h5 className='mb-0 ms-2'>Philosophy</h5>
                </div>
                <button className='btn btn-secondary btn-sm rounded mt-2'>Follow</button>
            </div>
            <div className='d-flex justify-content-end'>
                <a href="#" class="link mt-4 w-full">See More...</a>
            </div>
        </div>
    );
};

export default RecommendedGroups;