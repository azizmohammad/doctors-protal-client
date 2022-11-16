import React from 'react';
import InfoCards from '../InfoPage/InfoCards';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
        </div>
    );
};

export default Home;