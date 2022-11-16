import React from 'react';

const SingleService = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card  bg-base-100 drop-shadow-xl mt-10">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;