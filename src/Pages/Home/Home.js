import React from 'react';
import Review from '../Review/Review';
import Bannar from './Bannar';
import Section from './Section';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <Section/>
            <Review/>
        </div>
    );
};

export default Home;