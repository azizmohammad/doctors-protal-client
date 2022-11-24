import React from 'react';

const SingleAppoinment = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div>
            <div className="card bg-gray-50 shadow-xl text-center mt-10">
                <div className="card-body ">
                    <h2 className="text-center text-secondary text-xl font-bold">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} </p>
                    <p>Price: ${price} </p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(option)}
                            htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAppoinment;