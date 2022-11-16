import React, { useState } from 'react';
import chire from '../../../assets/images/chair.png';
import bgimg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';


const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p className='text-secondary font-bold'>You Have Selected Date {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <header className='py-20' style={{
            background: `url(${bgimg})`,
            backgroundSize: "contain bg-no-repeat",
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chire} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />

                    <div className=' shadow-2xl rounded-lg mt-10 lg:mt-0 lg:mr-10 lg:w-1/2 md:w-full w-full flex justify-center '>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            footer={footer}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;