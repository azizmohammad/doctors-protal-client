import React from 'react';
import tretment from '../../../assets/images/treatment.png'

const About = () => {
    return (

        <div className="hero lg:card-side flex-col lg:flex-row-reverse lg:px-32 mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={tretment} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='lg:ml-5'>
                    <h1 className="capitalize font-bold text-5xl w-auto">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;