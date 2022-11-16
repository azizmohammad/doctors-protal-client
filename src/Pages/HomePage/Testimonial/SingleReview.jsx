import React from 'react';

const SingleReview = ({ review }) => {

    const { name, userReview, img, location } = review;

    return (
        <div className="card bg-white shadow-xl text-primary-content">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="card-actions justify-start mt-3">
                    <img className='w-14 h-14' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleReview;