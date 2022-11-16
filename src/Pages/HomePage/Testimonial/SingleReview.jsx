import React from 'react';

const SingleReview = ({ review }) => {

    const { name, userReview, img, location } = review;

    return (
        <div className="card bg-white shadow-xl text-primary-content">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="card-actions justify-start mt-4 items-center">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg text-neutral font-semibold'>{name}</h2>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;