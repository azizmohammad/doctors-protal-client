import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: tretmentName, slots } = treatment;
    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const slot = form.slot.value;

        const booking = {
            appoinmentDate: format(selectedDate, "PP"),
            treatment: tretmentName,
            patient: name,
            slot,
            email,
            number,
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{tretmentName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input input-bordered input-neutral w-full" />
                        <select name='slot' className="select input-bordered select-neutral w-full ">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered input-meutral w-full" required />
                        <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered input-meutral w-full" required />
                        <input name='number' type="Number" placeholder="Phone Number" className="input input-bordered input-meutral w-full" />
                        <br />
                        <input className='w-full btn btn-neutral text-center text-white' type="submit" value="SUBMIT" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;