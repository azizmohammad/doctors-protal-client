import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import pepole1 from '../../../assets/images/people1.png'
import pepole2 from '../../../assets/images/people2.png'
import pepole3 from '../../../assets/images/people3.png'
import SingleReview from './SingleReview';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            userReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: pepole1,
            location: "California",
        },
        {
            _id: 2,
            name: "Winson Herry",
            userReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: pepole2,
            location: "California",
        },
        {
            _id: 3,
            name: "Winson Herry",
            userReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: pepole3,
            location: "California",
        },
    ]

    return (
        <section className='mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-secondary font-bold'>Testimonial</h3>
                    <h1 className='text-2xl text-neutral font-bold'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48 mx-auto' src={quote} alt="" />
                </figure>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-20'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>

        </section>
    );
};

export default Testimonial;