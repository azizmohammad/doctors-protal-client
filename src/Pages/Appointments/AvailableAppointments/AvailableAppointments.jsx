import React, { useEffect, useState } from 'react';
import SingleAppoinment from './SingleAppoinment';
import BookingModal from '../BookingModal/BookingModal';
import { format } from 'date-fns';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointment, setAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])

    return (
        <section className='mt-20'>

            <h2 className='font-bold text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')}.</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10'>
                {
                    appointment.map(option => <SingleAppoinment
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></SingleAppoinment>)
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;