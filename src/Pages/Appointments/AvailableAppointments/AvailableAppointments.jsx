import React, { useState } from 'react';
import SingleAppoinment from './SingleAppoinment';
import BookingModal from '../BookingModal/BookingModal';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointment = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinmentoption'],
        queryFn: () => fetch(`http://localhost:5000/appoinmentoption?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;