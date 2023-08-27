import React from 'react';
import join_group from '../../assets/join_group.png'
import inverted_triangle from '../../assets/inverted_triangle.png'

const WriteJoin = () => {
    return (
        <div className=''>
            <button type="button" class="btn btn-secondary me-2 fw-semibold">
                Write Post
                <img src={inverted_triangle} alt="" className='ms-2' />
            </button>
            <button type="button" class="btn btn-primary fw-semibold">
                <img src={join_group} alt="" className='me-2' />
                Join Group</button>
        </div>
    );
};

export default WriteJoin;