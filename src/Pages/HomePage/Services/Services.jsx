import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import SingleService from './SingleService';

const Services = () => {

    const servicesData = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        },
    ]

    return (
        <div>
            <div className='text-center mt-20'>
                <h4 className='text-primary font-semibold text-xl uppercase'>Our Services</h4>
                <h2 className='text-neutral font-bold text-3xl capitalize'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }

            </div>

        </div>
    );
};

export default Services;