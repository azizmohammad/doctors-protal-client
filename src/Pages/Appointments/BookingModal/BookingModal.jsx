import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <form className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input input-bordered input-neutral w-full" />
                        <select className="select input-bordered select-neutral w-full ">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-meutral w-full" required />
                        <input name='number' type="Number" placeholder="Phone Number" className="input input-bordered input-meutral w-full" required />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-meutral w-full" required />
                        <br />
                        <input className='w-full btn btn-neutral text-center text-white' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;